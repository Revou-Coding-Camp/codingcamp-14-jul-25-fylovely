// Show welcome popup when the page loads
showWelcomePopup();

// Function to show a welcome popup and set the user's name
function showWelcomePopup() {
    let userName = prompt ("Hi! What's your name:");
    // If the user clicks "Cancel", UserName will be null
    if (userName != '') {
        document.getElementById('welcome-user').innerHTML = userName;
    }
}
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("show");
}

function validateForm() {
  const nameEl = document.getElementById("name");
  const emailEl = document.getElementById("email");
  const messageEl = document.getElementById("messageText");
  const resultEl = document.getElementById("result");

  if (!nameEl || !emailEl || !messageEl || !resultEl) {
    alert("Form element not found!");
    return;
  }

  const name = nameEl.value.trim();
  const email = emailEl.value.trim();
  const message = messageEl.value.trim();

  if (!name || !email || !message) {
    resultEl.style.display = "block";
    resultEl.style.backgroundColor = "#fff3cd";
    resultEl.style.color = "#856404";
    resultEl.textContent = "⚠️ Please fill in all fields.";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    resultEl.style.display = "block";
    resultEl.style.backgroundColor = "#f8d7da";
    resultEl.style.color = "#721c24";
    resultEl.textContent = "❌ Invalid email address.";
    return;
  }

  resultEl.style.display = "block";
  resultEl.style.backgroundColor = "#d4edda";
  resultEl.style.color = "#155724";
  resultEl.innerHTML = `<h3>Thank You, ${name}!</h3>
     <p>We've received your message and will get back to you soon.</p>
    <hr>
    <p><em>Response:</em> "Hi ${name}, thank you for reaching out. We appreciate your message: '${message}'. We'll respond shortly to ${email}."</p>`;

  document.getElementById("messageForm").reset();
}
