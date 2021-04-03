const week = () => {
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const week = document.querySelector('.week');

    for (let i = 0; i < days.length; i++) {
        let dayItem = document.createElement('li');
        dayItem.innerHTML = days[i];
        week.appendChild(dayItem);
    }
}

window.onload = week();