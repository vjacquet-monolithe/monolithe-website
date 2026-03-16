function setActiveNav() {
  const page = document.body.dataset.page;
  if (!page) return;

  let activeLink = null;
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === page) {
      link.setAttribute("aria-current", "page");
      activeLink = link;
    }
  });

  const group = activeLink?.closest("[data-nav-group]");
  if (group) {
    group.dataset.active = "true";
  }
}

function setupNavigation() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-site-nav]");
  if (!toggle || !nav) return;
  const navGroups = Array.from(document.querySelectorAll("[data-nav-group]"));

  const closeGroups = (exceptGroup = null) => {
    navGroups.forEach((group) => {
      if (group === exceptGroup) return;
      group.open = false;
    });
  };

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.dataset.open = String(!expanded);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.dataset.open = "false";
      closeGroups();
    });
  });

  navGroups.forEach((group) => {
    const summary = group.querySelector("summary");
    if (!summary) return;

    summary.addEventListener("click", () => {
      window.setTimeout(() => {
        if (group.open) {
          closeGroups(group);
        }
      }, 0);
    });
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target)) {
      closeGroups();
    }
  });
}

function setupAccordions() {
  const setFaqState = (button, expanded) => {
    const answerId = button.getAttribute("aria-controls");
    const answer = answerId ? document.getElementById(answerId) : null;
    if (!answer) return;

    button.setAttribute("aria-expanded", String(expanded));
    answer.dataset.open = String(expanded);
    answer.hidden = !expanded;
  };

  document.querySelectorAll("[data-faq-question]").forEach((button) => {
    const answerId = button.getAttribute("aria-controls");
    const answer = answerId ? document.getElementById(answerId) : null;
    if (!answer) return;

    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      const scope = button.closest(".faq-list") || document;

      if (!expanded) {
        scope.querySelectorAll("[data-faq-question][aria-expanded=\"true\"]").forEach((otherButton) => {
          if (otherButton === button) return;
          setFaqState(otherButton, false);
        });
      }

      setFaqState(button, !expanded);
    });
  });
}

function setupProjectCards() {
  const setProjectState = (card, flipped) => {
    card.dataset.flipped = String(flipped);
    card.setAttribute("aria-pressed", String(flipped));
  };

  const cards = Array.from(document.querySelectorAll("[data-project-card]"));

  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("[data-project-action]")) return;
      const flipped = card.dataset.flipped === "true";
      if (!flipped) {
        cards.forEach((otherCard) => {
          if (otherCard === card) return;
          setProjectState(otherCard, false);
        });
      }
      setProjectState(card, !flipped);
    });

    card.addEventListener("keydown", (event) => {
      if (event.target.closest("[data-project-action]")) return;
      if (event.key !== "Enter" && event.key !== " ") return;

      event.preventDefault();
      const flipped = card.dataset.flipped === "true";
      if (!flipped) {
        cards.forEach((otherCard) => {
          if (otherCard === card) return;
          setProjectState(otherCard, false);
        });
      }
      setProjectState(card, !flipped);
    });
  });

  document.querySelectorAll("[data-project-action]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });
}

