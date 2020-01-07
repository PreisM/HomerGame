var win = new Audio("img/woohoo.mp3");
var lost = new Audio("img/doh.mp3");

//Ruch homera
$(document).on('mousemove', function(e) {
    homer.css('left', e.pageX);
});

//Wypuszczenie donuta
function donut_down(donut) {
    donut_current_position = parseInt(donut.css('top'));
    donut.css('top', donut_current_position + speed);
}

//Niezłapanie donuta
function check_donut_hits_floor(donut) {
    if (collision(donut, floor)) {
        lost.play();
        lost.currentTime = 0;
        show_bulls_eye(donut);
        dectrement_life();
        return true;
    }
    return false;
}

//Powtórne wypuszczenie donuta
function set_donut_to_initial_position(donut) {
    donut.css('top', donut_initial_position);
}


//Pokazanie niezłapanego donuta
function show_bulls_eye(donut) {
    bigdonut_num = donut.attr('data-bigdonut');
    $('#bigdonut' + bigdonut_num).show();
    hide_bulls_eye(bigdonut_num);
}

///Zniknięcie niezłapanego donuta
function hide_bulls_eye(bigdonut_num) {
    setTimeout(function() {
        $('#bigdonut' + bigdonut_num).hide();
    }, 900);
}

//Zmniejszanie ilości żyć
function dectrement_life() {
    life--;
    life_span.text(life);
}

//Złapanie donuta nie powoduje straty życia
//Złapanie donuta tylko od góry
function check_donut_hits_homer(donut) {
    if (collision(donut, homer)) {
        donut_top = parseInt(donut.css('top'));
        if (donut_top < homer_top) {
            update_score();
            return true;
        }
    }
    return false;
}

//Złapanie donuta zwiększa ilość punktów
//Złapanie 10 donutow zwiększa prędkość
function update_score() {
    change_homer();
    score++;
    rechange_homer();
    if (score % 8 === 0 && speed <= max_speed) {
        speed++;
    }
    score_span.text(score);
    score_1.text(score);
}

//Zmiana Homera
function change_homer() {
    win.play();
    $('#homer').css({
        'background': 'url("img/homer2.png")',
        'background-size': 'cover',
        'width': '100px'
    })
};

//Powrót Homera
function rechange_homer() {
    setTimeout(function() {
        $('#homer').css({
            'background': 'url("img/homer1.png")',
            'background-size': 'cover'
        })
    }, 250)

}

//Koniec gry
function stop_the_game() {
    cancelAnimationFrame(anim_id);
    restart.slideDown();
}
//Restart gry
restart.click(function() {
    location.reload();
})