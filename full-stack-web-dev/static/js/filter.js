$.expr[':'].containsCaseInsensitive = function (a, i, m) {
    return $(a).text().toUpperCase()
            .indexOf(m[3].toUpperCase()) >= 0;
};

$('#search').on('keyup', function () {
    var search = $(this).val();
    var albums = $('.album');
    var albumsContainer = $('#albums-container');
    var results = $('.album:containsCaseInsensitive(' + search + ')');


    albums.hide().addClass('hidden');
    results.show().removeClass('hidden');

    if (albumsContainer.find('.hidden').length === albumsContainer.find('.album').length) {
        albums.hide();
        $('#no-albums').show();
    } else {
        $('#no-albums').hide();
    }
});

