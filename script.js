// alert("Baaaaaaaaaaaaa! Youre on! 🎇");
const toggleSwitch = document.querySelector('input[type ="checkbox"]');
const toggleIcon = document.getElementById("toggle-icon");
const nav = document.getElementById("nav");
const photoContainer = document.querySelector(".photograph-container");
const imageContainer = document.querySelectorAll(".image-container");

function toggleMode(theme) {
  nav.style.backgroundColor = `${
    theme === "dark" ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)"
  }`;

  toggleIcon.children[0].textContent = `${theme} mode`;

  toggleIcon.children[1].classList.remove(
    `${theme === "dark" ? "fa-sun" : "fa-moon"}`
  );
  toggleIcon.children[1].classList.add(
    `${theme === "dark" ? "fa-moon" : "fa-sun"}`
  );
}

function switchTheme(evt) {
  if (evt.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleMode("dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toggleMode("light");
  }
}
toggleSwitch.addEventListener("change", switchTheme);
//check local storage

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    toggleMode(currentTheme);
  }
}
