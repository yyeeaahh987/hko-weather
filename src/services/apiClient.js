const fetch = require('node-fetch');

async function fetchTomorrowForecast() {
  const url = `${process.env.API_BASE_URL}/weather.php?dataType=fnd&lang=tc`;
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return await response.json();
}

module.exports = { fetchTomorrowForecast };


