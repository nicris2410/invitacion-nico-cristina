
const welcome = document.getElementById("welcome");
const invitation = document.getElementById("invitation");
const enterBtn = document.getElementById("enterBtn");
const musicBadge = document.getElementById("musicBadge");
const musicBtn = document.getElementById("musicBtn");
const musicIcon = document.getElementById("musicIcon");
const bgMusic = document.getElementById("bgMusic");

enterBtn.addEventListener("click", async () => {
  try {
    bgMusic.volume = 0.55;
    await bgMusic.play();
    musicIcon.textContent = "⏸";
  } catch (error) {
    musicIcon.textContent = "▶";
  }
  welcome.classList.add("hidden");
  invitation.classList.add("visible");
  invitation.setAttribute("aria-hidden", "false");
  musicBadge.classList.add("visible");
  document.body.style.overflow = "auto";
  setTimeout(() => document.querySelector(".hero").classList.add("visible"), 150);
});

musicBtn.addEventListener("click", async () => {
  if (bgMusic.paused) {
    try {
      await bgMusic.play();
      musicIcon.textContent = "⏸";
    } catch (error) {}
  } else {
    bgMusic.pause();
    musicIcon.textContent = "▶";
  }
});

document.body.style.overflow = "hidden";

const weddingDate = new Date("2026-10-24T13:00:00+02:00");

function updateCountdown() {
  const now = new Date();
  let diff = weddingDate.getTime() - now.getTime();

  if (diff <= 0) {
    days.textContent = hours.textContent = minutes.textContent = seconds.textContent = "0";
    countdownMessage.textContent = "¡Ha llegado nuestro gran día!";
    return;
  }

  days.textContent = Math.floor(diff / 86400000);
  diff %= 86400000;
  hours.textContent = String(Math.floor(diff / 3600000)).padStart(2, "0");
  diff %= 3600000;
  minutes.textContent = String(Math.floor(diff / 60000)).padStart(2, "0");
  diff %= 60000;
  seconds.textContent = String(Math.floor(diff / 1000)).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
