'use strict';

const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const btnCity = document.querySelector('.submit-city');
const cityValue = document.querySelector('.cityValue');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');

const cardBody = document.querySelector('.card-body');
const apiKey = '142ddd2b148b67dbec3180f7a84f0c19';

const renderEroor = function (msg) {
  console.error(`${msg}`);
  alert(`${msg}`);
};

const getJSON = function (url, msg = 'Someting went Wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${msg} ${response.status}`);
    // throw create error watch jonas section if you need.

    /* 
    This example examines input. If the value is wrong, an exception (err) is thrown.

    The exception (err) is caught by the catch statement and a custom error message is displayed:
    */
    return response.json();
  });
};

btnCity.addEventListener('click', function (e) {
  e.preventDefault();
  getJSON(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityValue.value}&units=metric&appid=${apiKey}`,
    'Country not found 😔'
  )
    .then(data => {
      const cityAPI = data['name'];
      const tempAPI = Math.round(data['main']['temp']);
      city.textContent = cityAPI;
      temp.textContent = tempAPI + '°C';
      if (tempAPI >= 26) {
        body.style.backgroundImage = 'url(images/sun.jpg)';
      } else if (tempAPI <= 18) {
        body.style.backgroundImage = 'url(images/sky.jpg)';
      }
    })
    .catch(err => renderEroor(`Sorry We have Error ${err.message}`));
});

// style h1
h1.style.color = '#fff';
h1.style.backgroundColor = 'black';
