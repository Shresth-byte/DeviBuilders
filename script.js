// Scroll to section on button click
function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Intersection Observer for Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.fade-up, .fade-in, .zoom-in').forEach((el, index) => {
  el.style.transitionDelay = `${index * 0.1}s`;
  observer.observe(el);
});

// Project Filter Buttons
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('#projectCards .card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');
    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filterValue === 'all' || category === filterValue) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
