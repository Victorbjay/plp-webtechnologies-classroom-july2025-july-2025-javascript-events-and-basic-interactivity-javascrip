/***************************************************************
 * Week 6 – Interactive Web Pages with JavaScript
 * Features:
 * 1. Event handling & interactive elements
 * 2. Two custom interactive features: Dark Mode toggle & FAQ
 * 3. Full custom form validation with helpful feedback
 ***************************************************************/

/* ===========================
   Feature 1: Dark Mode Toggle
   =========================== */
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  // Toggle the "dark" class on the <body>
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark")
    ? "☀️ Toggle Light Mode"
    : "🌙 Toggle Dark Mode";
});

/* ===========================
   Feature 2: Collapsible FAQ
   =========================== */
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    // Show/Hide the answer text
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

/* ===========================
   Feature 3: Custom Form Validation
   =========================== */
const contactForm = document.getElementById("contact-form");

// Helper function to show error messages
function showError(elementId, message) {
  document.getElementById(elementId).textContent = message;
}

// Validation logic
contactForm.addEventListener("submit", e => {
  e.preventDefault(); // Prevent page refresh

  // Grab input values
  const nameVal = document.getElementById("name").value.trim();
  const emailVal = document.getElementById("email").value.trim();
  const passVal = document.getElementById("password").value;

  // Flags
  let valid = true;

  // Name validation
  if (nameVal.length < 2) {
    showError("name-error", "Name must be at least 2 characters.");
    valid = false;
  } else {
    showError("name-error", "");
  }

  // Email validation (basic regex)
  const emailRegex = /^[\\w.-]+@[\\w.-]+\\.\\w+$/;
  if (!emailRegex.test(emailVal)) {
    showError("email-error", "Please enter a valid email address.");
    valid = false;
  } else {
    showError("email-error", "");
  }

  // Password validation
  if (passVal.length < 6) {
    showError("password-error", "Password must be at least 6 characters.");
    valid = false;
  } else {
    showError("password-error", "");
  }

  // Success message
  const successMsg = document.getElementById("form-success");
  if (valid) {
    successMsg.textContent = "Form submitted successfully!";
    contactForm.reset();
  } else {
    successMsg.textContent = "";
  }
});
