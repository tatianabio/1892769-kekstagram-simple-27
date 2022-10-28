import { checkMaxCommentLength, checkMinCommentLength } from './util.js';
import { uploadForm, commentTextArea } from './dom-elements.js';

const COMMENT_MIN_LENGTH = 20;
const COMMENT_MAX_LENGTH = 140;

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

export { validateUploadForm };
