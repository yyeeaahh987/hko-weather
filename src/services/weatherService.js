import apiClient from './apiClient.js';
import dataAnalyzer from '../utils/dataAnalyzer.js';

async function getTomorrowWeatherForecast() {
  const forecast = await apiClient.fetchTomorrowForecast();
  const analysis = dataAnalyzer.analyzeForecast(forecast);
  
  return analysis;
}

export default { getTomorrowWeatherForecast };
