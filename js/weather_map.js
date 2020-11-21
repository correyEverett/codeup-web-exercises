    $(document).ready(function () {

        'use strict';

        function updateCards() {

            $.get('https://api.openweathermap.org/data/2.5/onecall', {
                appid: weatherMapAPIKey,
                lon: -98.49,
                lat: 29.42,
                exclude: 'minutely,hourly,current,alerts',
                units: 'imperial'
            }).done(function (data) {
                //build 'for loop' to limit data to 5 days instead of 8
                buildHTML(data);
            });

            $.get('https://api.openweathermap.org/data/2.5/onecall', {
                appid: weatherMapAPIKey,
                lon: -98.49,
                lat: 29.42,
                exclude: 'minutely,hourly,current,alerts',
                units: 'imperial'
            }).fail(function (data, status, error) {

            });

        }




        function buildHTML (weatherInfo) {
            console.log(weatherInfo.daily);
            let daysHTML = '';

            weatherInfo.daily.forEach(function(day) {
                let dateTime = day.dt * 1000;
                let myDate = new Date(dateTime);

                daysHTML += `<div class="card" style="width: 18rem;">
                                 <div class="card-header">
                                    <span>${myDate}</span>
                                 </div>
                                 <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><span>Temp: ${day.temp.day}</span></li>
                                    <li class="list-group-item">
                                        <span>Description: ${day.weather[0].main}</span>
                                        <br>
                                        <br>
                                        <span>Humidity: ${day.humidity}</span>
                                    </li>
                                    <li class="list-group-item"><span>Winds: ${day.wind_speed}</span></li>
                                </ul>
                            </div>`

                $('.card').each(function (index) {
                    if (index > 4) {
                        console.log(index);
                        $(this).hide();
                    }
                });

            });
            $('#main').html(daysHTML)
        }
        updateCards();










    });

