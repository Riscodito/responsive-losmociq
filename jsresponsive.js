const klikIcon = document.querySelector(".iconAtas");
const menuUtama = document.querySelector(".mainList");

klikIcon.addEventListener("click", function(){
    menuUtama.classList.toggle("hidden")
})