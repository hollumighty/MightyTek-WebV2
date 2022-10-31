//toggle
const menuBtn = document.querySelector(".menu__btn");
const menuRespond = document.querySelector(".responsive");
const serviceClick = document.querySelector(".service-display");
const serviceSub = document.querySelector(".service-sub");
// const headText = document.querySelector(".header__text");
let menuClosed = true;

menuBtn.addEventListener("click", () => {
    if(menuClosed) {
        menuBtn.classList.add("open");
        // headText.style.display="none";
        menuRespond.classList.add("responsiveBlock");
        menuClosed = false;
    } else {
        menuBtn.classList.remove("open");
        menuClosed = true;   
        // headText.style.display="block"; 
        menuRespond.classList.remove("responsiveBlock");
        serviceSub.style.display = 'none';
    }
});

serviceClick.addEventListener("click", () => {
    if (serviceSub.style.display !== 'none'){
        serviceSub.style.display = 'none';
    } else {
        serviceSub.style.display = 'block';
    }
})