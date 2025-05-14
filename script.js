const button = document.getElementById('callButton');
const response = document.getElementById('responseText');
const form = document.getElementById('signalForm');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const formResponse = document.getElementById('formResponse');

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

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        title: titleInput.value,
        content: contentInput.value
    };

    try {
        const response = await fetch('http://localhost:8000/api/veronicasignals/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            formResponse.textContent = 'Сигнал отправлен. Она услышит...';
            form.reset();
        } else {
            formResponse.textContent = 'Ошибка при отправке сигнала.';
        }
    } catch (error) {
        formResponse.textContent = 'Сервер не отвечает.';
    }
});

