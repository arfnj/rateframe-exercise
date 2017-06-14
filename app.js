// 1. This code loads the IFrame Player API code asynchronously.
let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'QrGrOK8oZG8'
  });
}

// 3. This is the function called when the button is clicked.
//    It checks to see if the video is playing, and if it is,
//    it grabs the current time of the video, cleans it up, and
//    prepends the current time to the list of times below the video.
const timeGrabber = () => {
  if (player.getPlayerState() === 1) {
    let timestamp = player.getCurrentTime();
    timestamp = timeCleaner(timestamp);
    let chronolog = document.getElementById("chronolog");
    chronolog.innerHTML = `<div>${timestamp}</div>${chronolog.innerHTML}`;
  }
}

// 4. This helper function takes a number of seconds and converts
//    it into a more readable mm:ss format
const timeCleaner = (timestamp) => {
  let minutes = ~~(timestamp/60);
  let seconds = Math.round(timestamp-(minutes*60));
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutes}:${seconds}`;
}
