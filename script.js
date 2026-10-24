
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // ========================================
  // 1. MENÚ DE NAVEGACIÓN PARA MÓVILES
  // ========================================

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
      );
    });

    // Cierra el menú al seleccionar una página.
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");
      });
    });

    // Cierra el menú si se vuelve a una pantalla de escritorio.
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 700) {
        navLinks.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");
      }
    });
  }

  // ========================================
  // 2. AÑO AUTOMÁTICO DEL FOOTER
  // ========================================

  document.querySelectorAll(".current-year").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  // ========================================
  // 3. FORMULARIO DE CONTACTO
  // ========================================

  const contactForm = document.querySelector("#contact-form");
  const formStatus = document.querySelector("#form-status");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      const formData = new FormData(contactForm);

      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      console.log("Formulario de contacto:", {
        name,
        email,
        message
      });

      if (formStatus) {
        formStatus.textContent =
          "¡Gracias por escribirme! Tus datos se han validado correctamente.";
      }

      contactForm.reset();
    });
  }
});
