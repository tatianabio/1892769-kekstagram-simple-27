import {
  imgScaleBiggerButton,
  imgScaleSmallerButton,
  imgScaleValue,
  imgPreviewFile,
} from './dom-elements.js';

const INITIAL_IMG_SCALE = 100;
const SCALE_STEP = 25;
const MIN_SCALE_IMG = 25;
const MAX_SCALE_IMG = 100;

const setInitialImgScale = (initialScale) => {
  imgScaleValue.value = `${initialScale}%`;
  imgPreviewFile.style.transform = `scale(${initialScale / 100})`;
};

const makeImgSmaller = () => {
  const imgScalePercent = +imgScaleValue.value.slice(0, -1);

  const newImgScale =
    imgScalePercent > MIN_SCALE_IMG
      ? imgScalePercent - SCALE_STEP
      : imgScalePercent;

  imgScaleValue.value = `${newImgScale}%`;

  imgPreviewFile.style.transform = `scale(${newImgScale / 100})`;
};

const makeImgBigger = () => {
  const imgScalePercent = +imgScaleValue.value.slice(0, -1);

  const newImgScale =
    imgScalePercent < MAX_SCALE_IMG
      ? imgScalePercent + SCALE_STEP
      : imgScalePercent;

  imgScaleValue.value = `${newImgScale}%`;

  imgPreviewFile.style.transform = `scale(${newImgScale / 100})`;
};

imgScaleBiggerButton.addEventListener('click', makeImgBigger);
imgScaleSmallerButton.addEventListener('click', makeImgSmaller);

export { setInitialImgScale, INITIAL_IMG_SCALE };
