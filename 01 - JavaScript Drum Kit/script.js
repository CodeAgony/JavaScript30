// Plays sound, data-key parameter of which matches e.keyCode of pressed key 
const playSound = function(e) {
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if(!sound) return;

  sound.currentTime = 0;
  sound.play();
} 

document.addEventListener('keydown', playSound);