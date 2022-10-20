import createPhotoDescriptionsArray from './data.js';
var picturesContainer = document.querySelector('.pictures');
var templatePicture = document.querySelector('#picture').content.querySelector('.picture');
var picturesFragment = document.createDocumentFragment();
var pictures = createPhotoDescriptionsArray();
pictures.forEach(function (_a) {
    var url = _a.url, likes = _a.likes, comments = _a.comments;
    var newPicture = templatePicture.cloneNode(true);
    newPicture.querySelector('.picture__img').src = url;
    newPicture.querySelector('.picture__likes').textContent = "".concat(likes);
    newPicture.querySelector('.picture__comments').textContent = "".concat(comments);
    picturesFragment.append(newPicture);
});
picturesContainer === null || picturesContainer === void 0 ? void 0 : picturesContainer.append(picturesFragment);
