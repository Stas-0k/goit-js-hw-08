import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', throttle(data, 1000));

function data (timeupdate) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(timeupdate));    
}
let stopTime = localStorage.getItem('videoplayer-current-time');
let jsStopTime = JSON.parse(stopTime)    
player.setCurrentTime(jsStopTime.seconds)


