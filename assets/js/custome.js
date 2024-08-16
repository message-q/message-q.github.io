
  const blockedEmailDomains = ["gmail.com", "yahoo.com"]; // Replace with domains you want to block

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const domain = email.split("@")[1];
    return emailRegex.test(email) && !blockedEmailDomains.includes(domain);
  }

  function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\d+$/;
    return phoneRegex.test(phoneNumber);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
      let isValid = true;

      const nameInput = document.querySelector("input[name='Contact-name']");
      const emailInput = document.querySelector("input[name='Contact-email']");
      const phoneInput = document.querySelector("input[name='Contact-number']");
      const messageInput = document.querySelector("textarea[name='Message']");

      // Name Validation
      if (nameInput.value.trim() === "") {
        nameInput.nextElementSibling.textContent = "Full Name is required.";
        isValid = false;
      } else {
        nameInput.nextElementSibling.textContent = "";
      }

      // Email Validation
      if (emailInput.value.trim() === "") {
        emailInput.nextElementSibling.textContent = "Email is required.";
        isValid = false;
      } else if (!validateEmail(emailInput.value)) {
        emailInput.nextElementSibling.textContent = "Please enter a valid business email.";
        isValid = false;
      } else {
        emailInput.nextElementSibling.textContent = "";
      }

      // Phone Number Validation
      if (phoneInput.value.trim() === "") {
        phoneInput.nextElementSibling.textContent = "Phone number is required.";
        isValid = false;
      } else if (!validatePhoneNumber(phoneInput.value)) {
        phoneInput.nextElementSibling.textContent = "Please enter a valid phone number (numbers only).";
        isValid = false;
      } else {
        phoneInput.nextElementSibling.textContent = "";
      }

      // Message Validation
      if (messageInput.value.trim() === "") {
        messageInput.nextElementSibling.textContent = "Message is required.";
        isValid = false;
      } else {
        messageInput.nextElementSibling.textContent = "";
      }

      if (!isValid) {
        event.preventDefault();
      }
    });

    // Prevent non-numeric input in the phone number field
    const phoneInput = document.querySelector("input[name='Contact-number']");
    phoneInput.addEventListener("keydown", function (event) {
      const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Enter"];
      if (!allowedKeys.includes(event.key) && isNaN(event.key)) {
        event.preventDefault();
      }
    });

    // Prevent pasting non-numeric content into the phone number field
    phoneInput.addEventListener("paste", function (event) {
      const paste = (event.clipboardData || window.clipboardData).getData('text');
      if (!validatePhoneNumber(paste)) {
        event.preventDefault();
      }
    });
  });
