var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("slide");

btn[0].onclick = function () {
    slide.style.transform = "translatex(0px)";
        for(i = 0; i < 5; i++){
          btn[i].classList.remove("active");
        }
        this.classList.add("active");
      }
btn[1].onclick = function () {
        slide.style.transform = "translatex(-800px)";
         for (i = 0; i < 5; i++) {
          btn[i].classList.remove("active");
        }
        this.classList.add("active");
      }  
 btn[2].onclick = function () {
        slide.style.transform = "translatex(-1600px)";
         for (i = 0; i < 5; i++) {
          btn[i].classList.remove("active");
        }
        this.classList.add("active");
      }      
 btn[3].onclick = function () {
        slide.style.transform = "translatex(-2400px)";
         for (i = 0; i < 5; i++) {
          btn[i].classList.remove("active");
        }
        this.classList.add("active");
      }      
 btn[4].onclick = function () {
        slide.style.transform = "translatex(-3200px)";
         for (i = 0; i < 5; i++) {
          btn[i].classList.remove("active");
        }
        this.classList.add("active");
      }      
     
     