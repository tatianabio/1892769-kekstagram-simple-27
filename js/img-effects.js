import {
  effectIntensityInput,
  imgPreviewFile,
  sliderEffectIntensity,
  sliderEffectWrapper,
} from './dom-elements.js';

const filterEffects = {
  chrome: { min: 0, max: 1, step: 0.1, filter: 'grayscale', units: '' },
  sepia: { min: 0, max: 1, step: 0.1, filter: 'sepia', units: '' },
  marvin: { min: 0, max: 100, step: 1, filter: 'invert', units: '%' },
  phobos: { min: 0, max: 3, step: 0.1, filter: 'blur', units: 'px' },
  heat: { min: 1, max: 3, step: 0.1, filter: 'brightness', units: '' },
};

const showSliderEffect = () => {
  sliderEffectWrapper.style.visibility = 'visible';
  sliderEffectWrapper.removeAttribute('aria-hidden');
};

const hideSliderEffect = () => {
  sliderEffectWrapper.style.visibility = 'hidden';
  sliderEffectWrapper.setAttribute('aria-hidden', 'true');
};

const effectsList = document.querySelector('.effects');
////////////////////////////////////////////////////////////////////////////////////
const clearImgEffect = () =>
  imgPreviewFile.classList.forEach(
    (item) =>
      item.includes('effects__preview--') &&
      imgPreviewFile.classList.remove(item)
  );
////////////////////////////////////////////////////////////////////////////////////

const updateSlider = (effect) => {
  if (!filterEffects[effect]) {
    return;
  }

  const { min, max, step } = filterEffects[effect];

  sliderEffectIntensity.noUiSlider.updateOptions({
    range: {
      min,
      max,
    },
    start: max,
    step,
  });
};
////////////////////////////////////////////////////////////////////////////////////
const clearImgFilter = () => {
  imgPreviewFile.style.filter = 'inherit';
  hideSliderEffect();
};

const changeImgEffect = () => {
  const onEffectsListChange = () => {
    const { value: effect } = effectsList.querySelector(
      'input[type=radio]:checked'
    );

    sliderEffectIntensity.noUiSlider.off('update');
    clearImgEffect();

    if (effect !== 'none') {
      imgPreviewFile.classList.add(`effects__preview--${effect}`);
      showSliderEffect();
      updateSlider(effect);

      sliderEffectIntensity.noUiSlider.on('update', () => {
        effectIntensityInput.value = sliderEffectIntensity.noUiSlider.get();
        const { filter, units } = filterEffects[effect];
        imgPreviewFile.style.filter = `${filter}(${effectIntensityInput.value}${units})`;
      });
    } else {
      clearImgFilter();
    }
  };

  effectsList.addEventListener('change', onEffectsListChange);
};
////////////////////////////////////////////////////////////////////////////////////
const createSlider = () => {
  noUiSlider.create(sliderEffectIntensity, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  });
  hideSliderEffect();
};
////////////////////////////////////////////////////////////////////////////////////

export {
  changeImgEffect,
  clearImgEffect,
  clearImgFilter,
  createSlider,
  updateSlider,
};
