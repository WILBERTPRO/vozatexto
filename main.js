
y = 0;x = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "el sistema esta escuchando . por favor,habla.";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var content = event.results[0][0].transcription;

document.getElementById("status").innerHTML = "la voz se reconocio como: " + content;
if(content =="Circle")
{
    x = Math.floor(Math.ramdom()* 900);
    y = Math.floor(Math.ramdom()* 600);
    document.getElementById("status").innerHTML = "SE empezo a dibujar un circulo";
    draw_circle = "set"
}
if(content =="rectangle")
{
    x = Math.floor(Math.ramdom()* 900);
    y = Math.floor(Math.ramdom()* 600);
    document.getElementById("status").innerHTML = "SE empezo a dibujar un rectangulo";
    draw_rect = "set"
}
}

function setup() {
    canvas = createCanvas(900,600);
}

function draw() {
    if(draw_circle == "set")
    {
        radius = Math.floor(Math.ramdom() * 100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "se dibujo un circulo.";
        draw_circle = "";
    }

    if(draw_rect == "set")
    {
        circle(x,y,70,50);
        document.getElementById("status").innerHTML = "se dibujo un rectangulo.";
        draw_rect = "";
    }
}