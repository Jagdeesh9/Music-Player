let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctr = document.getElementById('ctr');

console.log(progress);

song.onloadedmetadata=()=>{
  console.log(song.duration);
  console.log(song.currentTime);

  progress.max = song.duration;
  progress.value = song.currentTime;
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
    progress.value = song.currentTime;
  },500)
}

progress.addEventListener("change",()=>{
  console.log("hello");
  
  song.currentTime = progress.value;
})