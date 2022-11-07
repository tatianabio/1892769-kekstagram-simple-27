import { checkMaxCommentLength, checkMinCommentLength } from './util.js';
import {
  body,
  commentTextArea,
  templateSuccessModal,
  uploadForm,
} from './dom-elements.js';
import { sendData } from './api.js';
import { closeUploadForm } from './img-upload-form.js';

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

const setUploadFormSubmit = () => {
  const submit = async (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);
      const isSuccessful = await sendData(formData);

      if (isSuccessful) {
        await closeUploadForm();
        const successModal = await templateSuccessModal.cloneNode(true);
        await body.append(successModal);
      }
    } else {
      // eslint-disable-next-line no-console
      console.error('Форма не валидна!');
    }
  };

  uploadForm.addEventListener('submit', submit);
};

export { setUploadFormSubmit };
