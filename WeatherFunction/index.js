const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Cho phép frontend (Netlify) gọi API này
app.use(cors());

app.get("/api/weather", async (req, res) => {
  const city = req.query.city;

  if (!city || city.trim() === "") {
    return res.status(400).json({ error: "Tên thành phố không hợp lệ." });
  }

  const apiKey = process.env.OPENWEATHER_API_KEY || '8bcd912b7d2ef218f820d7640376befa';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Không lấy được dữ liệu từ OpenWeather." });
  }
});

app.listen(port, () => {
  console.log(`✅ Weather API is running on port ${port}`);
});
