const renderCountry = country => {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const span = document.createElement('span');
    const img = document.createElement('img');
  
    img.src = country.flag;
    img.width = 20;
  
    span.innerHTML = `${country.nativeName} - ${country.name} - ${country.capital}`;
    li.appendChild(img);
    li.appendChild(span);
    ul.appendChild(li);
};

const fetchCountry = (name) =>
fetch(`https://restcountries.eu/rest/v2/name/${name}`).then((response) => {
    response.json().then((countries) => {
        renderCountry(countries[0]);
        fetch('https://restcountries.eu/rest/v2/name/brazil').then((response) => {
            response.json().then((countries) => {
                renderCountry(countries[0]);
            });
        });
        fetch('https://restcountries.eu/rest/v2/name/japan').then(response => {
            response.json().then((countries) => {
                renderCountry(countries[0]);
            });
        });
    });
});

window.onload = () => {
fetchCountry('china');
};