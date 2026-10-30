// Re-check the US Eastern sports date in the browser so a stale static build can't claim tonight.
(function () {
  var today = new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York" }).format(new Date());
  document.querySelectorAll(".tonight-board").forEach(function (el) {
    var d = el.getAttribute("data-board-date");
    var notice = el.querySelector(".board-stale-notice");
    var h = el.querySelector(".board-heading");
    if (d && d < today) {
      if (notice) notice.hidden = false;
      if (h) h.textContent = h.getAttribute("data-stale-text");
    }
  });
})();
