import {
  isEscapeKey,
  checkMaxCommentLength,
  checkMinCommentLength,
} from './util.js';

const COMMENT_MIN_LENGTH = 20;
const COMMENT_MAX_LENGTH = 140;
const EMPTY_VALUE = '';
const uploadInput = document.querySelector('#upload-file');
const uploadModal = document.querySelector('.img-upload__overlay');
const uploadCancelButton = document.querySelector('#upload-cancel');
const commentTextArea = uploadModal.querySelector('[name="description"]');
const uploadForm = document.querySelector('.img-upload__form');

const clearFieldValue = (field) => {
  field.value = EMPTY_VALUE;
};

const clearElementTextContent = (element) => {
  element.textContent = EMPTY_VALUE;
};

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

const pristine = new Pristine(
  uploadForm,
  {
    classTo: 'img-upload__text',
    errorClass: 'has-danger',
    errorTextParent: 'img-upload__text',
    errorTextTag: 'p',
    errorTextClass: 'text__error',
  },
  false
);

const validateCommentTextArea = (value) =>
  checkMinCommentLength(value, COMMENT_MIN_LENGTH) &&
  checkMaxCommentLength(value, COMMENT_MAX_LENGTH);

pristine.addValidator(
  commentTextArea,
  validateCommentTextArea,
  `Введите от ${COMMENT_MIN_LENGTH} до ${COMMENT_MAX_LENGTH} символов`
);

const onUploadFormSubmit = (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    // eslint-disable-next-line no-console
    console.log('Форма валидна!');
  } else {
    // eslint-disable-next-line no-console
    console.error('Форма не валидна!');
  }
};

const validateUploadForm = () => {
  uploadForm.addEventListener('submit', onUploadFormSubmit);
};

export { onUploadInputChange, onUploadCancelButtonClick, validateUploadForm };
