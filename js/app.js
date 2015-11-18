$(function() {
    var startPoint;
    var newColumn = function(direction){
        var date = new Date();

        if(!direction) {
            var random = Math.random()*149+150;
        } else if(direction == 'up') {
            if(!startPoint){
                startPoint = Number($('.demo_column i').last().text());
            }

            startPoint += Math.random()*35+2;

            var random = startPoint;

        } else if(direction == 'down') {

                if(!startPoint){
                    startPoint = Number($('.demo_column i').last().text());
                }

                startPoint -= Math.random()*35+2;

                var random = startPoint;


        }


        if($('.demo_column').length > 7) {
            $('.demo_column:first').remove();
        };
        var vector = (Number('79.8'+ parseInt(random)) > Number($('.demo_column i').last().text())) ? 'vector_up' : 'vector_down';

        $('<div class="demo_column"><span>' +
            ( date.getHours() +':'+ date.getMinutes() +':'+ date.getSeconds()) +
            '</span><i class="'+ vector +'">'+ ('79.8'+parseInt(random)) +'</i></div>')
            .css({
                'height' : parseInt(random) + 'px',
                'width' : '12.5%'
            })
            .appendTo($('.demo .inner')).slideDown(500);

    };
    newColumn();
    var standartFactor = setInterval(newColumn, 2000);


    $('.link_green').on('click', function(e) {
        clearInterval(standartFactor);

        $('.link_red').attr('disabled', 'disabled');
        $('.link_green').attr('disabled', 'disabled');

        e.preventDefault();
        newColumn('up');
        setTimeout(function(argument) {
            newColumn('up');
        }, 2000);
        setTimeout(function(argument) {
            newColumn('up');
        }, 4000);
        setTimeout(function(argument) {
            newColumn('up');
        }, 6000);
        setTimeout(function(argument) {
            newColumn('up');
        }, 8000);
        setTimeout(function(argument) {
            newColumn('up');
        }, 10000);

        setTimeout(showPopup, 13000);
    });

    function showPopup() {
        $('.popup').fadeIn();
    }


    $('.link_red').on('click', function(e) {
        clearInterval(standartFactor);

        $('.link_red').attr('disabled', 'disabled');
        $('.link_green').attr('disabled', 'disabled');
        e.preventDefault();
        newColumn('down');
        setTimeout(function(argument) {
            newColumn('down');
        }, 2000);
        setTimeout(function(argument) {
            newColumn('down');
        }, 4000);
        setTimeout(function(argument) {
            newColumn('down');
        }, 6000);
        setTimeout(function(argument) {
            newColumn('down');
        }, 8000);
        setTimeout(function(argument) {
            newColumn('down');
        }, 10000);
        setTimeout(showPopup, 13000);
    });

});
