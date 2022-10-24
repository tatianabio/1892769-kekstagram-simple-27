import {
  isEscapeKey,
  checkMaxCommentLength,
  checkMinCommentLength,
} from './util.js';

const COMMENT_MIN_LENGTH = 20;
const COMMENT_MAX_LENGTH = 140;
const uploadInput = document.querySelector('#upload-file');
const uploadModal = document.querySelector('.img-upload__overlay');
const uploadCancelButton = document.querySelector('#upload-cancel');
const commentTextArea = uploadModal.querySelector('[name="description"]');
const uploadForm = document.querySelector('.img-upload__form');

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
  uploadInput.value = '';
  commentTextArea.value = '';
  document.removeEventListener('keydown', onModalEscKeydown);
}

const onUploadInputChange = () => {
  uploadInput.addEventListener('change', openUploadForm);
};

const onUploadCancelButtonClick = () => {
  uploadCancelButton.addEventListener('click', closeUploadForm);
};

const pristine = new Pristine(uploadForm);

const onUploadFormSubmit = (evt) => {
  evt.preventDefault();

  const validateCommentTextArea = (value) =>
    checkMinCommentLength(value, COMMENT_MIN_LENGTH) &&
    checkMaxCommentLength(value, COMMENT_MAX_LENGTH);

  pristine.addValidator(
    commentTextArea,
    validateCommentTextArea,
    `От ${COMMENT_MIN_LENGTH} до ${COMMENT_MAX_LENGTH} символов`
  );

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
