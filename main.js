const data = new Date;
//const hora = data.getHours();
const hora = 5;

const image = $('#image');


if (hora >= 6 && hora < 11) {
    image.attr('src', 'img/morning_icon.jpg');
    image.attr('alt', 'Morning Icon');
} else if ( hora >= 11 && hora < 13 ) {
    image.attr('src', 'img/lunch_icon.jpg');
    image.attr('alt', 'Lunch Icon');
} else if ( hora >= 13 && hora <= 16 ) {
    image.attr('src', 'img/evening_icon.jpg');
    image.attr('alt', 'Evening Icon');
} else if ( hora > 16 && hora <= 18 ) {
    image.attr('src', 'img/sunset_icon.jpg');
    image.attr('alt', 'Sunset Icon');
} else if ( hora > 18 || hora <= 4 ) {
    image.attr('src', 'img/night_icon.jpg');
    image.attr('alt', 'Night Icon');
} else if ( hora > 4 && hora < 6 ) {
    image.attr('src', 'img/dawn_icon.jpg');
    image.attr('alt', 'Daw Icon');
}