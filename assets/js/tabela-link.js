$(document).ready(function () {
    $('table td, table th').click(function () {
        window.location = $(this).data('url');
        returnfalse;
    });
});