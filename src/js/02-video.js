import Player from '@vimeo/player';
import throttle from 'lodash.throttle'


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', throttle(data, 1000));

function data (timeupdate) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(timeupdate));    
}

let stopTime = localStorage.getItem('videoplayer-current-time');
setUp();

function setUp() {
    
    if (stopTime) {
        let jsStopTime = JSON.parse(stopTime)
        player.setCurrentTime(jsStopTime.seconds)
    } else {
        player.setCurrentTime(0)
    }
}







