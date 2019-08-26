const data = new Date;
//const hora = data.getHours();
const hora = 5;

const condition = hora === 1 ? `é ${hora} hora`:`são ${hora} horas`;

const body = $('body');
const title = $('title');
const area = $('#area');
const saudacao = $('#salutation');
const hour = $('#hour');
const image = $('#image');


if (hora >= 6 && hora < 11) {
    title.html('Morning');
    saudacao.html('Bom Dia!');
    hour.html(`Agora são ${hora} horas`);

    body.addClass('morningBody');
    area.addClass('morningArea');

    image.attr('src', 'img/icon/morning_icon.jpg');
    image.attr('alt', 'Morning Icon');
} else if ( hora >= 11 && hora < 13 ) {
    title.html('Lunch');
    saudacao.html('Bom Dia!');
    hour.html(`Agora são ${hora} horas`);
    
    body.addClass('lunchBody');
    area.addClass('lunchArea');

    image.attr('src', 'img/icon/lunch_icon.jpg');
    image.attr('alt', 'Lunch Icon');
} else if ( hora >= 13 && hora <= 16 ) {
    title.html('Evening');
    saudacao.html('Boa Tarde!');
    hour.html(`Agora são ${hora} horas`);

    body.addClass('eveningBody');
    area.addClass('eveningArea');

    image.attr('src', 'img/icon/evening_icon.jpg');
    image.attr('alt', 'Evening Icon');
} else if ( hora > 16 && hora <= 18 ) {
    title.html('Sunset');
    saudacao.html('Boa Tarde!');
    hour.html(`Agora são ${hora} horas`);
    
    body.addClass('sunsetBody');
    area.addClass('sunsetArea');

    image.attr('src', 'img/icon/sunset_icon.jpg');
    image.attr('alt', 'Sunset Icon');
} else if ( hora > 18 || hora <= 4 ) {
    title.html('Night');
    saudacao.html('Boa Noite!');
    hour.html(`Agora ${condition}`);

    body.addClass('nightBody');
    area.addClass('nightArea');

    image.attr('src', 'img/icon/night_icon.jpg');
    image.attr('alt', 'Night Icon');
} else if ( hora > 4 && hora < 6 ) {
    title.html('Daw');
    saudacao.html('Boa Noite!');
    hour.html(`Agora são ${hora} horas`);

    body.addClass('dawnBody');
    area.addClass('dawnArea');

    image.attr('src', 'img/icon/dawn_icon.jpg');
    image.attr('alt', 'Daw Icon');
}