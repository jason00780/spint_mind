/* Spint Mind — interactions: nav, mobile menu, scroll reveals, contact form */

(function () {
  "use strict";

  /* Flag JS availability — reveal animations only apply when JS runs,
     so content never stays hidden if this script fails to load. */
  document.documentElement.classList.add("js");

  /* Header background on scroll */
  var header = document.getElementById("siteHeader");
  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("navMenu");
  toggle.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  });
  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });

  /* Scroll-reveal */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  /* Contact form → composes an email (no backend needed).
     Replace the address below with your real inbox when going live. */
  var CONTACT_EMAIL = "hello@spintmind.com";

  var form = document.getElementById("contactForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;

    var els = form.elements;
    var name = els.name.value.trim();
    var email = els.email.value.trim();
    var message = els.message.value.trim();

    var subject = encodeURIComponent("Project enquiry — " + name);
    var body = encodeURIComponent(
      "Name: " + name + "\nEmail: " + email + "\n\n" + message + "\n"
    );
    window.location.href =
      "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + body;
  });

  /* Footer year */
  document.getElementById("year").textContent = String(new Date().getFullYear());
})();
