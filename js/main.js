$(document).ready(function () {
    $('li').click(function () {
        $(this).parent().toggleClass("selected");
        $(this).toggleClass("selected");
        $('header').toggleClass("minimized");
        $('.gallery ul:not(.selected)').toggleClass("minimized");
    });

    $(document).on('click', function (event) {
        if (!$(event.target).closest('li.selected').length) {
            $('header').removeClass("minimized");
            $('ul').removeClass("selected").removeClass("minimized");
            $('li').removeClass("selected");
        }
    });
});