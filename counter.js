let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctr = document.getElementById('ctr');
let duration = document.querySelector('#duration');
let num;
let minutes;
let seconds;
song.onloadedmetadata=()=>{
  console.log(song.duration);
  console.log(song.currentTime);
  num = song.duration;
  minutes = Math.floor(num / 60);
  seconds = Math.floor(num % 60);

  console.log(minutes)
  console.log(seconds)
  duration.innerText = minutes+":"+seconds;

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
  duration.innerText = minutes+":"+seconds;
    progress.value = song.currentTime;
    seconds--;

  },1000)
}

progress.addEventListener("change",()=>{
  console.log("hello");
  
  song.currentTime = progress.value;

})