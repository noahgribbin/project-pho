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


var canvas = document.createElement("canvas");
canvas.width=100;
canvas.height=100;

var ctx = canvas.getContext("2d");
ctx.clearRect(0,0,100,100);
var grayPalette = ["#aaaaaa","#bbbbbb","#cccccc","#dddddd","#eeeeee"];

function newBackground(){
    for(i=0;i<10;i++){
        for(j=0;j<10;j++){
            ctx.beginPath();
            ctx.rect(0+10*j,0+10*i,10,10);
            var randomColorIndex = Math.round(Math.random()*(grayPalette.length-1));
            ctx.fillStyle = grayPalette[randomColorIndex];
            ctx.fill();
            ctx.strokeStyle = "#ffffff";
            ctx.stroke();
            ctx.closePath();
        }
    }
}

function setDynamicBackground(){
    newBackground();
    var imageDataURL = canvas.toDataURL();
    document.body.style.background="transparent url('"+imageDataURL+"') repeat";
}

var timer = setInterval(setDynamicBackground,1000);
