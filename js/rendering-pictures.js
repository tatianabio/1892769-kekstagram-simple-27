var _a;
import createPhotoDescriptionsArray from './data.js';
var picturesContainer = document.querySelector('.pictures');
var templatePicture = (_a = document
    .querySelector('#picture')) === null || _a === void 0 ? void 0 : _a.content.querySelector('.picture');
var picturesFragment = document.createDocumentFragment();
var pictures = createPhotoDescriptionsArray();
var renderPictures = function () {
    pictures.forEach(function (_a) {
        var url = _a.url, likes = _a.likes, comments = _a.comments;
        var newPicture = templatePicture === null || templatePicture === void 0 ? void 0 : templatePicture.cloneNode(true);
        var imgNode = newPicture.querySelector('.picture__img');
        imgNode && (imgNode.src = url);
        var likesNode = newPicture.querySelector('.picture__likes');
        likesNode && (likesNode.textContent = "".concat(likes));
        var commentsNode = newPicture.querySelector('.picture__comments');
        commentsNode && (commentsNode.textContent = "".concat(comments));
        picturesFragment.append(newPicture);
    });
    picturesContainer === null || picturesContainer === void 0 ? void 0 : picturesContainer.append(picturesFragment);
};
export { renderPictures };
