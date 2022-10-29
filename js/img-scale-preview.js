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

const changeImgScale = () => {
  const onImgScaleButtonClick = (step) => {
    const imgScalePercent = +imgScaleValue.value.slice(0, -1);

    if (
      (imgScalePercent === MAX_SCALE_IMG && step > 0) ||
      (imgScalePercent === MIN_SCALE_IMG && step < 0)
    ) {
      return;
    }

    const newImgScale = imgScalePercent + step;

    imgScaleValue.value = `${newImgScale}%`;

    imgPreviewFile.style.transform = `scale(${newImgScale / 100})`;
  };

  imgScaleBiggerButton.addEventListener('click', () =>
    onImgScaleButtonClick(SCALE_STEP)
  );
  imgScaleSmallerButton.addEventListener('click', () =>
    onImgScaleButtonClick(-SCALE_STEP)
  );
};

export { setInitialImgScale, INITIAL_IMG_SCALE, changeImgScale };
