const askButton = document.getElementById('ponder');
const resetButton = document.getElementById('reset');

const inputsContainer = document.getElementById('input-zone');
const fortuneContainer = document.getElementById('fortune-holder');

const fortune = document.getElementById('orb-speak');

const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
    'This angers the orb',
    'The orb shall remember this',
    'Do not question the orbs wisdom',
    'The orb cannot tell you',
];

askButton.addEventListener('click', () => {
    const randNum = Math.floor(Math.random() * answers.length);
    fortune.textContent = answers[randNum];

    inputsContainer.classList.toggle('hide');
    fortuneContainer.classList.toggle('hide');
});

resetButton.addEventListener('click', () => {
    inputsContainer.classList.toggle('hide');
    fortuneContainer.classList.toggle('hide');
});
