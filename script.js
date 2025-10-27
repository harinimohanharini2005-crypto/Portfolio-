document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const response = document.getElementById("responseMsg");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      response.textContent = "Thank you! Your message has been received.";
      form.reset();
    });
  }
});
