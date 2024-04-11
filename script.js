const black = document.getElementById("background");
const white = document.getElementById("background1");
const banner = document.getElementById("rolls");
const banyuji = document.getElementById("banyuji");
const bansukuna = document.getElementById("bansukuna");
const bangojo = document.getElementById("bangojo");
const banners = document.getElementById("banners");
const inforall = document.getElementById("inforall");
const infor = document.getElementById("infor");
const infoyu = document.getElementById("infoyu");
let count=0;
   document.body.style.background = "black";
white.onclick = function(){
    document.body.style.background = "white";
}
black.onclick = function(){
    document.body.style.background = "black";
}
banner.addEventListener("click", function() {
 count++;
 if(count%2==0){
   
 inforall.style.display = "block";
   banners.style.display = "block";
if(bansukuna.paused){
   banyuji.currentTime = 0; bansukuna.currentTime = 0; bangojo.currentTime = 0;
}
      banyuji.play(); bansukuna.play(); bangojo.play();
   

   
 }else{
   
   
   banners.style.display = "none";
    inforall.style.display = "none";
    bansukuna.pause(); bangojo.pause(); banyuji.pause();
 } 
   

});

infoyu.addEventListener("mousedown", function() {
 infoyu.classList.add("clicked");
});
infoyu.addEventListener("mouseup", function() {
   infoyu.classList.remove("clicked");
  });
  infosu.addEventListener("mousedown", function() {
   infosu.classList.add("clicked");
  });
  infosu.addEventListener("mouseup", function() {
     infosu.classList.remove("clicked");
    });
    infogo.addEventListener("mousedown", function() {
      infogo.classList.add("clicked");
     });
     infogo.addEventListener("mouseup", function() {
        infogo.classList.remove("clicked");
       });
      
      bangojo.addEventListener("mousedown",function (){
       bangojo.classList.add("clicked");
      });
      bangojo.addEventListener("mouseup",function (){
         bangojo.classList.remove("clicked");
        });