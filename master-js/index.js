
async function getTemp(x) {
    let myHttp = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e5d32f17a1ba4ce7a7f85050232202&q=${x}&days=3`);
    if (myHttp.status==200) {
        var data = await myHttp.json();
        console.log(data.location);
    }
    displayHeader();
    displayBody(data);
    displayFooter(data);
    // var cloud = data.current.condition.icon;
    // document.getElementById("city").innerHTML = data.location.name;
    // document.getElementById("temp").innerHTML = data.current.temp_c;
    // document.getElementById("clo").setAttribute("src", cloud);
    console.log(data.forecast.forecastday[1]);
}

document.getElementById("search").addEventListener("keyup", function (e) {
    var a = e.target.value;
    getTemp(a);
});



var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


function displayHeader() {
    var d = new Date();
    var divHeader = `
        <p>${days[d.getDay()]}</p>
        <p>${d.getDate()} ${months[d.getMonth()]}</p>
    `;
    var forecast1 = `
        <p>${days[d.getDay()+1] || days[0] }</p>
    `;

    var forecast2 = `
        <p>${days[d.getDay() + 2] || days[1] }</p>
    `;

    document.getElementById("itemHeader").innerHTML = divHeader;
    document.getElementById("forecast1").innerHTML = forecast1;
    document.getElementById("forecast2").innerHTML = forecast2;
}

function displayBody(data) {
    var divBody = `
        <h4 id="city">${data.location.name}</h4>
        <div class="item-body-temp d-flex align-items-center">
            <div class="num-temp">
                <h2> <span id="temp">${data.current.temp_c}</span>  <sup>o</sup> C</h2>
            </div>
            <div class="ms-5">
                <img id="clo" src="${data.current.condition.icon}" alt="">
            </div>
            
        </div>
    `;

    var forecast1Body = `
        <img src="${data.forecast.forecastday[1].day.condition.icon}" alt="">
        <h3>${data.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C </h3>
        <h5>${data.forecast.forecastday[1].day.mintemp_c} <sup>o</sup>C</h5>
        <p>${data.forecast.forecastday[1].day.condition.text}</p>
    `;

    var forecast2Body = `
        <img src="${data.forecast.forecastday[2].day.condition.icon}" alt="">
        <h3>${data.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C </h3>
        <h5>${data.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</h5>
        <p>${data.forecast.forecastday[2].day.condition.text}</p>
    `;
    document.getElementById("itemBody").innerHTML = divBody;
    document.getElementById("forecast1Body").innerHTML = forecast1Body;
    document.getElementById("forecast2Body").innerHTML = forecast2Body;
}


function displayFooter(data) {
    var divFooter = `
        <p>${data.current.condition.text}</p>
        <div class="row justify-content-between">
            <div class="col-md-3 d-flex">
                <img src="images/icon-umberella.png" alt="">
                <span class="ms-2">${data.current.humidity}%</span>
            </div>
            <div class="col-md-3 d-flex">
                <img src="images/icon-wind.png" alt="">
                <span class="ms-2">${data.current.wind_kph}km/h</span>
            </div>
            <div class="col-md-3 d-flex ms-3">
                <img src="images/icon-compass.png" alt="">
                <span class="ms-2">${data.current.wind_dir}</span>
            </div>
        </div>
    `;

    document.getElementById("itemFooter").innerHTML=divFooter;
}


getTemp("cairo");
