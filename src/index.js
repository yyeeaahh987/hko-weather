import 'dotenv/config';
import cron from 'node-cron';
import weatherService from './services/weatherService.js';

async function fetchAndAnalyze() {
  try {
    const analysis = await weatherService.getTomorrowWeatherForecast();
    console.log(`[${new Date().toLocaleString('zh-HK')}] 明日天氣預測:`, analysis);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// 每日早上8點執行
cron.schedule('0 8 * * *', () => {
  console.log('開始獲取明日天氣預測...');
  fetchAndAnalyze();
});

console.log('天氣預測服務已啟動，每日08:00自動執行');

// 立即執行一次（測試用）
fetchAndAnalyze();


