import {
  clearFieldValue,
  clearElementTextContent,
  isEscapeKey,
} from './util.js';
import {
  uploadModal,
  uploadInput,
  commentTextArea,
  uploadCancelButton,
} from './dom-elements.js';
import { INITIAL_IMG_SCALE, setInitialImgScale } from './img-scale-preview.js';

const removeCommentErrorMessage = () => {
  const text = document.querySelector('.text');
  const textError = text.querySelector('.text__error');
  if (textError) {
    clearElementTextContent(textError);
  }
};

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadForm();
  }
};

function openUploadForm() {
  uploadModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  setInitialImgScale(INITIAL_IMG_SCALE);
  document.addEventListener('keydown', onModalEscKeydown);
}

function closeUploadForm() {
  uploadModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  clearFieldValue(uploadInput);
  clearFieldValue(commentTextArea);
  removeCommentErrorMessage();
  document.removeEventListener('keydown', onModalEscKeydown);
}

const onUploadInputChange = () => {
  uploadInput.addEventListener('change', openUploadForm);
};

const onUploadCancelButtonClick = () => {
  uploadCancelButton.addEventListener('click', closeUploadForm);
};

export { onUploadInputChange, onUploadCancelButtonClick };
