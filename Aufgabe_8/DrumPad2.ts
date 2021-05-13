window.addEventListener("load", function (): void {

    document.querySelector("#Sound1").addEventListener("mousedown", function(): void {playSample("kick.mp3"); });
    document.querySelector("#Sound2").addEventListener("mousedown", function(): void {playSample("hihat.mp3"); });
    document.querySelector("#Sound3").addEventListener("mousedown", function(): void {playSample("snare.mp3"); });
    document.querySelector("#Sound4").addEventListener("mousedown", function(): void {playSample("A.mp3"); });
    document.querySelector("#Sound5").addEventListener("mousedown", function(): void {playSample("C.mp3"); });
    document.querySelector("#Sound6").addEventListener("mousedown", function(): void {playSample("F.mp3"); });
    document.querySelector("#Sound7").addEventListener("mousedown", function(): void {playSample("G.mp3"); });
    document.querySelector("#Sound8").addEventListener("mousedown", function(): void {playSample("laugh-1.mp3"); });
    document.querySelector("#Sound9").addEventListener("mousedown", function(): void {playSample("laugh-2.mp3"); });
    document.querySelector("#Play").addEventListener("click", PlayTheBeat);
    document.querySelector("#Record").addEventListener("click", RecordTheBeat);
    document.querySelector("#Delete").addEventListener("click", DeleteTheBeat);
    document.querySelector("#Remix").addEventListener("click", RemixBeat); 
});


var sequence: string [] = ["kick.mp3", "hihat.mp3", "snare.mp3", "hihat.mp3"];
var kick: number;
var record: boolean = false;


function playSample(mp3: string): void  {
        var sound: HTMLAudioElement = new Audio("assets/" + mp3);
        sound.play();
        if (record == true) {
            sequence.push(mp3);
        }}

function PlayTheBeat(): void {
        var index: number = 0;
        if (document.getElementById("Play").classList.contains("fa-play")) {
            document.getElementById("Play").classList.remove("fa-play");
            document.getElementById("Play").classList.add("fa-pause");
            kick = setInterval(mytone, 300);
            record = false;
            console.log("Play"); }
          else {
            document.getElementById("Play").classList.remove("fa-pause");
            document.getElementById("Play").classList.add("fa-play");
            clearInterval(kick);
            console.log("Pause");
        }

        function mytone (): void {
            playSample(sequence [index]);
            index += 1;
            if (index > (sequence.length - 1)) index = 0;
            console.log(sequence [index] );
        }}
        
function DeleteTheBeat (): void {
        sequence.length = 0;
        console.log("Deleting beat"); }
    
function RecordTheBeat (): void {
        record = true;
        console.log("Recording beat");
    } 

var mp3: string [] = ["kick.mp3", "hihat.mp3", "snare.mp3", "A.mp3", "C.mp3", "F.mp3", "G.mp3", "laugh-1.mp3", "laugh-2.mp3"];

let sound: HTMLAudioElement[] = [];
sound[0] = new Audio("kick.mp3");
sound[1] = new Audio("hihat.mp3");
sound[2] = new Audio("snare.mp3");
sound[3] = new Audio("A.mp3");
sound[4] = new Audio("C.mp3");
sound[5] = new Audio("F.mp3");
sound[6] = new Audio("G.mp3");
sound[7] = new Audio("laugh-1.mp3");
sound[8] = new Audio("laugh-2.mp3");

let i: number = 0;

function RemixBeat (): void {
    sequence.length = 0;
    for (let i: number = 0; i < 9; i++) {
    const sound = Math.floor(Math.random() * 9);
    sound.push(sound);
    console.log("Remix beat");
        }
      }
