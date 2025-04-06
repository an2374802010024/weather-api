const express = require("express");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000;

app.get("/api/weather", async (req, res) => {
  const city = req.query.city || "Hanoi";
  const apiKey = "YOUR_OPENWEATHERMAP_API_KEY"; // 👈 thay bằng key thật
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`✅ Weather API is running on port ${port}`);
});
