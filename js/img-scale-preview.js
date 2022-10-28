import {
  imgScaleBiggerButton,
  imgScaleSmallerButton,
  imgScaleValue,
  imgPreviewFile,
} from './dom-elements.js';

const INITIAL_IMG_SCALE = 50;
const SCALE_STEP = 25;
const MIN_SCALE_IMG = 25;
const MAX_SCALE_IMG = 100;

const setInitialImgScale = (initialScale) => {
  imgScaleValue.value = `${initialScale}%`;
};

setInitialImgScale(INITIAL_IMG_SCALE);

const imgScalePercent = +imgScaleValue.value.slice(0, -1);

const makeImgSmaller = () => {
  imgScaleValue.value =
    imgScalePercent > MIN_SCALE_IMG
      ? `${imgScalePercent - SCALE_STEP}%`
      : imgScaleValue.value;

  imgPreviewFile.style.transform = 'scale(0.75)';
};

imgScaleSmallerButton.addEventListener('click', makeImgSmaller);

const makeImgBigger = () => {
  imgScaleValue.value =
    imgScalePercent < MAX_SCALE_IMG
      ? `${imgScalePercent + SCALE_STEP}%`
      : imgScaleValue.value;
};

imgScaleBiggerButton.addEventListener('click', makeImgBigger);
