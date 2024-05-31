class NewsletterSection extends HTMLElement {
  constructor() {
    super();
    this.initialize();
  }

  // Function to initialize the custom element
  initialize() {
    const emailInput = this.querySelector("input[type='email']");
    const submitButton = this.querySelector("button[type='submit']");

    // Add event listener for input on the email field
    emailInput.addEventListener("input", () => {
      this.validateEmail(emailInput, submitButton);
    });

    // Add event listener for click on the submit button
    submitButton.addEventListener("click", () => {
      this.celebrate();
    });

    this.disableSubmitButton(submitButton);
  }

  // Function to validate email format
  validateEmail(emailInput, submitButton) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the pattern
    if (emailPattern.test(emailInput.value)) {
      this.enableSubmitButton(submitButton);
    } else {
      this.disableSubmitButton(submitButton);
    }
  }

  // Function to enable the submit button
  enableSubmitButton(button) {
    button.disabled = false;
  }

  // Function to disable the submit button
  disableSubmitButton(button) {
    button.disabled = true;
  }

  // Function to celebrate successful subscription
  celebrate() {
    const confettiConfig = {
      particleCount: 100,
      spread: 70,
      origin: {
        y: 0.6,
      },
    };
    confetti(confettiConfig);
  }
}

// Define the custom element
customElements.define("newsletter-section", NewsletterSection);
