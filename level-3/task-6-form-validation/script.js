(() => {
  "use strict";
  const form = document.querySelector("#contactForm");
  const status = document.querySelector("#formStatus");
  const fields = [
    { input: document.querySelector("#fullName"), error: document.querySelector("#nameError"), message: "Enter at least 2 characters for your name." },
    { input: document.querySelector("#email"), error: document.querySelector("#emailError"), message: "Enter a valid email address." },
    { input: document.querySelector("#topic"), error: document.querySelector("#topicError"), message: "Choose a topic." },
    { input: document.querySelector("#message"), error: document.querySelector("#messageError"), message: "Enter a message of at least 10 characters." }
  ];

  function validateField(field) {
    const value = field.input.value.trim();
    let valid = field.input.checkValidity();
    if (field.input.id === "fullName") valid = value.length >= 2;
    if (field.input.id === "message") valid = value.length >= 10;
    field.input.setAttribute("aria-invalid", String(!valid));
    field.error.textContent = valid ? "" : field.message;
    return valid;
  }

  fields.forEach((field) => {
    field.input.addEventListener("input", () => {
      if (field.input.getAttribute("aria-invalid") === "true") validateField(field);
    });
    field.input.addEventListener("change", () => validateField(field));
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const results = fields.map(validateField);
    if (results.every(Boolean)) {
      status.textContent = "Validation successful. No information was sent or stored.";
      status.style.color = "#18794e";
    } else {
      status.textContent = "Please review the highlighted fields.";
      status.style.color = "#bd2636";
      fields[results.indexOf(false)].input.focus();
    }
  });
})();