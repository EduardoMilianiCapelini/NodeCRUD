$(document).ready(function () {
    $('.delete-recipe').on('click', function () {
        var id = $(this).data('id');
        var url = '/delete/' + id;
        if (confirm('Deletar alerta?')) {
            $.ajax({
                url: url,
                type: 'DELETE',
                success: function (result) {
                    console.log('Deletando...');
                    window.location.href = '/';
                },
                error: function (err) {
                    console.log(err);
                }
            });
        }
    });
});