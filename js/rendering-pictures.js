import { picturesContainer, templatePicture } from './dom-elements.js';
import { getData } from './api.js';

export const renderPictures = async () => {
  const picturesFragment = document.createDocumentFragment();

  const pictures = await getData();

  pictures.forEach(({ url, likes, comments }) => {
    const newPicture = templatePicture.cloneNode(true);
    newPicture.querySelector('.picture__img').src = url;
    newPicture.querySelector('.picture__likes').textContent = `${likes}`;
    newPicture.querySelector('.picture__comments').textContent = `${comments}`;
    picturesFragment.append(newPicture);
  });

  picturesContainer.append(picturesFragment);
};
