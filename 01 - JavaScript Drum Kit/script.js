


document.addEventListener('DOMContentLoaded', function() {
  //Undo transfom
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  // Plays sound, data-key parameter of which matches e.keyCode of pressed key 
  const playSound = function(e) {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!sound) return;

    key.classList.add('playing');
    sound.currentTime = 0;
    sound.play();
  } 

  //Get array of elements with .key class
  const keys = (Array.from(document.querySelectorAll('.key')));
  //addEventListener to each to undo transform once it's done
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  window.addEventListener('keydown', playSound);
  document.addEventListener('keydown', playSound);
  })

