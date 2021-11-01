const icon = document.querySelector("#menu-icon")
const nav_bar = document.querySelector(".navegation_bar")

icon.addEventListener("click", function(){

    nav_bar.classList.toggle("active")
})