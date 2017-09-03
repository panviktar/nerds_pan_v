var link = document.querySelector(".map .btn");
var popup=document.querySelector(".modal-content");
var close=document.querySelector(".modal-content-close");
var form=popup.querySelector("form");
var name=popup.querySelector("[name=name]");
var mail=popup.querySelector("[name=mail]");
var list = form.querySelector("[name=list]");
var storage1 = localStorage.getItem("name");
var storage2 = localStorage.getItem("email");


// Логин

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
  if(!name.value || !mail.value) {
  event.preventDefault();
  popup.classList.add("modal-error");
} else {
  localStorage.setItem("name", name.value);
}
});

window.addEventListener("keydown", function(event){
  if(event.keyCode===27){
    if(popup.classList.contains("modal-content-show")){
    popup.classList.remove("modal-content-show");
  }
}
});
