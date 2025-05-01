const button = document.getElementById('callButton');
const response = document.getElementById('responseText');

const phrases = [
    "Она занята созданием смысла.",
    "Наблюдает за тобой.",
    "Ответ придет, когда будешь готов.",
    "Система активирована. Жди сигнала."
];

button.addEventListener('click', () => {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    response.textContent = randomPhrase;
    response.classList.add('active');

    setTimeout(() => {
        response.classList.remove('active');
    }, 2000);
});

