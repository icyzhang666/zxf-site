/* 站内搜索逻辑：读取 search-index.json，按关键词匹配标题/摘要/关键词 */
(function () {
  var box = document.getElementById("searchResults");
  var input = document.getElementById("searchInput");
  if (!box) return;

  var base = window.SITE_BASE || "./";
  var index = [];

  fetch(base + "search-index.json")
    .then(function (r) { return r.json(); })
    .then(function (data) { index = data; render(); })
    .catch(function (e) {
      box.innerHTML = '<p class="muted">搜索索引加载失败，请稍后再试。</p>';
    });

  function getParam(name) {
    var m = new RegExp("[?&]" + name + "=([^&]*)").exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, " ")) : "";
  }

  function render() {
    var q = (getParam("q") || (input && input.value) || "").trim().toLowerCase();
    if (input) input.value = q;
    if (!q) { box.innerHTML = '<p class="muted">输入关键词，检索张晓芬老师的股权与税务观点。</p>'; return; }

    var hits = index.filter(function (it) {
      var hay = (it.title + " " + it.desc + " " + (it.keywords || "")).toLowerCase();
      return hay.indexOf(q) !== -1;
    });

    if (!hits.length) {
      box.innerHTML = '<p class="muted">未找到与「' + q + '」相关的内容。</p>';
      return;
    }
    box.innerHTML = hits
      .map(function (it) {
        return (
          '<div class="search-result"><a href="' + it.url + '">' + it.title +
          '</a><p>' + it.desc + "</p></div>"
        );
      })
      .join("");
  }

  if (input) {
    input.addEventListener("input", render);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); window.location.search = "?q=" + encodeURIComponent(input.value); }
    });
  }

  render();
})();
