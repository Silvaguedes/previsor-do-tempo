
const apiKey = '9568e0caf923ab653d9592b238048c5b';


async function getWeather() {
    const city = document.getElementById('city-input').value;

    if (!city) {
        alert("Por favor, insira uma cidade.");
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt`);
        const data = await response.json();

        if (data.cod === 200) {
            const description = data.weather[0].description;
            const temp = data.main.temp;
            const feelsLike = data.main.feels_like;
            const humidity = data.main.humidity;

            document.getElementById('weather-result').innerHTML = `
        <p><strong>Descrição:</strong> ${description}</p>
        <p><strong>Temperatura:</strong> ${temp}°C</p>
        <p><strong>Sensação térmica:</strong> ${feelsLike}°C</p>
        <p><strong>Umidade:</strong> ${humidity}%</p>
      `;
        } else {
            document.getElementById('weather-result').innerHTML = `<p>Cidade não encontrada.</p>`;
        }
    } catch (error) {
        document.getElementById('weather-result').innerHTML = `<p>Erro ao obter os dados.</p>`;
    }
}
