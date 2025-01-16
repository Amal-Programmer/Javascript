function showweatherDetails(){   
    const city = document.getElementById('city').value;
    const apiKey = ''; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      console.log(data);
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8451;</p>
                              <p>Weather: ${data.weather[0].description}</p>`;
    });
    
};  

//attaches an event listener to the 'weatherForm' element, listening for a 'submit' event and triggering the showweatherDetails function upon form submission
document.getElementById('weatherForm').addEventListener('submit', function (event) { 
    event.preventDefault();
    showweatherDetails();
});


function showweatherDetailsLongLatt(){   
    const lat = document.getElementById('lattitude').value;
    const lon = document.getElementById('longitude').value;
    const apiKey = 'c4f86ece00bc8aa272652ac9065af12d'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfoLongLatt = document.getElementById('weatherInfoLongLatt');
      console.log(data);
      weatherInfoLongLatt.innerHTML = `<h2>Weather in ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8451;</p>
                              <p>Weather: ${data.weather[0].description}</p>`;
    });
    
};  



document.getElementById("weatherFormLongLatt").addEventListener("submit", function (event) {   
    event.preventDefault();
    showweatherDetailsLongLatt();
});
