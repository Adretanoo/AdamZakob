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



document.getElementById('files').addEventListener('change', function() {
  const fileList = document.getElementById('file-list');
  fileList.innerHTML = ''; // Очищаємо попередній список файлів

  for (let file of this.files) {
      const listItem = document.createElement('li');
      listItem.textContent = file.name;
      fileList.appendChild(listItem);
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const menuLinks = document.querySelectorAll(".menu__list .scroll-link");

  function changeActiveLink() {
      let currentSection = "";

      sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (window.scrollY >= sectionTop - sectionHeight / 3) {
              currentSection = section.getAttribute("id");
          }
      });

      menuLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === currentSection) {
              link.classList.add("active");
          }
      });
  }

  window.addEventListener("scroll", changeActiveLink);
});


