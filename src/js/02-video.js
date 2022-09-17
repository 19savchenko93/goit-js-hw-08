import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

player.on('timeupdate', throttle(timeStop, 1000));
    
function timeStop(timeupdate) {
    let pause = timeupdate.seconds;
    console.log(pause);
    localStorage.setItem("videoplayer-current-time", pause);
};

const currentTime = localStorage.getItem('videoplayer-current-time');
player
  .setCurrentTime(currentTime)
  .then(function (pause) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });

// player.getCurrentTime().then(function (seconds) {
//         console.log("time:", seconds)
//     // seconds = the current playback position
// }).catch(function(error) {
//     // an error occurred
// });