function setupHomeBenefitCards() {
  const section = document.querySelector("[data-home-why]");
  if (!section) return;

  const triggers = Array.from(section.querySelectorAll("[data-home-why-trigger]"));
  const details = Array.from(section.querySelectorAll("[data-home-why-detail]"));
  if (!triggers.length || !details.length) return;

  const setActive = (value = "") => {
    section.dataset.active = value;

    triggers.forEach((trigger) => {
      const isActive = trigger.dataset.homeWhyTrigger === value && value !== "";
      trigger.setAttribute("aria-expanded", String(isActive));
    });

    details.forEach((detail) => {
      detail.hidden = detail.dataset.homeWhyDetail !== value || value === "";
      if (!detail.hidden) {
        detail.scrollTop = 0;
      }
    });
  };

  triggers.forEach((trigger) => {
    trigger.setAttribute("aria-expanded", "false");
    trigger.addEventListener("click", () => {
      setActive(trigger.dataset.homeWhyTrigger || "");
    });
  });

  details.forEach((detail) => {
    detail.addEventListener("click", () => {
      setActive("");
    });
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    section.dataset.homeWhyRevealed = "true";
  } else {
    let ticking = false;

    const syncProgress = () => {
      ticking = false;

      const rect = section.getBoundingClientRect();
      const crossedHalf = rect.top <= (window.innerHeight - 1);
      const stillVisible = rect.bottom > 0 && rect.top < window.innerHeight;
      section.dataset.homeWhyRevealed = crossedHalf && stillVisible ? "true" : "false";
    };

    const requestSync = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(syncProgress);
    };

    syncProgress();
    window.addEventListener("scroll", requestSync, { passive: true });
    window.addEventListener("resize", requestSync, { passive: true });
  }

  setActive("");
}

function setupInquiryForm() {
  const forms = Array.from(document.querySelectorAll("[data-inquiry-form]"));
  if (!forms.length) return;

  forms.forEach((form) => {
    const block = form.closest("[data-inquiry-block]") || form.parentElement;
    const output = block?.querySelector("[data-form-output]");
    const submitButton = form.querySelector("button[type='submit']");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const data = new FormData(form);

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.dataset.originalText = submitButton.dataset.originalText || submitButton.textContent;
        submitButton.textContent = "Envoi en cours...";
      }

      try {
        const payload = Object.fromEntries(data.entries());
        const response = await fetch(form.action || "https://api.web3forms.com/submit", {
          method: form.method || "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(payload),
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.message || "L'envoi du formulaire a échoué.");
        }

        if (output) {
          output.dataset.visible = "true";
        }

        form.reset();
      } catch (error) {
        const message = error instanceof Error && error.message
          ? error.message
          : "L'envoi a échoué. Veuillez réessayer ou nous contacter directement par téléphone.";
        window.alert(message);
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = submitButton.dataset.originalText || submitButton.textContent;
        }
      }
    });
  });
}

function setupContactSections() {
  const nav = document.querySelector(".contact-jump-nav");
  const container = document.querySelector(".contact-sections");
  if (!nav || !container) return;

  const buttons = Array.from(nav.querySelectorAll("a[href^='#']"));
  const sections = Array.from(container.children).filter((section) => section.id);
  if (!buttons.length || !sections.length) return;

  const sectionIds = sections.map((section) => section.id);

  const setActiveButton = (targetId) => {
    buttons.forEach((button) => {
      const isActive = button.getAttribute("href") === `#${targetId}`;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-current", isActive ? "true" : "false");
    });
  };

  const setActiveSection = (targetId, updateHash = true) => {
    if (!sectionIds.includes(targetId)) return;

    sections.forEach((section) => {
      const isActive = section.id === targetId;
      section.hidden = !isActive;
      section.dataset.active = String(isActive);
      section.setAttribute("aria-hidden", String(!isActive));
    });

    setActiveButton(targetId);

    if (updateHash && window.history?.replaceState) {
      window.history.replaceState(null, "", `#${targetId}`);
    }
  };

  const resolveTargetId = (hash) => {
    const cleanHash = (hash || "").replace(/^#/, "");
    if (!cleanHash) return sectionIds[0];
    if (cleanHash === "devis-section" || cleanHash === "brief-form") return "callback-section";
    if (sectionIds.includes(cleanHash)) return cleanHash;

    const targetElement = document.getElementById(cleanHash);
    const parentSection = targetElement?.closest(".contact-sections > [id]");
    return parentSection?.id || sectionIds[0];
  };

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      setActiveSection(resolveTargetId(button.getAttribute("href")));
    });
  });

  setActiveSection(resolveTargetId(window.location.hash), false);
}

