x = 0;
y = 0;

draw_apple = "";
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = to_number +  "apples drawn";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content;
  for(var i = 1; i <=to_number; i++) {
    x = Math.floor(Math.random() * 700);
    y = Math.floor(Math.random() * 400);
    image(apple, x, y, 50, 50);
  }
}


function setup() {

  canvas = createCanvas(900, 600);
}

function draw() {
  if(draw_apple == "set") {
    radius = Math.floor(Math.random() * 100);
    apple(x,y,radius);
    document.getElementById("status").innerHTML = "apple is drawn";
    draw_cricle = "";
}}
function speak(){
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}