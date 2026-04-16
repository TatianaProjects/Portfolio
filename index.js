const cards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

cards.forEach(card => observer.observe(card));

const header = document.querySelector('.site-header');
const logo = document.querySelector('.logo');
const title = document.querySelector('.title');

const maxHeight = 16; 
const minHeight = 10; 
const maxScroll = 200;

window.addEventListener('scroll', () => {

  if (window.innerWidth <= 600) {
    header.style.height = '';
    logo.style.fontSize = '';
    title.style.fontSize = '';
    return;
  }

  const scroll = Math.min(window.scrollY, maxScroll);
  const progress = scroll / maxScroll;

  const currentHeight = maxHeight - (maxHeight - minHeight) * progress;
  header.style.height = `${currentHeight}vh`;

  logo.style.fontSize = `${20 - 4 * progress}px`;
  title.style.fontSize = `${16 - 4 * progress}px`;
});

lottie.loadAnimation({
  container: document.getElementById('hero-animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './assets/wave-green-lines.json',
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid meet'
  }
});
