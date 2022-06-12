// http://api.openweathermap.org/data/2.5/weather?q=London&APPID=116b0c8983e86f0021af9c9c7c26ca39

let city = "portland";
let unit = "imperial";

// getElementById('searchBar').addEventListener('click', search);
// function search() {
//     city = getElementById(searchBar).value;
//     getData(city, unit)
// }

getData(city, unit);


async function getData(city, unit) {
    // let city = "Austin";
    // let unit = "imperial";

    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=116b0c8983e86f0021af9c9c7c26ca39&units=' + unit, {mode: "cors"});
    const data = await response.json();
    console.log(data);

    document.getElementById('icon').src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    
    
    document.getElementById('location').textContent = data.name;
    document.getElementById('feelsLike').textContent += data.main.feels_like + "°";
    document.getElementById('windSpeed').textContent += data.wind.speed + " mph";
    document.getElementById('classification').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent += data.main.humidity + "%";
    document.getElementById('temperature').textContent = Math.round(data.main.temp) + " F°";
}

