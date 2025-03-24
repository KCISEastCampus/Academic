function generateTOC() {
  const contentContainer = document.getElementById("content-container");
  const tocContent = document.querySelector(".toc-content");

  if (!contentContainer || !tocContent) return;

  const headers = contentContainer.querySelectorAll("h1, h2, h3, h4");
  let tocHTML = "<ul>";

  headers.forEach((header, index) => {
    const id = header.id || `toc-heading-${index}`;
    header.id = id; // assign an id if not present

    levelClass = "toc-" + header.tagName.toLowerCase();
    tocHTML += `<li class="${levelClass} toc-item"><a href="#${id}">${header.textContent}</a></li>`;
  });

  tocHTML += "</ul>";
  tocContent.innerHTML = tocHTML;

  // add class 'active' on scroll
  const tocLinks = document.querySelectorAll(".toc-content a");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tocLinks.forEach((link) => link.classList.remove("active"));
          document.querySelector(`.toc-content a[href="#${entry.target.id}"]`)?.classList.add("active");
        }
      });
    },
    { rootMargin: "-50px 0px -70% 0px", threshold: 0.2 }
  );

  headers.forEach((header) => observer.observe(header));
}
