const sounds = {
    'kick': new Audio('./assets/sound/bass-drum.mp3'),
    'snare': new Audio('./assets/sound/snare.mp3'),
    'hihat': new Audio('./assets/sound/hi-hat.mp3'),
    'tom1': new Audio('./assets/sound/tom1.mp3'),
    'tom2': new Audio('./assets/sound/tom2.mp3'),
    'cymbal': new Audio('./assets/sound/cymbal.mp3')
};

function playSound(id) {
    sounds[id].currentTime = 0;
    sounds[id].play();
    document.getElementById(id).classList.add('active');
    setTimeout(() => {
        document.getElementById(id).classList.remove('active');
    }, 100);
}

document.querySelectorAll('.drum-button').forEach(button => {
    button.addEventListener('click', function () {
        playSound(this.id);
    });
});

document.addEventListener('keydown', function (event) {
    const keyMap = {
        'a': 'kick',
        's': 'snare',
        'd': 'hihat',
        'f': 'tom1',
        'g': 'tom2',
        'h': 'cymbal'
    };
    if (keyMap[event.key]) {
        playSound(keyMap[event.key]);
    }
});