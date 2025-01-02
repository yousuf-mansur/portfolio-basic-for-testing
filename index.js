// Smooth Scroll for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// Highlight Active Navigation Link
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const id = section.getAttribute('id');
    if (rect.top >= -50 && rect.top < 300) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === id) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    e.preventDefault();
    alert('Please fill in all fields before submitting.');
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    e.preventDefault();
    alert('Please enter a valid email address.');
  }
});

// Scroll to Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerText = '⬆';
scrollToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px;
    font-size: 1.2rem;
    background: #4a90e2;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    z-index: 1000;
`;

document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

// Theme Toggle
const themeToggle = document.createElement('button');
themeToggle.innerText = '🌙';
themeToggle.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px;
    font-size: 1.2rem;
    background: #fff;
    color: #4a90e2;
    border: 2px solid #4a90e2;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1000;
`;

document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  themeToggle.innerText = document.body.classList.contains('dark-theme')
    ? '☀️'
    : '🌙';
});

const style = document.createElement('style');
style.innerText = `
    .dark-theme {
        background-color: #333;
        color: #f4f4f9;
    }

    .dark-theme a {
        color: #1e90ff;
    }

    .dark-theme header, .dark-theme footer {
        background: #444;
    }
`;
document.head.appendChild(style);
