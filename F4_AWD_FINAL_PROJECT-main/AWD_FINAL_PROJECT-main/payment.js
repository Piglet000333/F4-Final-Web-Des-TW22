const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


      
      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
      });


      modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            modeText.innerText = "Light mode"
        }else{
            modeText.innerText = "Dark mode"
        }
      });

 // Access the Images
 let slideImages = document.querySelectorAll('img');
 // Access the next and prev buttons
 let next = document.querySelector('.next');
 let prev = document.querySelector('.prev');
 // Access the indicators
 let dots = document.querySelectorAll('.dot');



let popup =document.getElementById("popup");

function openPopup(){
  popup.classList.add("open-popup");

}

function closePopup(){
  popup.classList.remove("open-popup");
  
}



 

