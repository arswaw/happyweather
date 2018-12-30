import { CurrentWeatherTemplate } from '../../templates/details/current-weather-template.js'

const CurrentWeather = {
    template: CurrentWeatherTemplate,
    mounted: function () {
        this.getWeather()
    },
    data: function () {
        return {
            status: "",
            weather: {
                "coord": {
                  "lon": -86.16,
                  "lat": 41.66
                },
                "weather": [
                  {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                  }
                ],
                "base": "stations",
                "main": {
                  "temp": 0,
                  "pressure": 1021,
                  "humidity": 88,
                  "temp_min": 0,
                  "temp_max": 0
                },
                "visibility": 16093,
                "wind": {
                  "speed": 5.1,
                  "deg": 220,
                  "gust": 9.3
                },
                "clouds": {
                  "all": 90
                },
                "dt": 1546146960,
                "sys": {
                  "type": 1,
                  "id": 5786,
                  "message": 0.0047,
                  "country": "US",
                  "sunrise": 1546175483,
                  "sunset": 1546208606
                },
                "id": 420014927,
                "name": "South Bend",
                "cod": 200
              }
        }
    },
    methods: {
        getWeather: async function () {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=46545&APPID=2f69a3fc1f1d2658ba2a8143a779f7e5`)

                console.info("response", response)

                if (response.status !== 200) {
                    this.status = "There was an error retrieving weather data."
                    setTimeout(() => {
                        this.status = ""
                    }, 3000)
                }

                this.weather = await response.data
                console.info("weather from current-weather.js", this.weather)
                this.status = "Refreshed!"
                setTimeout(() => {
                    this.status = ""
                }, 3000)
            }
            catch (err) {
                console.error("There was a problem retrieving weather data", err)
            }

        },
        convertKelvinToFarenheit(initialTemp) {
            return Math.floor((initialTemp - 273.15) * 9/5 + 32)
        }
    }
}

export { CurrentWeather }