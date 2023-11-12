const bars = document.querySelector(".fa-bars");
const x=document.querySelector(".fa-x");
const ambany = document.getElementById("amb");
bars.addEventListener("click", ()=>{
    ambany.classList.toggle("none");
    ambany.style.left=0;
})
x.addEventListener("click", ()=>{
    ambany.classList.toggle("none");
    ambany.style.left="-1300px";
})