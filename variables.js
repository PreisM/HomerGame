var homer = $('#homer'),
    container = $('#container'),
    bart = $('.bart'),
    donuts = $('.donut'),
    donut1 = $('#donut1'),
    donut2 = $('#donut2'),
    donut3 = $('#donut3'),
    restart = $('#restart'),
    score_span = $('#score'),
    score_1 = $('#score_1'),
    life_span = $('#life'),
    floor = $('#floor'),
    homer_height = homer.height(),
    container_height = container.height(),
    donut_height = donuts.height(),
    donut_initial_position = parseInt(donuts.css('top')),
    score = 0,
    life = 7,
    speed = 2,
    max_speed = 13,
    counter = 0,
    score_updated = false,
    the_game = 0,
    anim_id = 0,
    donut_current_position = 0,
    donut_top = 0,
    homer_top = container_height - homer_height,
    bigdonut_num = 0;
life_span.text(life);