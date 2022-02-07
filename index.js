const logo = document.querySelector(".logo");
const foto = document.querySelector(".main-container");
const birds = document.querySelectorAll(".bird-name");

let img = [
    "url(./assets/img/solovey.jpg)",
    "url(./assets/img/drozd.jpg)",
    "url(./assets/img/zarynka.jpg)",
    "url(./assets/img/javoronok.jpg)",
    "url(./assets/img/slavka.jpg)"
]

logo.addEventListener("click", () => {
    birds.forEach(el => {
        el.classList.remove("active");
    })
    logo.classList.add("active");  
    foto.style.backgroundImage = "url(./assets/img/forest.jpg)";
})

console.log(birds);


for(let i = 0; i < birds.length; i++) { 
    birds[i].addEventListener("click", () => {
        birds.forEach(el => {
            el.classList.remove("active");
        })
        logo.classList.remove("active"); 
        birds[i].classList.add("active");  
        foto.style.backgroundImage = img[i];
}); 
};