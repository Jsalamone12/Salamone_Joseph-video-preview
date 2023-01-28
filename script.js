// console.log("page loaded...");
var myVideo = document.getElementById("video");
function playPause(){ 
if (myVideo.paused) 
    myVideo.play(); 
else 
    myVideo.pause(); 
} 
function mutedOver(){ 
    document.getElementById("video").video.muted ="false"; 
} 
function mutedout(){ 
    document.getElementById("video").video.muted ="true"; 
} 
