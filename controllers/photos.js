// Пока что не используется (технический долг)
'use strict';

const cloudinary = require('cloudinary');
const Promise = require('bluebird');

cloudinary.config({
    cloud_name: 'duzgm6fug',
    api_key: '146231565855942',
    api_secret: 'Apvqh2ydlAyVp72wU4V2DiIEZa8'
});

exports.uploadPhoto = (req, data) => {
    if (!req.user) {
        return Promise.reject();
    }

    return cloudinary.uploader.upload(data);
};
