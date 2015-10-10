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
