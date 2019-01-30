const CurrentWeatherTemplate = /*html*/`
<div class="box home-grid-item">
    <p v-if="weather">
        In {{weather.name}} today the weather consists of {{weather.weather[0].description}}
        with a high of {{convertKelvinToFarenheit(weather.main.temp_max)}} 
        and a low of {{convertKelvinToFarenheit(weather.main.temp_min)}}.
        <p>It is currently {{convertKelvinToFarenheit(weather.main.temp)}} degrees Farenheit.</p>
       
     </p>
</div>
`

export { CurrentWeatherTemplate }