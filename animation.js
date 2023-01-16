const x=document.getElementById("d")
const y=document.getElementById("g")
const z=document.querySelector("#a")
const w=document.querySelector("#b")
z.addEventListener("click",()=>{
    x.classList.add("dos")
    y.classList.remove("dos")
})

w.addEventListener("click",()=>{
    x.classList.remove("dos")
    y.classList.add("dos")
})