const week = () => {
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const week = document.querySelector('.week');

    for (let i = 0; i < days.length; i++) {
        let dayItem = document.createElement('li');
        dayItem.innerHTML = days[i];
        week.appendChild(dayItem);
    }
};
week();

const month = () => {
    const month = document.querySelector('.month');

    for (let i = 1; i <= 30; i++) {
        let day = document.createElement('li');
        day.innerHTML = [i];
        month.appendChild(day);
    }
};
month();

