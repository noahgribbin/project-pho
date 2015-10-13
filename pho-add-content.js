var source;
var song = new Audio('music/thebetrayer.mp3');
var volume = 1;
var previousVolume = 100;
var mute = false;

document.getElementById('volumeControl').elements['volumeSlider'].defaultValue = 100;

function playSong(songName) {
  source = 'music/' + songName + '.mp3';
  tempSource = songName + '.mp3';
  // if there is a song currently playing
  if (!(song.paused || song.muted || song.ended)) {
    song.pause(); // pause it
    // if the next song and current song are different
    if (song.src.indexOf(tempSource) == -1) {
      // start the next song
      song = new Audio(source);
      song.loop = true;
      song.volume = volume;
      song.play();
    }
  } else {
    song = new Audio(source);
    song.loop = true;
    song.volume = volume;
    song.play();
  }
}

function changeVolume() {
  var volumeSlider = document.getElementById('volumeControl').elements['volumeSlider'];
  volume = Number(volumeSlider.value) / 100;
  song.volume = volume;
}

function muteSong(){
  mute = !mute;
  if (mute){
    previousVolume = song.volume;
    song.volume = 0;
    document.getElementById('mute').innerHTML = "Unmute";
  }else{
    song.volume = previousVolume;
    document.getElementById('mute').innerHTML = "Mute";
  }
  document.getElementById('volumeControl').elements['volumeSlider'].value = song.volume*100;
}

window.addEventListener("click",
  function() {
    if (song.paused) {
      document.getElementById('pause').innerHTML = "Play";
    } else {
      document.getElementById('pause').innerHTML = "Pause";
    }
  });

function pauseSong() {
  if (song.paused) {
    song.play();
    document.getElementById('pause').innerHTML = "Pause";
  } else {
    song.pause();
    document.getElementById('pause').innerHTML = "Play";
  }
}

var grayPalette = ["#aaaaaa", "#bbbbbb", "#cccccc", "#dddddd", "#eeeeee"];
// Red Brown Teal Green
var brightPalette = ["#FC8089", "#FFB782", "#6CD5CA", "#88EC78"];
var mid1Palette = ["#D9434E", "#DF8644", "#2A8B80", "#4AB939"];
var midPalette = ["#A4262F", "#A85E27", "#186960", "#2F8B20"]
var mid2Palette = ["#890711", "#8D4007", "#05574F", "#157046"];
var darkPalette = ["#660007", "#692D00", "#00413A", "#0C5700"];

var palette = brightPalette;

var canvas = document.getElementById('myCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var h = canvas.height;
var w = canvas.width;

var ctx = canvas.getContext("2d");
ctx.fillStyle = randomColor();
ctx.fillRect(0, 0, w, h);

function updateCanvas() {
  addCircle();
}

function addCircle() {
  var x = Math.round(Math.random() * w);
  var y = Math.round(Math.random() * h);
  var radius = Math.round(Math.random() * 50) + 25;
  var color = randomColor()
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.lineWidth = 0;
  ctx.strokeStyle = color;
  ctx.stroke();
}

function randomColor() {
  hex = palette[Math.round(Math.random() * (palette.length - 1))];
  opacity = Math.round(Math.random() * 100);
  return convertHex(hex, opacity);
}

function convertHex(hex, opacity) {
  hex = hex.replace('#', '');
  r = parseInt(hex.substring(0, 2), 16);
  g = parseInt(hex.substring(2, 4), 16);
  b = parseInt(hex.substring(4, 6), 16);
  result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
  return result;
}

var timer = setInterval(updateCanvas, 100);
