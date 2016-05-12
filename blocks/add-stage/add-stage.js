function loadPhoto(element) {
    var reader = new FileReader();

    reader.readAsDataURL(element.files[0]);
    reader.onload = function(e) {
        var data = {
            data: reader.result
        };

        $.ajax({
            url: '/photos/upload',
            type: 'POST',
            data: data
        }).done(function (result) {
            console.log(result);
        }).fail(function (err) {
            console.log(err);
        });
    }
}
