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
    { t: "专长服务", href: base + "services.html" },
    { t: "方法论", href: base + "methodology.html" },
    { t: "推荐书目", href: base + "books.html" },
    { t: "股权人格测试", href: base + "mbti/index.html" },
    {
      t: "案例观点",
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
        '<div class="siteNav__item has-sub"><a href="javascript:void(0)">' +
        l.t +
        ' ▾</a><div class="siteNav__sub">' +
        inner +
        "</div></div>"
      );
    }
    return '<a href="' + l.href + '">' + l.t + "</a>";
  }

  var html =
    '<div class="siteNav__inner">' +
    '<a class="siteNav__brand" href="' + base + 'index.html">' + brand + "</a>" +
    '<button class="siteNav__toggle" aria-label="菜单">☰</button>' +
    '<nav class="siteNav__links">' +
    links.map(linkHTML).join("") +
    '<form class="siteNav__search" action="' + base + 'search.html" method="get">' +
    '<input type="search" name="q" placeholder="站内搜索…" aria-label="搜索" />' +
    "</form>" +
    "</nav></div>";

  var nav = document.getElementById("siteNav");
  if (!nav) return;
  nav.className = "siteNav";
  nav.innerHTML = html;

  var toggle = nav.querySelector(".siteNav__toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // 二级菜单（移动端内嵌展开）
  var subItems = nav.querySelectorAll(".has-sub > a");
  subItems.forEach(function (a) {
    a.addEventListener("click", function (e) {
      if (window.innerWidth <= 760) {
        e.preventDefault();
        a.parentElement.classList.toggle("open");
      }
    });
  });
})();
