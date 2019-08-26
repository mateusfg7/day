const data = new Date;
//const hora = data.getHours();
const hora = 1;

const condition = hora === 1 ? `é ${hora} hora`:`são ${hora} horas`;

const body = $('body');
const saudacao = $('#salutation');
const hour = $('#hour');
const image = $('#image');


if (hora >= 6 && hora < 11) {
    saudacao.html('Bom Dia!');
    hour.html(`Agora são ${hora} horas`)

    body.addClass('morningBody');

    image.attr('src', 'img/icon/morning_icon.jpg');
    image.attr('alt', 'Morning Icon');
} else if ( hora >= 11 && hora < 13 ) {
    saudacao.html('Bom Dia!');
    hour.html(`Agora são ${hora} horas`)
    
    body.addClass('lunchBody');

    image.attr('src', 'img/icon/lunch_icon.jpg');
    image.attr('alt', 'Lunch Icon');
} else if ( hora >= 13 && hora <= 16 ) {
    saudacao.html('Boa Tarde!');
    hour.html(`Agora são ${hora} horas`)

    body.addClass('eveningBody');

    image.attr('src', 'img/icon/evening_icon.jpg');
    image.attr('alt', 'Evening Icon');
} else if ( hora > 16 && hora <= 18 ) {
    saudacao.html('Boa Tarde!');
    hour.html(`Agora são ${hora} horas`)
    
    body.addClass('sunsetBody');

    image.attr('src', 'img/icon/sunset_icon.jpg');
    image.attr('alt', 'Sunset Icon');
} else if ( hora > 18 || hora <= 4 ) {
    saudacao.html('Boa Noite!');
    hour.html(`Agora ${condition}`);

    body.addClass('nightBody');

    image.attr('src', 'img/icon/night_icon.jpg');
    image.attr('alt', 'Night Icon');
} else if ( hora > 4 && hora < 6 ) {
    saudacao.html('Boa Noite!');
    hour.html(`Agora são ${hora} horas`)

    body.addClass('dawnBody');

    image.attr('src', 'img/icon/dawn_icon.jpg');
    image.attr('alt', 'Daw Icon');
}