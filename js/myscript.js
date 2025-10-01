document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.img-wrapper img');

  images.forEach(img => {
    img.addEventListener('mouseenter', () => {
      const tooltip = document.createElement('span');
      tooltip.className = 'tooltip';
      tooltip.textContent = img.alt;
      img.parentElement.appendChild(tooltip);
      requestAnimationFrame(() => {
        tooltip.style.opacity = '1';
      });
    });

    img.addEventListener('mouseleave', () => {
      const tooltip = img.parentElement.querySelector('.tooltip');
      if (tooltip) tooltip.remove();
    });
  });
});


const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const h1 = document.querySelector('h1'); // Add this line to select h1

toggleBtn.addEventListener('click', (e) => {
    e.preventDefault(); // stop link behavior if it's still in an <a>
    body.classList.toggle('dark-theme');
    h1.classList.toggle('dark-theme');
});


const carousel = document.getElementById('carouselExampleIndicators');
const title = document.getElementById('carousel-title')
carousel.addEventListener('slid.bs.carousel', function(event){
    const activeItem = event.relatedTarget;
    const caption = activeItem.getAttribute('data-caption');
    title.textContent = caption;
});


