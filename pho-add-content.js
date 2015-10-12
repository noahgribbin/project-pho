var source;
var song = new Audio();
var volume = 1;

document.getElementById('volumeControl').elements['volumeSlider'].defaultValue = 100;

function playSong(songName){
    if(!(song.paused||song.muted||song.ended)){
        song.pause();
    }
    source = 'music/'+songName+'.mp3';
    song = new Audio(source);
    song.volume = volume
    song.play();
}

function changeVolume(){
    var volumeSlider = document.getElementById('volumeControl').elements['volumeSlider'];
    volume = Number(volumeSlider.value)/100;
    console.log(volume);
    song.volume = volume;
}

var grayPalette = ["#aaaaaa","#bbbbbb","#cccccc","#dddddd","#eeeeee"];
// Red Brown Teal Green
var brightPalette = ["#FC8089","#FFB782","#6CD5CA","#88EC78"];
var mid1Palette = ["#D9434E","#DF8644","#2A8B80","#4AB939"];
var midPalette = ["#A4262F","#A85E27","#186960","#2F8B20"]
var mid2Palette = ["#890711","#8D4007","#05574F","#157046"];
var darkPalette = ["#660007","#692D00","#00413A","#0C5700"];

var palette = midPalette;

var canvas = document.createElement("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var ctx = canvas.getContext("2d");
ctx.fillStyle = randomColor();
ctx.fillRect(0,0,canvas.width,canvas.height);

var h = canvas.height;
var w = canvas.width;

function newBackground(){
    addCircle();
}

function addCircle(){
    var x = Math.round(Math.random()*w);
    var y = Math.round(Math.random()*h);
    var radius = Math.round(Math.random()*50)+25;
    var color = randomColor()
    ctx.beginPath();
    ctx.arc(x,y,radius,0,2*Math.PI,false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.lineWidth = 0;
    ctx.strokeStyle = color;
    ctx.stroke();
}

function randomColor(){
    hex = palette[Math.round(Math.random()*(palette.length-1))];
    opacity = Math.round(Math.random()*100);
    return convertHex(hex,opacity);
}

function convertHex(hex,opacity){
    hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);
    result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return result;
}


function setDynamicBackground(){
    newBackground();
    var imageDataURL = canvas.toDataURL();
    document.body.style.background="transparent url('"+imageDataURL+"') repeat";
}

var timer = setInterval(setDynamicBackground,100);
