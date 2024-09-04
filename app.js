let btn = document.querySelector("#click");
btn.addEventListener("click",()=>{
    console.log("Button was clicked");

});

let signup = document.querySelector(".signup");
signup.addEventListener("click",()=>{
    console.log("Signup successfully");

});

// let content = document.querySelector(".content");
// let main =document.querySelector(".main");

// setInterval(()=>{
//     main.innerText = content;
// },7000);

// script.js
let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    if (n >= slides.length) {
        slideIndex = 0;
    }

    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

// Optional: Auto slide every 3 seconds
setInterval(function() {
    changeSlide(1);
}, 3000);
