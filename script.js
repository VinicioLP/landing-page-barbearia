const liveRegion = document.querySelector(".live-region");
document.documentElement.classList.add("js");

const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    }
  },
  {
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.18,
  },
);

for (const element of document.querySelectorAll(".reveal")) {
  const delay = element.dataset.delay;
  if (delay) {
    element.style.setProperty("--delay", `${delay}ms`);
  }
  if (element.getBoundingClientRect().top < window.innerHeight * 0.92) {
    element.classList.add("is-visible");
  }
  revealObserver.observe(element);
}

for (const shell of document.querySelectorAll(".media-shell")) {
  const image = shell.querySelector("img");
  if (!image) {
    continue;
  }

  const markLoaded = () => shell.classList.add("is-loaded");

  if (image.complete) {
    markLoaded();
  } else {
    image.addEventListener("load", markLoaded, { once: true });
    image.addEventListener("error", markLoaded, { once: true });
  }
}

for (const link of document.querySelectorAll(".whatsapp-link")) {
  link.addEventListener("click", () => {
    const loadingLabel = link.dataset.loadingLabel;
    const defaultLabel = link.dataset.defaultLabel;
    if (!loadingLabel || !defaultLabel) {
      return;
    }

    link.classList.add("is-routing");
    link.textContent = loadingLabel;
    liveRegion.textContent = "Abrindo conversa no WhatsApp.";

    window.setTimeout(() => {
      link.classList.remove("is-routing");
      link.textContent = defaultLabel;
    }, 1400);
  });
}
