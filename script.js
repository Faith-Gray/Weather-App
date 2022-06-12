// http://api.openweathermap.org/data/2.5/weather?q=London&APPID=116b0c8983e86f0021af9c9c7c26ca39

let city = "Wichita";
let unit = "imperial";

getData(city, unit);


async function getData(city, unit) {
    // let city = "Austin";
    // let unit = "imperial";

    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=116b0c8983e86f0021af9c9c7c26ca39&units=' + unit, {mode: "cors"});
    const data = await response.json();
    console.log(data);

    document.getElementById('location').textContent = data.name;
}