function setupCaseSliders() {
  document.querySelectorAll("[data-case-slider]").forEach((slider) => {
    const slides = Array.from(slider.querySelectorAll(".case-visual-slide"));
    const prevButton = slider.querySelector("[data-case-prev]");
    const nextButton = slider.querySelector("[data-case-next]");
    const dots = Array.from(slider.querySelectorAll("[data-case-dot]"));
    if (!slides.length) return;

    let activeIndex = slides.findIndex((slide) => slide.classList.contains("is-active"));
    if (activeIndex < 0) activeIndex = 0;

    const setActiveSlide = (nextIndex) => {
      const normalizedIndex = (nextIndex + slides.length) % slides.length;

      slides.forEach((slide, index) => {
        slide.classList.toggle("is-active", index === normalizedIndex);
      });

      dots.forEach((dot, index) => {
        const isActive = index === normalizedIndex;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-pressed", String(isActive));
      });

      activeIndex = normalizedIndex;
    };

    prevButton?.addEventListener("click", () => {
      setActiveSlide(activeIndex - 1);
    });

    nextButton?.addEventListener("click", () => {
      setActiveSlide(activeIndex + 1);
    });

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        setActiveSlide(index);
      });
    });

    slider.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveSlide(activeIndex - 1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveSlide(activeIndex + 1);
      }
    });

    setActiveSlide(activeIndex);
  });
}

function setupHomeHeaderReveal() {
  if (document.body.dataset.page !== "home") return;

  const syncHeaderState = () => {
    document.body.dataset.homeHeader = window.scrollY <= 8 ? "hidden" : "visible";
  };

  syncHeaderState();
  window.addEventListener("scroll", syncHeaderState, { passive: true });
}

function setupHomeVideoCue() {
  if (document.body.dataset.page !== "home") return;

  const video = document.querySelector("[data-home-video]");
  const cue = document.querySelector("[data-home-video-cue]");
  if (!video || !cue) return;

  let hasPlayedOnce = false;
  let dismissed = window.scrollY > 8;
  let hideTimer = null;

  const hideCue = () => {
    cue.dataset.visible = "false";
    window.clearTimeout(hideTimer);
    hideTimer = window.setTimeout(() => {
      if (cue.dataset.visible === "true") return;
      cue.hidden = true;
    }, 260);
  };

  const showCue = () => {
    if (dismissed || !hasPlayedOnce) return;
    cue.hidden = false;
    window.requestAnimationFrame(() => {
      cue.dataset.visible = "true";
    });
  };

  const dismissCue = () => {
    if (dismissed) return;
    dismissed = true;
    hideCue();
  };

  if (window.scrollY > 8) {
    hideCue();
  }

  const handleFirstLoop = () => {
    if (hasPlayedOnce) return;
    if (!Number.isFinite(video.duration) || video.duration <= 0) return;
    if (video.currentTime < Math.max(video.duration - 0.25, video.duration * 0.98)) return;

    hasPlayedOnce = true;
    showCue();
    video.removeEventListener("timeupdate", handleFirstLoop);
  };

  video.addEventListener("timeupdate", handleFirstLoop);

  cue.addEventListener("click", () => {
    dismissCue();
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 8) {
      dismissCue();
    }
  }, { passive: true });
}

function setupDeferredVideos() {
  document.querySelectorAll("[data-team-video]").forEach((container) => {
    const playButton = container.querySelector("[data-team-video-play]");
    if (!playButton) return;

    playButton.addEventListener("click", () => {
      if (container.dataset.loaded === "true") return;

      const src = container.dataset.videoSrc;
      if (!src) return;

      const iframe = document.createElement("iframe");
      iframe.width = "560";
      iframe.height = "315";
      iframe.src = src;
      iframe.title = "Vidéo de présentation Monolithe";
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
      iframe.setAttribute("allowfullscreen", "");

      container.dataset.loaded = "true";
      container.replaceChildren(iframe);
    });
  });
}

