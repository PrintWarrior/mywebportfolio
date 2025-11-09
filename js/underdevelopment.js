const proj = document.querySelector(".projects-section");
const list = [
    "This section is underdevelopment . . .",
    "No sample projects yet . . ."
];
let idx = 0;

setInterval(()=>{
    proj.innerHTML = `<h2>${list[idx]}</h2>`;
    idx=(idx+1)%list.length;
},4000);
