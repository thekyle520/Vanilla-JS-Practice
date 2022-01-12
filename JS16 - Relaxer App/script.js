const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 20000;
const breathTime = 5000;
const holdTime = 5000;

breathAnimation();

function breathAnimation() {
    text.textContent = 'Breathe In'
    container.className = 'container grow';

    setTimeout(() => {
        text.textContent = 'Hold'
    
        setTimeout(() => {
            text.textContent = 'Breath Out'
            container.className = 'container shrink'
            setTimeout(() => {
                text.textContent = 'Hold'
            }, breathTime)
        }, holdTime)
    }, breathTime);
}

setInterval(breathAnimation, totalTime);