const logo = document.querySelector(".logo");
const foto = document.querySelector(".main-container");
const birds = document.querySelectorAll(".bird-name");
const audio = document.querySelector(".audio");
const player = document.querySelector(".play"); 

let img = [
    "url(./assets/img/solovey.jpg)",
    "url(./assets/img/drozd.jpg)",
    "url(./assets/img/zarynka.jpg)",
    "url(./assets/img/javoronok.jpg)",
    "url(./assets/img/slavka.jpg)"
];

let sounds = [
    "./assets/audio/assets_audio_solovey.mp3",
    "./assets/audio/drozd.mp3",
    "./assets/audio/assets_audio_zarynka.mp3",
    "./assets/audio/javoronok.mp3",
    "./assets/audio/slavka.mp3"
];

let pause = "url(./assets/svg/pause.svg)";

logo.addEventListener("click", () => {
    birds.forEach(el => {
        el.classList.remove("active");
    })
    logo.classList.add("active");  
    foto.style.backgroundImage = "url(./assets/img/forest.jpg)";
    audio.src = "./assets/audio/forest.mp3";
    player.classList.toggle("play-active"); 
    playAudio();
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
        audio.src = sounds[i];
        player.classList.toggle("play-active"); 
        playAudio();
}); 
};


player.addEventListener("click", () => {
    player.classList.toggle("play-active"); 
    if(player.classList.contains("play-active") === true) {
        playAudio(); 
    } else {
        pauseAudio();  
    }
});
 

function playAudio() {
    audio.currentTime = 0;
    audio.play();
  }
  function pauseAudio() {
    audio.pause();
  };
