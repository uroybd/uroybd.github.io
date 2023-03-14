function setupIntersections() {
  const sections = document.querySelectorAll("section");
  sections.forEach(function (el, idx) {
    let observer = new IntersectionObserver(
      (evt) => handleIntersect(evt, idx),
      {
        root: null,
        // rootMargin: "-50%",
        threshold: [0.25, 0.5, 0.75],
      }
    );
    observer.observe(el);
  });
}

function handleIntersect(evt, idx) {
  // console.log(evt, idx);
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
      setActive(document.querySelectorAll("nav > a")[idx]);
    } else {
      history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search
      );
      setActive(document.querySelectorAll("nav > a")[0]);
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

function setActive(el) {
  let active = document.querySelector("nav > a.active");
  if (active) {
    active.classList.remove("active");
  }
  el.classList.add("active");
}

document.querySelectorAll("nav > a").forEach((el, idx) => {
  el.addEventListener("click", function (evt) {
    evt.preventDefault();
    setActive(el);
    document.body
      .querySelector("main")
      .scrollTo(0, document.body.offsetHeight * idx);
  });
});
