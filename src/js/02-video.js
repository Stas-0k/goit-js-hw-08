import Player from '@vimeo/player';

console.log(Player)


const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function(timeupdate) {
        console.log(timeupdate);
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

