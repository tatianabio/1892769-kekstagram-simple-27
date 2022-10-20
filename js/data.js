import { getRandomNumber } from './util.js';
var PHOTOS_COUNT = 25;
var LIKES_MIN_COUNT = 15;
var LIKES_MAX_COUNT = 200;
var COMMENTS_MIN_COUNT = 0;
var COMMENTS_MAX_COUNT = 200;
var createPhotoDescriptionItem = function (_, index) { return ({
    description: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438: ".concat(getRandomNumber(0, PHOTOS_COUNT)),
    likes: getRandomNumber(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
    comments: getRandomNumber(COMMENTS_MIN_COUNT, COMMENTS_MAX_COUNT),
    id: index + 1,
    url: "photos/".concat(index + 1, ".jpg"),
}); };
var createPhotoDescriptionsArray = function () {
    return Array.from({ length: PHOTOS_COUNT }, createPhotoDescriptionItem);
};
export default createPhotoDescriptionsArray;
