window.addEventListener("load", function (){

    document.querySelector("#Sound1").addEventListener("mousedown", function(){playSample("assets/kick.mp3");});
    document.querySelector("#Sound2").addEventListener("mousedown", function(){playSample("assets/hihat.mp3");});
    document.querySelector("#Sound3").addEventListener("mousedown", function(){playSample("assets/snare.mp3");});
    document.querySelector("#Sound4").addEventListener("mousedown", function(){playSample("assets/A.mp3");});
    document.querySelector("#Sound5").addEventListener("mousedown", function(){playSample("assets/C.mp3");});
    document.querySelector("#Sound6").addEventListener("mousedown", function(){playSample("assets/F.mp3");});
    document.querySelector("#Sound7").addEventListener("mousedown", function(){playSample("assets/G.mp3");});
    document.querySelector("#Sound8").addEventListener("mousedown", function(){playSample("assets/laugh-1.mp3");});
    document.querySelector("#Sound9").addEventListener("mousedown", function(){playSample("assets/laugh-2.mp3");});
    document.querySelector("#PlayButton").addEventListener("click", Play)});

function playSample(samples: string): void{
var sound:HTMLAudioElement = new Audio(samples);
sound.play();};


function Play () {
var Kick = setInterval(party, 300);
var Beat: string [] = ["assets/kick.mp3", "assets/hihat.mp3", "assets/snare.mp3","assets/hihat.mp3",];
var index:number = 0;
function party (){
var sequence:HTMLAudioElement = new Audio(Beat [index]);
sequence.play();
index += 1;
if (index>3) index=0;
};};
    


