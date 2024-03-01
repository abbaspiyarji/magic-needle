let menubars = document.querySelector("#menubars");
let menu = document.querySelector(".menu")

menubars.onclick = () => {
    menubars.classList.toggle("fa-times");
    menu.classList.toggle("active");
};