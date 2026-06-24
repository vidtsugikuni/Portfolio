const words = [
    "Web Developer",
];

let wordIndex = 0;
let letterIndex = 0;

const typing = document.getElementById("typing");

function typeEffect() {

    if(letterIndex < words[wordIndex].length){

        typing.textContent += words[wordIndex].charAt(letterIndex);

        letterIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(deleteEffect, 1500);

    }
}

function deleteEffect() {

    if(typing.textContent.length > 0){

        typing.textContent =
        typing.textContent.slice(0,-1);

        setTimeout(deleteEffect,50);

    } else {

        wordIndex = (wordIndex + 1) % words.length;

        letterIndex = 0;

        setTimeout(typeEffect,500);
    }
}

window.onload = typeEffect;