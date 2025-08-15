document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('bgmAudio');
  var playButton = document.getElementById('playBGM');

  console.log('DOM Content Loaded. Audio element:', audio, 'Play button:', playButton);

  if (playButton && audio) {
    playButton.addEventListener('click', function() {
      console.log('Button clicked. Audio paused state:', audio.paused);
      if (audio.paused) {
        audio.play().catch(function(error) {
          console.log('Autoplay was prevented or play() failed:', error);
        });
        playButton.textContent = 'BGMを停止';
      } else {
        audio.pause();
        playButton.textContent = 'BGMを再生';
      }
    });
  }
});

window.onload = function() {
  var loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.style.display = 'none';
  }
};