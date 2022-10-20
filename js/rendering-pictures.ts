import createPhotoDescriptionsArray, { IPhotoItem } from './data.js';

const picturesContainer = document.querySelector<HTMLDivElement>('.pictures');
const templatePicture = document
  .querySelector<HTMLTemplateElement>('#picture')
  ?.content.querySelector<HTMLLinkElement>('.picture');

const picturesFragment: DocumentFragment = document.createDocumentFragment();

const pictures = createPhotoDescriptionsArray();

const renderPictures = (): void => {
  pictures.forEach(({ url, likes, comments }: IPhotoItem) => {
    const newPicture = templatePicture?.cloneNode(true) as HTMLLinkElement;

    const imgNode = newPicture.querySelector<HTMLImageElement>('.picture__img');
    imgNode && (imgNode.src = url);

    const likesNode =
      newPicture.querySelector<HTMLSpanElement>('.picture__likes');
    likesNode && (likesNode.textContent = `${likes}`);

    const commentsNode =
      newPicture.querySelector<HTMLSpanElement>('.picture__comments');
    commentsNode && (commentsNode.textContent = `${comments}`);

    picturesFragment.append(newPicture);
  });

  picturesContainer?.append(picturesFragment);
};

export { renderPictures };
