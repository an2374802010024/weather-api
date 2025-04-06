const axios = require('axios');

module.exports = async function (context, req) {
    const city = req.query.city || 'Hanoi';
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // 👈 thay bằng key thật
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(url);
        context.res = {
            status: 200,
            body: response.data
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: { error: error.message }
        };
    }
};
