'use strict';

const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const btnCity = document.querySelector('.submit-city');
const cityValue = document.querySelector('.cityValue');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');

const cardBody = document.querySelector('.card-body');
const apiKey = '142ddd2b148b67dbec3180f7a84f0c19';

btnCity.addEventListener('click', function (e) {
  e.preventDefault();
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityValue.value}&units=metric&appid=${apiKey}`
  )
    .then(response => response.json())
    .then(data => {
      const cityAPI = data['name'];
      const tempAPI = Math.round(data['main']['temp']);
      city.textContent = cityAPI;
      temp.textContent = tempAPI + '°C';
      if (tempAPI >= 26) {
        body.style.backgroundImage = 'url(images/sun.jpg)';
      } else if (tempAPI <= 25) {
        body.style.backgroundImage = 'url(images/sky.jpg)';
      }
    })
    .catch(el => alert('I dont Find this is city'));
});

// style h1
h1.style.color = '#fff';
h1.style.backgroundColor = 'black';
