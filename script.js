// Days counters
const startDate = new Date("2024-10-31"); // relationship start
const longDistanceDate = new Date("2025-01-18"); // long distance start
const today = new Date();

const daysTogether = Math.floor((longDistanceDate - startDate) / (1000*60*60*24));
const daysApart = Math.floor((today - longDistanceDate) / (1000*60*60*24));

document.getElementById("daysCounter").textContent = `Days together before distance: ${daysTogether} ❤️`;
document.getElementById("daysApartCounter").textContent = `Days apart: ${daysApart} 💌`;

// Fade-in animation for both fade elements and adventure cards
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add("show");
      // optional: unobserve after animation
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll(".fade, .adventure-card").forEach(el => observer.observe(el));


function getTimeDiff(start, end) {
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0).getDate();
    days += prevMonth;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

const fullTime = getTimeDiff(startDate, today);

document.getElementById("fullTimeCounter").textContent =
  `${fullTime.years} year, ${fullTime.months} months, ${fullTime.days} days 💕`;



// Select sliders
const leftSlider = document.querySelector('.adventures-column:nth-child(1) .adventures-slider');
const rightSlider = document.querySelector('.adventures-column:nth-child(2) .adventures-slider');

// Scroll distance per arrow press
const scrollAmount = 200;

// Listen for keydown
document.addEventListener('keydown', (e) => {
  // Only scroll one slider at a time based on focus
  if(document.activeElement.closest('.adventures-column:nth-child(1)')) {
    if(e.key === "ArrowRight") leftSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    if(e.key === "ArrowLeft") leftSlider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else if(document.activeElement.closest('.adventures-column:nth-child(2)')) {
    if(e.key === "ArrowRight") rightSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    if(e.key === "ArrowLeft") rightSlider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }
});


