window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const textElement = document.querySelector(".text");
  const text = "Adam Zakob";
  let index = 0;

  function typeText() {
      if (index < text.length) {
          textElement.innerHTML += text[index];
          index++;
          setTimeout(typeText, 150);
      } else {
          setTimeout(() => {
              preloader.classList.add("hide");
              setTimeout(() => {
                  preloader.style.display = "none";
              }, 500);
          }, 1000);
      }
  }

  setTimeout(typeText, 500);
});


document.addEventListener('DOMContentLoaded', () => {
  const scrollLinks = document.querySelectorAll('[data-scroll]');

  scrollLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('data-scroll');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);

    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

const burger = document.querySelector('.menu__burger');
const overlay = document.querySelector('.menu__overlay');
const blocker = document.createElement('div'); // Створюємо перекриття
blocker.classList.add('menu__overlay-blocker');
document.body.appendChild(blocker);

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  overlay.classList.toggle('show');
  blocker.classList.toggle('show');
  document.body.classList.toggle('no-scroll'); // Блокуємо прокрутку
});

// Закриття меню через хрестик
const closeBtn = document.querySelector('.menu__close');
closeBtn.addEventListener('click', () => {
  burger.classList.remove('active');
  overlay.classList.remove('show');
  blocker.classList.remove('show');
  document.body.classList.remove('no-scroll'); // Знімаємо блокування
});

// Закриття меню при кліці на перекриття
blocker.addEventListener('click', () => {
  burger.classList.remove('active');
  overlay.classList.remove('show');
  blocker.classList.remove('show');
  document.body.classList.remove('no-scroll'); // Знімаємо блокування
});

// Закриття меню при натисканні на посилання
const menuLinks = document.querySelectorAll('.menu__overlay-item a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    overlay.classList.remove('show');
    blocker.classList.remove('show');
    document.body.classList.remove('no-scroll'); // Знімаємо блокування
  });
});
