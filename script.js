const apiKey = '6dce7420d90ac639ecf23c47cf6ce117';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const button = document.querySelector('button');


async function checkWeather() {
    let inputValue = document.querySelector('input').value; // take input value

    let response = await fetch(apiUrl + inputValue + '&units=metric' + '&appid=' + apiKey); //fethc data from API
    let data = await response.json(); // convert response to JS object

    // putting data in elements on the page
    document.querySelector('.city').innerText = `${data.name}`;
    document.querySelector('.temp').innerText = `${Math.round(data.main.temp)}°C`;
    document.querySelector('.feels-like p').innerText = `${Math.round(data.main.feels_like)}°C`;
    document.querySelector('.humidity p').innerText = `${data.main.humidity}%`;
    document.querySelector('.pressure p').innerText = `${data.main.pressure} hPa`;
    document.querySelector('.wind p').innerText = `${data.wind.speed} km/h`;

    // take weather icon element (img) to dynamic display of icons depending on weather
    let weatherIcon = document.querySelector('.weather-icon'); 

    // display particular icon for every case 
    switch(data.weather[0].main){
        case 'Clouds': 
            weatherIcon.src = 'images/clouds.png'
            break;
        case 'Clear': 
            weatherIcon.src = 'images/clear.png'
            break;
        case 'Rain':
            weatherIcon.src = 'images/rain.png'
            break;
        case 'Drizzle':
            weatherIcon.src = 'images/drizzle.png'
            break;
        case 'Mist': 
            weatherIcon.src = 'images/mist.png'
            break;

    }

    document.querySelector('.weather').style.display = 'block'; // weather div is hidden until user enter city name
    Array.from(document.querySelectorAll('.details')).forEach(detail => detail.style.display = 'flex'); // details divs are hidden until user enter city name
}

button.addEventListener('click', checkWeather);
