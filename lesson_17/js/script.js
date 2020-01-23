 var modal = document.getElementsByClassName("modal")[0];
 var remove = document.getElementsByClassName("remove")[0];
 var image = document.getElementById("image-to-remove");
 var cancel = document.getElementById("btn-cancel");
 var confirm = document.getElementById("btn-ok");  
 var exit = document.getElementsByTagName("span")[0];

 remove.onclick = function(){
  modal.style.display = "block";
 }
 exit.onclick = function(){
  modal.style.display = "none";
 }
 cancel.onclick = function(){
  modal.style.display = "none";
 }
 window.onclick = function(){
  if(event.target == modal){
    modal.style.display = "none";
  }
 }
 confirm.onclick = function(){
  modal.style.display = "none";
  image.parentNode.removeChild(image);
  remove.disabled = true;
 }