var btn = document.querySelector(".btn")

var view = document.querySelectorAll(".seen")

btn.addEventListener("click" , ()=>{
  for (d of view) {
    d.style.background = "transparent";
  }
let dot = document.querySelectorAll(".dot");
  for (dot of dot) {
    dot.style.display = "none";
  }
  
  document.querySelector(".sp").style.display = "none";
  })
