var source;
var song = new Audio();

function playSong(songName){
    if(!(song.paused||song.muted||song.ended)){
        song.pause();
    }
    source = 'music/'+songName+'.mp3';
    song = new Audio(source);
    song.play();
}
