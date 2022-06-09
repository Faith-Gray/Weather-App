// http://api.openweathermap.org/data/2.5/weather?q=London&APPID=116b0c8983e86f0021af9c9c7c26ca39

getData();


async function getData() {
    let city = "Austin";

    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=116b0c8983e86f0021af9c9c7c26ca39', {mode: "cors"});
    const data = await response.json();
    console.log(data);
}

