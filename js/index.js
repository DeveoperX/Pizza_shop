const sidebar = document.querySelector(".sidebar");
const icon = document.getElementById("bars");

icon.addEventListener("click", function(){
    sidebar.classList.toggle("sidebar_active")
    this.classList.toggle("fa-bars");
    this.classList.toggle("fa-times");
})