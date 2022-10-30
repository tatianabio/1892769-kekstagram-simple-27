import { imgPreviewFile } from './dom-elements.js';

// const filterEffects = ['chrome', 'sepia', 'marvin', 'phobos', 'heat'];

const effectsList = document.querySelector('.effects');

const clearImgEffect = () =>
  imgPreviewFile.classList.forEach(
    (item) =>
      item.includes('effects__preview--') &&
      imgPreviewFile.classList.remove(item)
  );

const changeImgEffect = () => {
  const onEffectsListChange = () => {
    const checkedInput = effectsList.querySelector('input[type=radio]:checked');

    clearImgEffect();

    if (checkedInput.value !== 'none') {
      imgPreviewFile.classList.add(`effects__preview--${checkedInput.value}`);
    }
  };

  effectsList.addEventListener('change', onEffectsListChange);
};

export { changeImgEffect, clearImgEffect };
