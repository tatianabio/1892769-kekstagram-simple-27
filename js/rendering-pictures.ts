import createPhotoDescriptionsArray, { IPhotoItem } from './data.js';

const picturesContainer: HTMLDivElement | null =
  document.querySelector('.pictures');
const templatePicture = (
  document.querySelector('#picture') as HTMLTemplateElement
).content.querySelector('.picture') as HTMLLinkElement;

const picturesFragment: DocumentFragment = document.createDocumentFragment();

const pictures = createPhotoDescriptionsArray();

pictures.forEach(({ url, likes, comments }: IPhotoItem) => {
  const newPicture = templatePicture.cloneNode(true) as HTMLLinkElement;

  (newPicture.querySelector('.picture__img') as HTMLImageElement).src = url;
  (
    newPicture.querySelector('.picture__likes') as HTMLSpanElement
  ).textContent = `${likes}`;
  (
    newPicture.querySelector('.picture__comments') as HTMLSpanElement
  ).textContent = `${comments}`;
  picturesFragment.append(newPicture);
});

picturesContainer?.append(picturesFragment);

export {};
