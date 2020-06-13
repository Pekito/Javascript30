const keys = document.querySelectorAll('div.key');
const removerTransition = (e) => {
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
};

const playSound = (e) => {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let element = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio && !element) return;
    element.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

};

keys.forEach(el => {
    el.addEventListener('transitionend', removerTransition);
});
document.addEventListener('keydown', playSound);
