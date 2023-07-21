var btn = document.querySelector(".btn")

var view = document.querySelectorAll(".seen")

btn.addEventListener("click" , ()=>{
  for (d of view) {
    d.style.background = "transparent";
  }
  
  document.querySelector(".sp").style.display = "none";
  })
