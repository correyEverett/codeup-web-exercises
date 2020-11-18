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




        function buildHTML (cards) {
            let cardsHTML = '';

            cards.forEach(function(card) {

                cardsHTML += "<div>" + card.dt + "</div>";

                cardsHTML += "<li>" + card.temp +"</li>";
                cardsHTML += "<li>";
                cardsHTML += "<span>" + card.description +"</span>";
                cardsHTML += "<br>";
                cardsHTML += "<br>";
                cardsHTML += "<span>" + card.humidity +"</span>";
                cardsHTML += "</li>";
                cardsHTML += "<li>" + card.winds +"</li>";
            });

            $('.card-header').html(cardsHTML)
            $('.list-group-item').html(cardsHTML)
        }

        // $('.card-header').click(updateCards);
    });
