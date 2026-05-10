function analyzeForecast(data) {
  const tomorrow = data.weatherForecast[0];
  
  return {
    日期: tomorrow.forecastDate,
    星期: tomorrow.week,
    最高溫度: `${tomorrow.forecastMaxtemp.value}°C`,
    最低溫度: `${tomorrow.forecastMintemp.value}°C`,
    相對濕度: `${tomorrow.forecastMaxrh.value}% - ${tomorrow.forecastMinrh.value}%`,
    天氣: tomorrow.forecastWeather
  };
}

module.exports = { analyzeForecast };
