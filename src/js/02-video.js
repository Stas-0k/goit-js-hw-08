import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function (timeupdate) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(timeupdate));    
});
let stopTime = localStorage.getItem('videoplayer-current-time');
let jsStopTime = JSON.parse(stopTime)

    
player.setCurrentTime(jsStopTime.seconds).then(function(seconds) {
    seconds = jsStopTime.seconds;
})



// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
