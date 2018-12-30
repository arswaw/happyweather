const CurrentWeatherTemplate = `
<div class="my-3 p-3 bg-white rounded shadow-sm">
    <p v-if="weather">
        In {{weather.name}} today the weather consists of {{weather.weather[0].description}}
        with a high of {{convertKelvinToFarenheit(weather.main.temp_max)}} 
        and a low of {{convertKelvinToFarenheit(weather.main.temp_min)}}.
        It is currently {{convertKelvinToFarenheit(weather.main.temp)}} degrees Farenheit.
     </p>
</div>
`

export { CurrentWeatherTemplate }