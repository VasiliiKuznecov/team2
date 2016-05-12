module.exports.uploadStage = function (element, questId, order) {
    var fileInput = element.find('.add-stage-form__add-meta-media_input-img');
    var nameInput = element.find('.add-stage-form__add-meta-text_add-name');
    var descriptionInput = element.find('.add-stage-form__add-meta-text_add-description');
    var latitudeInput = element.find('.add-stage-form__add-meta-media_add-latitude');
    var longitudeInput = element.find('.add-stage-form__add-meta-media_add-longtitude');

    var reader = new FileReader();

    reader.readAsDataURL(fileInput.files[0]);
    reader.onload = function (e) {
        var data = {
            file: reader.result,
            name: nameInput.val(),
            description: descriptionInput.val(),
            latitude: latitudeInput.val(),
            longtitude: longitudeInput.val(),
            questId: questId,
            order: order
        };

        $.ajax({
            url: '/stages',
            type: 'POST',
            data: data
        }).done(function (result) {
            //console.log(result);
        }).fail(function (err) {
            //console.log(err);
        });
    };
}
