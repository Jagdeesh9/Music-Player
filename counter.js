let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctr = document.getElementById('ctr');


song.onloadedmetadata=()=>{
  progress.max = song.duration;
  progress.value = song.currenrTime;
}
const playPause = ()=>{
  if(ctr.classList.contains("fa-pause")){
    song.pause();
    ctr.classList.remove("fa-pause");
    ctr.classList.add("fa-play");
  }
  else{
    song.play();
    ctr.classList.remove("fa-play");
    ctr.classList.add("fa-pause");
  }
}

if(song.play()){
  setInterval(()=>{
    progress.value = song.currenrTime;

  },500)
}