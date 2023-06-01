var a = document.querySelector(".menubar");
var b = document.querySelector(".toggle");

  b.onclick = function(){
  a.classList.toggle("slide");
 }
 
 var search = document.querySelector(".search");
 search.style.maxWidth = "0px";
 function searchon(){
   if(search.style.maxWidth == "0px"){
     search.style.maxWidth = "100%";
   }
   else{
     search.style.maxWidth = "0px";
   }
 }
 
 function searchclose(){
   if(search.style.maxWidth == "100%"){
     search.style.maxWidth = "0px";
   }
   else{
     search.style.maxWidth = "100%";
   }
 }
 
/*
 function toggle(){
   if(a.style.maxWidth == "0px"){
     a.style.maxWidth = "90%";
   }
   else{
     a.style.maxWidth = "0px";
   }
 }
*/
