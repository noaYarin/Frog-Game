const frog = document.querySelector('.frog');
const block = document.querySelector('.block');

function jump() {
    document.addEventListener('pointermove', () => {
        frog.classList.add('action');
    });
    setInterval(() => {
        frog.classList.remove('action');
    }, 1000);
}
jump();

let frogScore = 0;

function score() {
    const score = document.querySelector('.score');
    score.innerHTML = `Your score is : ${frogScore++}`;
    if (frogScore == 100) {
        score.innerHTML = `Game Over!`;
        clearInterval(timer);
        frog.classList.remove('action');
    }
}
score();
let timer = setInterval(score, 200);