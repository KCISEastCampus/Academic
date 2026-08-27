// Cloudflare Worker for Decap CMS GitHub OAuth
// 处理 /auth 和 /auth/github 两个路径（后者用于绕过浏览器缓存）

const GITHUB_CLIENT_ID = "Ov23li8iRwGmP6JGnDUl";
const GITHUB_CLIENT_SECRET = "60ddff0976cfb563b316fb1652358b115d8ead37";

function randomHex(bytes) {
  const buf = new Uint8Array(bytes);
  crypto.getRandomValues(buf);
  return Array.from(buf)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    // /auth 或 /auth/github - redirect to GitHub OAuth
    if (path === "/auth" || path === "/auth/github") {
      const redirect_uri = "https://" + url.hostname + "/callback";
      const authorizationUri =
        "https://github.com/login/oauth/authorize" +
        "?client_id=" + GITHUB_CLIENT_ID +
        "&redirect_uri=" + encodeURIComponent(redirect_uri) +
        "&scope=public_repo,user" +
        "&state=" + randomHex(4);

      return new Response(null, {
        headers: {
          location: authorizationUri,
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
        status: 302,
      });
    }

    // /callback - exchange code for token, send back to CMS
    if (path === "/callback") {
      const code = url.searchParams.get("code");
      if (!code) {
        return new Response("Missing code", { status: 400 });
      }

      const redirect_uri = "https://" + url.hostname + "/callback";

      const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          client_id: GITHUB_CLIENT_ID,
          client_secret: GITHUB_CLIENT_SECRET,
          code: code,
          redirect_uri: redirect_uri,
        }),
      });

      const tokenData = await tokenResponse.json();

      if (tokenData.error) {
        return new Response("Error: " + tokenData.error_description, { status: 401 });
      }

      const token = tokenData.access_token;

      const body = `
<html>
<head>
  <script>
    const receiveMessage = (message) => {
      window.opener.postMessage(
        'authorization:github:success:${JSON.stringify({ token })}',
        '*'
      );
      window.removeEventListener("message", receiveMessage, false);
    }
    window.addEventListener("message", receiveMessage, false);
    window.opener.postMessage("authorizing:github", "*");
  </script>
  <body>
    <p>Authorizing Decap...</p>
  </body>
</head>
</html>
`;

      return new Response(body, {
        headers: {
          "Content-Type": "text/html",
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      });
    }

    return new Response("Hello 👋");
  },
};
