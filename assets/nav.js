/* 共享导航注入器（张晓芬个人站）
 * 用法：每页 <head> 设 window.SITE_BASE（根 ./ / 子 ../），<body> 顶部放 <div id="siteNav"></div>，本文件 defer 加载
 * 迁移时改这里：links 文案、brand、base
 */
(function () {
  var base = window.SITE_BASE || "./";
  var brand = "张晓芬<b>·股权战略</b>";

  var links = [
    { t: "首页", href: base + "index.html" },
    { t: "我是谁", href: base + "about.html" },
    { t: "专长", href: base + "services.html" },
    { t: "方法论", href: base + "methodology.html" },
    { t: "书目", href: base + "books.html" },
    { t:   "股权人格测试", href: base + "mbti/index.html" },
    {
      t: "观点",
      href: base + "blog/index.html",
      sub: [
        { t: "观点文章", href: base + "blog/index.html" },
        { t: "FAQ 问答", href: base + "faq/index.html" },
        { t: "百家招股书解读", href: base + "prospectus/index.html" }
      ]
    },
    { t: "联系", href: base + "index.html#contact" }
  ];

  function linkHTML(l) {
    if (l.sub) {
      var inner = l.sub
        .map(function (s) {
          return '<a href="' + s.href + '">' + s.t + "</a>";
        })
        .join("");
      return (
        '<div class="siteNav__item has-sub"><a href="' + l.href + '" class="siteNav__parent">' +
        l.t +
        ' <span class="siteNav__caret" aria-hidden="true">▾</span></a><div class="siteNav__sub">' +
        inner +
        "</div></div>"
      );
    }
    return '<a href="' + l.href + '">' + l.t + "</a>";
  }

  var html =
    '<div class="siteNav__inner">' +
    '<a class="siteNav__brand" href="' + base + 'index.html">' + brand + "</a>" +
    '<button class="siteNav__toggle" aria-label="打开菜单" aria-expanded="false" aria-controls="siteNavLinks">☰</button>' +
    '<nav id="siteNavLinks" class="siteNav__links">' +
    links.map(linkHTML).join("") +
    '<form class="siteNav__search" action="' + base + 'search.html" method="get">' +
    '<input type="search" name="q" placeholder="站内搜索…" aria-label="搜索" />' +
    "</form>" +
    "</nav>" +
    '<div class="siteNav__scrim" aria-hidden="true"></div>' +
    "</div>";

  var nav = document.getElementById("siteNav");
  if (!nav) return;
  nav.className = "siteNav";
  nav.innerHTML = html;

  var toggle = nav.querySelector(".siteNav__toggle");
  var scrim = nav.querySelector(".siteNav__scrim");

  function setOpen(open) {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
    toggle.textContent = open ? "✕" : "☰";
    scrim.style.display = open ? "block" : "none";
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("open"));
    });
  }
  if (scrim) {
    scrim.addEventListener("click", function () {
      setOpen(false);
    });
  }

  // 桌面 hover 展开 / 移动端点击展开「观点」
  var subItems = nav.querySelectorAll(".has-sub > .siteNav__parent");
  subItems.forEach(function (a) {
    a.addEventListener("click", function (e) {
      if (window.innerWidth <= 760) {
        e.preventDefault();
        a.parentElement.classList.toggle("open");
      }
    });
  });

  // 点击会真实跳转的链接后收起移动端菜单：顶层项 + 二级子项
  // 注意：不选 has-sub 的父级，否则点「观点」展开子菜单的逻辑会被关掉
  nav.querySelectorAll(".siteNav__links > a, .siteNav__sub a").forEach(function (a) {
    a.addEventListener("click", function () {
      if (window.innerWidth <= 760) setOpen(false);
    });
  });

  // 视口放大到桌面尺寸时复位菜单状态
  window.addEventListener("resize", function () {
    if (window.innerWidth > 760) setOpen(false);
  });
})();