function setupNewsMasonry() {
  const grids = Array.from(document.querySelectorAll(".news-grid"));
  if (!grids.length) return;

  const countColumns = (grid) => {
    const templateColumns = window.getComputedStyle(grid).gridTemplateColumns;
    return templateColumns.split(" ").filter(Boolean).length;
  };

  const applyMasonry = (grid) => {
    const cards = Array.from(grid.querySelectorAll(".news-card"));
    if (!cards.length) return;

    if (countColumns(grid) <= 1) {
      grid.classList.remove("is-masonry");
      cards.forEach((card) => {
        card.style.gridRowEnd = "auto";
      });
      return;
    }

    grid.classList.add("is-masonry");

    const styles = window.getComputedStyle(grid);
    const rowHeight = parseFloat(styles.getPropertyValue("--news-masonry-row")) || 10;
    const rowGap = parseFloat(styles.rowGap || styles.gap) || 0;

    cards.forEach((card) => {
      card.style.gridRowEnd = "auto";
    });

    cards.forEach((card) => {
      const cardHeight = card.getBoundingClientRect().height;
      const rowSpan = Math.max(1, Math.ceil((cardHeight + rowGap) / (rowHeight + rowGap)));
      card.style.gridRowEnd = `span ${rowSpan}`;
    });
  };

  const scheduleMasonry = (grid) => {
    if (grid._newsMasonryFrame) {
      window.cancelAnimationFrame(grid._newsMasonryFrame);
    }

    grid._newsMasonryFrame = window.requestAnimationFrame(() => {
      applyMasonry(grid);
      grid._newsMasonryFrame = null;
    });
  };

  grids.forEach((grid) => {
    scheduleMasonry(grid);

    grid.querySelectorAll("img").forEach((image) => {
      if (image.complete) return;

      image.addEventListener("load", () => {
        scheduleMasonry(grid);
      }, { once: true });

      image.addEventListener("error", () => {
        scheduleMasonry(grid);
      }, { once: true });
    });
  });

  window.addEventListener("load", () => {
    grids.forEach((grid) => {
      scheduleMasonry(grid);
    });
  });

  window.addEventListener("resize", () => {
    grids.forEach((grid) => {
      scheduleMasonry(grid);
    });
  }, { passive: true });
}

function setupRevealAnimations() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = new Set();
  const skippedContainers = ".hero-shell, .grid-2, .grid-3, .grid-4, .site-type-grid, .timeline, .faq-list, .news-grid, .team-grid, .form-grid, .solution-flow, .solution-detail-list";

  document.querySelectorAll("main section > .container").forEach((container) => {
    Array.from(container.children).forEach((child) => {
      if (child.classList.contains("sr-only")) return;
      if (child.matches(skippedContainers)) return;
      targets.add(child);
    });
  });

  document.querySelectorAll("main .hero-shell > *").forEach((element) => {
    targets.add(element);
  });

  document.querySelectorAll("main .grid-2 > *, main .grid-3 > *, main .grid-4 > *, main .site-type-grid > *, main .timeline > *, main .faq-list > *, main .news-grid > *, main .team-grid > *, main .form-grid > *, main .solution-flow > *, main .solution-detail-list > *").forEach((element) => {
    targets.add(element);
  });

  const items = Array.from(targets);
  if (!items.length) return;

  items.forEach((item, index) => {
    item.classList.add("reveal-item");
    item.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -6% 0px"
    }
  );

  items.forEach((item) => observer.observe(item));
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
  setupNavigation();
  setupAccordions();
  setupProjectCards();
  setupHomeBenefitCards();
  setupInquiryForm();
  setupContactSections();
  setupCaseSliders();
  setupHomeHeaderReveal();
  setupHomeVideoCue();
  setupDeferredVideos();
  setupNewsMasonry();
  setupRevealAnimations();
});
