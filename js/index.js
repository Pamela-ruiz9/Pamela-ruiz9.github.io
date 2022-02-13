$(function () {
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $('.carousel').carousel({
        interval: 2000
    });
    $('#contacto').on('show.bs.modal', function (e) {
        console.log('el modal conntacto se esta mostranddo');
        $('#contactoBtn').removeClass('btn-outline-success');
        $('#contactoBtn').addClass('btn-primary');
        $('#contactoBtn').prop('disabled', true);
    });
    $('#contacto').on('hidden.bs.modal', function (e) {
        console.log('el modal conntacto se oculto');
        $('#contactoBtn').addClass('btn-outline-success');
        $('#contactoBtn').prop('disabled', false);
    });
});