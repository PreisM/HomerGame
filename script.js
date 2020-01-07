$(function() {

    the_game = function() {
        if (check_donut_hits_floor(donut1) || check_donut_hits_homer(donut1)) {
            set_donut_to_initial_position(donut1);
        } else {
            donut_down(donut1);
        }

        if (check_donut_hits_floor(donut2) || check_donut_hits_homer(donut2)) {
            set_donut_to_initial_position(donut2);
        } else {
            donut_down(donut2);
        }

        if (check_donut_hits_floor(donut3) || check_donut_hits_homer(donut3)) {
            set_donut_to_initial_position(donut3);
        } else {
            donut_down(donut3);
        }


        if (life > 0) {
            anim_id = requestAnimationFrame(the_game);
        } else {
            stop_the_game();
        }

    };
    anim_id = requestAnimationFrame(the_game);

});