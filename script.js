// Mobile navigation

function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("active");
}


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("active");
  });
});


// Security Check

function checkSecurity() {

  const questions = document.querySelectorAll(".security-question");
  const result = document.getElementById("result");

  let score = 0;

  questions.forEach(question => {
    if (question.checked) {
      score++;
    }
  });

  if (score === 5) {
    result.textContent =
      "🛡️ Excellent! You are following all the basic security practices.";
  }

  else if (score >= 3) {
    result.textContent =
      "👍 Good job! You have good security habits, but there is still room to improve.";
  }

  else if (score >= 1) {
    result.textContent =
      "⚠️ You should improve your online payment security habits.";
  }

  else {
    result.textContent =
      "🚨 Start with the basic security tips above to protect yourself.";
  }
}
