function setupIntersections() {
  const sections = document.querySelectorAll("section");
  sections.forEach(function (el, idx) {
    let observer = new IntersectionObserver(
      (evt) => handleIntersect(evt, idx),
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );
    observer.observe(el);
  });
}

function handleIntersect(evt, idx) {
  if (evt[0].isIntersecting) {
    document.body.style.setProperty("--bg-color", `var(--bg-color-${idx})`);
    document.body.style.setProperty("--fg-color", `var(--fg-color-${idx})`);
  }
}

setupIntersections();
