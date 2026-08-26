// Cloudflare Worker for Decap CMS GitHub OAuth
// 部署到: https://kcisec-cms-auth.ericstone2009.workers.dev

const GITHUB_CLIENT_ID = "Ov23li8iRwGmP6JGnDUl";
const GITHUB_CLIENT_SECRET = "60ddff0976cfb563b316fb1652358b115d8ead37";

export default {
  async fetch(request) {
    const url = new URL(request.url);

    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    // Auth endpoint - redirect to GitHub OAuth
    if (url.pathname === "/auth") {
      const redirectUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${encodeURIComponent(url.origin + "/callback")}&scope=repo`;
      return Response.redirect(redirectUrl, 302);
    }

    // Callback endpoint - exchange code and send token back to CMS
    if (url.pathname === "/callback") {
      const code = url.searchParams.get("code");
      if (!code) {
        return new Response("Missing code parameter", { status: 400, headers: corsHeaders });
      }

      try {
        // Exchange code for access token
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
          }),
        });

        const tokenData = await tokenResponse.json();

        if (tokenData.error) {
          return new Response(`Error: ${tokenData.error_description}`, {
            status: 401,
            headers: corsHeaders,
          });
        }

        // Return HTML that sends token back to CMS via postMessage
        const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Authorizing...</title>
</head>
<body>
  <p>Authorizing... This window should close automatically.</p>
  <script>
    (function() {
      var token = ${JSON.stringify(tokenData.access_token)};
      var msg = JSON.stringify({ token: token, provider: "github" });
      if (window.opener) {
        window.opener.postMessage(msg, "*");
        window.close();
      }
    })();
  </script>
</body>
</html>`;

        return new Response(html, {
          headers: { ...corsHeaders, "Content-Type": "text/html; charset=utf-8" },
        });
      } catch (err) {
        return new Response(`Error: ${err.message}`, {
          status: 500,
          headers: corsHeaders,
        });
      }
    }

    return new Response("Not Found", { status: 404, headers: corsHeaders });
  },
};
