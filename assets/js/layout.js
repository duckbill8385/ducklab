(function () {
  "use strict";

  const page = document.body.dataset.page || "home";
  const isHome = page === "home";
  const homePrefix = isHome ? "" : "index.html";

  const navItems = [
    { id: "home", label: "Home", href: `${homePrefix}#home` },
    { id: "news", label: "News", href: `${homePrefix}#news` },
    { id: "research", label: "Research", href: `${homePrefix}#research` },
    { id: "people", label: "People", href: "people.html" },
    { id: "publications", label: "Publications", href: "publications.html" },
    { id: "projects", label: "Projects", href: "projects.html" },
    { id: "gallery", label: "Gallery", href: `${homePrefix}#gallery` },
    { id: "apply", label: "Apply", href: `${homePrefix}#apply` },
  ];

  const activeNav = page === "home" ? "home" : page;

  const navMarkup = navItems
    .map((item) => {
      const activeClass = item.id === activeNav ? ' class="active"' : "";
      return `<li><a href="${item.href}"${activeClass}>${item.label}</a></li>`;
    })
    .join("");

  const externalAttrs = 'target="_blank" rel="noopener noreferrer"';

  const header = `
    <header id="header" class="header fixed-top">
      <div class="topbar d-flex align-items-center">
        <div class="container d-flex justify-content-end justify-content-md-between">
          <div class="contact-info d-flex align-items-center"></div>
        </div>
      </div>

      <div class="branding d-flex align-items-center">
        <div class="container position-relative d-flex align-items-center justify-content-between">
          <a href="index.html" class="logo d-flex align-items-center" aria-label="DUCK Lab home">
            <img src="assets/img/logo.png" alt="DUCK Lab logo">
            <h1 class="sitename">DUCK Lab</h1>
          </a>

          <nav id="navmenu" class="navmenu" aria-label="Primary navigation">
            <ul>
              ${navMarkup}
            </ul>
            <button type="button" class="mobile-nav-toggle d-xl-none bi bi-list" aria-label="Toggle navigation" aria-controls="navmenu" aria-expanded="false"></button>
          </nav>
        </div>
      </div>
    </header>
  `;

  const footer = `
    <footer id="footer" class="footer dark-background">
      <div class="container">
        <div class="row gy-3 justify-content-center">
          <div class="col-lg-3 col-md-6 d-flex">
            <i class="bi bi-geo-alt icon" aria-hidden="true"></i>
            <div class="address">
              <h4>Address</h4>
              <p>152, Jukjeon-ro, Suji-gu, Yongin-si,</p>
              <p>Gyeonggi-do, Republic of Korea, 16890</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex">
            <i class="bi bi-telephone icon" aria-hidden="true"></i>
            <div>
              <h4>Contact</h4>
              <p>
                <strong>Phone:</strong> <span>+82 31-8005-3654 </span><br>
                <strong>Email:</strong> <span>suno8386@dankook.ac.kr</span><br>
              </p>
            </div>
          </div>

          <div class="col-lg-2 col-md-4">
            <h4>Follow Us</h4>
            <div class="social-links d-flex">
              <a href="https://drive.google.com/file/d/1GwWGlE_GlDso7_EF1gP_MPxb_xKeDXj1/view?usp=sharing" class="cv" ${externalAttrs} aria-label="Curriculum vitae"><i class="bi bi-file-earmark-person" aria-hidden="true"></i></a>
              <a href="https://scholar.google.co.kr/citations?user=wlhSowsAAAAJ&hl=ko" class="google-scholar" ${externalAttrs} aria-label="Google Scholar"><i class="bi bi-mortarboard-fill" aria-hidden="true"></i></a>
              <a href="https://github.com/sunoh-kim" class="github" ${externalAttrs} aria-label="GitHub"><i class="bi bi-github" aria-hidden="true"></i></a>
              <a href="https://www.linkedin.com/in/sunoh-kim-a0a1a5162/" class="linkedin" ${externalAttrs} aria-label="LinkedIn"><i class="bi bi-linkedin" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div class="container copyright text-center mt-4">
        <p>&copy; <span>Copyright 2025</span> <strong class="px-1 sitename">Deep Understanding of Cognition and Knowledge Laboratory</strong></p>
      </div>
    </footer>
  `;

  const headerTarget = document.querySelector("#site-header");
  const footerTarget = document.querySelector("#site-footer");

  if (headerTarget) {
    headerTarget.outerHTML = header;
  }

  if (footerTarget) {
    footerTarget.outerHTML = footer;
  }
})();
