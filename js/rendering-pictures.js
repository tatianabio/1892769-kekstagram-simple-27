import createPhotoDescriptionsArray from './data.js';
import { picturesContainer, templatePicture } from './dom-elements.js';

const renderPictures = () => {
  const picturesFragment = document.createDocumentFragment();

  const pictures = createPhotoDescriptionsArray();

  pictures.forEach(({ url, likes, comments }) => {
    const newPicture = templatePicture.cloneNode(true);
    newPicture.querySelector('.picture__img').src = url;
    newPicture.querySelector('.picture__likes').textContent = `${likes}`;
    newPicture.querySelector('.picture__comments').textContent = `${comments}`;
    picturesFragment.append(newPicture);
  });

  picturesContainer.append(picturesFragment);
};

export { renderPictures };
