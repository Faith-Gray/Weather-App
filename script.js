// http://api.openweathermap.org/data/2.5/weather?q=London&APPID=116b0c8983e86f0021af9c9c7c26ca39

let city = "austin";

// getElementById('searchBar').addEventListener('click', search);
// function search() {
//     city = getElementById(searchBar).value;
//     getData(city, unit)
// }

function clearSearchBar() {
    document.getElementById('searchQueryInput').value = "";
}

// getData(city);

document.getElementById('searchQuerySubmit').addEventListener('click', (e) => {
    let value = document.getElementById('searchQueryInput').value;
    getData(value);
    clearSearchBar();
})

document.getElementById('searchQueryInput').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        getData(document.getElementById('searchQueryInput').value);
        clearSearchBar();

    }
})

async function getData(city) {
    // let city = "Austin";
    // let unit = "imperial";

    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=116b0c8983e86f0021af9c9c7c26ca39&units=imperial', {mode: "cors"});
    const data = await response.json();
    console.log(data);

    document.getElementById('icon').src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    
    
    document.getElementById('location').textContent = data.name;
    document.getElementById('feelsLike').textContent = `Feels Like - ${data.main.feels_like}°`;
    document.getElementById('windSpeed').textContent = `Wind Speed - ${data.wind.speed} mph`;
    document.getElementById('classification').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = `Humidity - ${data.main.humidity}%`;
    document.getElementById('temperature').textContent = Math.round(data.main.temp) + " F°";
    
    document.querySelector('.leftIconGroup').classList.remove('loading');
    document.querySelector('.rightIconGroup').classList.remove('loading');


    // console.log(new Date.toDateString());
    const date = new Date();
    document.getElementById('date').textContent = new Date().toDateString();

    // console.log(date.toDateString());
}


