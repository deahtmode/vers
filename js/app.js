$(function() {

    var newColumn = function(){
        var date = new Date();
        var random = Math.random()*149+150;
        if($('.demo_column').length > 7) {
            $('.demo_column:first').remove();
        };
        $('<div class="demo_column"><span>' +
            ( date.getHours() +':'+ date.getMinutes() +':'+ date.getSeconds()) +
            '</span><i>'+ ('79.8'+parseInt(random)) +'</i></div>')
            .css({'height' : parseInt(random) + 'px' })
            .appendTo($('.demo .inner')).slideDown(500);

    };
    newColumn();
    setInterval(newColumn, 2000);

});
