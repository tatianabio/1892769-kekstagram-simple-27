import {
  clearElementTextContent,
  clearFieldValue,
  isEscapeKey,
} from './util.js';
import {
  commentTextArea,
  effectsList,
  errorModal,
  imgPreviewFile,
  imgScaleBiggerButton,
  imgScaleSmallerButton,
  noImgEffectInput,
  uploadCancelButton,
  uploadForm,
  uploadInput,
  uploadModal,
} from './dom-elements.js';
import {
  INITIAL_IMG_SCALE,
  onBiggerScaleButtonClick,
  onSmallerScaleButtonClick,
  setInitialImgScale,
} from './img-scale-preview.js';
import {
  clearImgEffect,
  clearImgFilter,
  onEffectsListChange,
  updateSlider,
} from './img-effects.js';
import { onSubmitButtonClick } from './submit-upload-form.js';

const removeCommentErrorMessage = () => {
  const text = document.querySelector('.text');
  const textError = text.querySelector('.text__error');
  if (textError) {
    clearElementTextContent(textError);
  }
};

export const clearUploadForm = () => {
  clearImgEffect();
  removeCommentErrorMessage();
  clearImgFilter();
  setInitialImgScale(INITIAL_IMG_SCALE);
  clearFieldValue(uploadInput);
  clearFieldValue(commentTextArea);
  noImgEffectInput.checked = true;
};

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt) && !errorModal()) {
    evt.preventDefault();
    closeUploadForm();
  }
};

function openUploadForm(event) {
  imgPreviewFile.src = URL.createObjectURL(event.target.files[0]);
  uploadModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  uploadForm.addEventListener('submit', onSubmitButtonClick);
  document.addEventListener('keydown', onModalEscKeydown);
  uploadCancelButton.addEventListener('click', closeUploadForm);
  imgScaleBiggerButton.addEventListener('click', onBiggerScaleButtonClick);
  imgScaleSmallerButton.addEventListener('click', onSmallerScaleButtonClick);
  effectsList.addEventListener('change', onEffectsListChange);
  setInitialImgScale(INITIAL_IMG_SCALE);
  updateSlider();
}

export function closeUploadForm() {
  clearUploadForm();
  uploadModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadForm.removeEventListener('submit', onSubmitButtonClick);
  document.removeEventListener('keydown', onModalEscKeydown);
  uploadCancelButton.removeEventListener('click', closeUploadForm);
  imgScaleBiggerButton.removeEventListener('click', onBiggerScaleButtonClick);
  imgScaleSmallerButton.removeEventListener('click', onSmallerScaleButtonClick);
  effectsList.removeEventListener('change', onEffectsListChange);
}

export const onUploadInputChange = () =>
  uploadInput.addEventListener('change', openUploadForm);
