$(function () {
    $('#desp').hide();
    $('#devp').hide();
    $('#prop').hide();

    //Show paragraph content
    $('.des').on('click', function () {
        $('.des').slideUp('slow');
        $('#desp').show(500);

    });
    $('.dev').on('click', function () {
        $('.dev').slideUp('slow');
        $('#devp').show(500);
    });
    $('.pro').on('click', function () {
        $('.pro').slideUp('slow');
        $('#prop').show(500);
    })

    //Hide paragraph content
    $('#desp').on('click', function () {
        $('.des').slideDown();
        $('#desp').hide(500);
    });
    $('#devp').on('click', function () {
        $('.dev').slideDown();
        $('#devp').hide(500);
    });
    $('#prop').on('click', function () {
        $('.pro').slideDown();
        $('#prop').hide(500);
    })

    //Overlay images
});