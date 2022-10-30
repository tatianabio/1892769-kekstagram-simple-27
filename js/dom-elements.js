//Галерея изображений
const picturesContainer = document.querySelector('.pictures');
const templatePicture = document
  .querySelector('#picture')
  .content.querySelector('.picture');

//Форма редактирования фотографии
const uploadModal = document.querySelector('.img-upload__overlay');
const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = document.querySelector('#upload-file');
const commentTextArea = uploadModal.querySelector('[name="description"]');
const uploadCancelButton = document.querySelector('#upload-cancel');
const imgPreview = uploadForm.querySelector('.img-upload__preview');
const imgPreviewFile = imgPreview.querySelector('img');
const sliderEffectWrapper = uploadForm.querySelector('.effect-level');
const sliderEffectIntensity = uploadForm.querySelector('.effect-level__slider');
const effectIntensityInput = uploadForm.querySelector('.effect-level__value');

//Изменение масштаба превью изображения в форме редактирования
const imgScale = document.querySelector('.scale');
const imgScaleBiggerButton = imgScale.querySelector('.scale__control--bigger');
const imgScaleSmallerButton = imgScale.querySelector(
  '.scale__control--smaller'
);
const imgScaleValue = imgScale.querySelector('.scale__control--value');

export {
  picturesContainer,
  templatePicture,
  uploadModal,
  uploadForm,
  uploadInput,
  commentTextArea,
  uploadCancelButton,
  imgScale,
  imgScaleBiggerButton,
  imgScaleSmallerButton,
  imgScaleValue,
  imgPreviewFile,
  sliderEffectIntensity,
  effectIntensityInput,
  sliderEffectWrapper,
};
