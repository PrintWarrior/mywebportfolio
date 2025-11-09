const bio = document.querySelector(".bio-section h3");

// put the exact spacing you want here:
const text =
"I'm an I.T college student, okay to learn about creating functional and user-friendly web systems that makes everyday tasks simplier.";

bio.innerHTML = "";
let i = 0;

function typeEffect(){
    if(i < text.length){
        bio.innerHTML += text[i];
        i++;
        setTimeout(typeEffect, 10 + Math.random()*40);
    }
}
typeEffect();