// Get the current weather based of the users location

// Get the location of the user
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      // Get the weather for the user's location
      const apiKey = 'd19428d440fc30cb3579aa936f2e8615';
  
      // Get the API URL
      const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
      // Make a GET request using the fetch function
      fetch(apiUrl)
        .then(response => {
          // Check if the request was successful (status code 200)
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          // Parse the JSON data in the response
          return response.json();
        })
        .then(data => {
        // Convert temperature from Kelvin to Celsius
        const temperatureCelsius = data.list[0].main.temp - 273.15;
        const temperatureCelsius2 = data.list[8].main.temp - 273.15;
        // Send the data to the DOM
        // Fetch the current icon
        weatherIcon = data.list[0].weather[0].icon;
        weatherIcon2 = data.list[8].weather[0].icon;
        //Today
        document.getElementById("city").textContent = `${data.city.name}`;
        document.getElementById("temp").textContent = `${temperatureCelsius.toFixed(2)} °C`;
        document.getElementById("weather-icon").src = `http://openweathermap.org/img/w/${weatherIcon}.png`;
        // document.getElementById("description").textContent = `${data.list[0].weather[0].description}`;
        //Tomorrow
        document.getElementById("city2").textContent = `${data.city.name}`;
        document.getElementById("temp2").textContent = `${temperatureCelsius2.toFixed(2)} °C`;
        document.getElementById("weather-icon2").src = `http://openweathermap.org/img/w/${weatherIcon2}.png`;
        // document.getElementById("description2").textContent = `${data.list[8].weather[0].description}`;
          // console.log(data);
        })
        .catch(error => {
          // Handle errors
          console.error('Error fetching weather data:', error);
        });
  
    }, error => {
      console.error('Error getting the location of the user:', error);
    });
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
  