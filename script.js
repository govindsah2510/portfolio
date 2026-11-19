document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.textContent = isOpen ? "✕" : "☰";
    });
  }

  const form = document.querySelector("#contactForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.querySelector("#visitorName").value.trim();
      const email = document.querySelector("#visitorEmail").value.trim();
      const message = document.querySelector("#visitorMessage").value.trim();
      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
      // Replace this address with your own email before using the contact form.
      const recipient = "your-email@example.com";
      const status = document.querySelector("#formMessage");
      if (recipient === "your-email@example.com") {
        status.textContent = "Please replace your-email@example.com in contact.html and js/script.js with your real email address.";
        status.classList.add("success");
        return;
      }
      status.textContent = "Opening your email app…";
      status.classList.add("success");
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
  }
});