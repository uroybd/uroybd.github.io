function setupIntersections() {
  const sections = document.querySelectorAll("section");
  sections.forEach(function (el, idx) {
    let observer = new IntersectionObserver(
      (evt) => handleIntersect(evt, idx),
      {
        root: null,
        // rootMargin: "-50%",
        threshold: 0.7,
      }
    );
    observer.observe(el);
  });
}

function handleIntersect(evt, idx) {
  if (evt[0].isIntersecting) {
    document.body.style.setProperty("--bg-color", `var(--bg-color-${idx})`);
    document.body.style.setProperty("--fg-color", `var(--fg-color-${idx})`);
    if (evt[0].target.id) {
      history.pushState(
        "",
        document.title,
        window.location.pathname +
          "#" +
          evt[0].target.id +
          window.location.search
      );
    } else {
      history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search
      );
    }
  }
}

setupIntersections();
lucide.createIcons({
  attrs: {
    class: ["icon"],
    stroke: "var(--fg-color)",
  },
});
