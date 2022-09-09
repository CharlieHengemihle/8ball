const askButton = document.getElementById('ponder');
const resetButton = document.getElementById('reset');

const inputsContainer = document.getElementById('question');
const fortuneContainer = document.getElementById('orb-speak');

askButton.addEventListener('click', () => {
    imputsContainer.classlist.toggle('hide');
    fortuneContainer.classList.toggle('hide');
});
