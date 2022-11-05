import { checkMaxCommentLength, checkMinCommentLength } from './util.js';
import { commentTextArea, uploadForm } from './dom-elements.js';

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

const setUploadFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);

      fetch('https://27.javascript.pages.academy/kekstagram-simple', {
        method: 'POST',
        body: formData,
      }).then(() => onSuccess());
    } else {
      // eslint-disable-next-line no-console
      console.error('Форма не валидна!');
    }
  });
};

export { setUploadFormSubmit };
