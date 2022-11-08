import { checkMaxCommentLength, checkMinCommentLength } from './util.js';
import {
  body,
  commentTextArea,
  errorModal,
  errorModalCloseButton,
  successModal,
  successModalCloseButton,
  templateErrorModal,
  templateSuccessModal,
  uploadForm,
  uploadSubmitButton,
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

const showMessageModal = (template, closeButton, modal) => {
  const messageModal = template.cloneNode(true);
  body.append(messageModal);
  closeButton().addEventListener('click', () => {
    body.removeChild(modal());
  });
};

const blockSubmitButton = () => {
  uploadSubmitButton.disabled = true;
  uploadSubmitButton.textContent = 'Публикация...';
};

const unBlockSubmitButton = () => {
  uploadSubmitButton.disabled = false;
  uploadSubmitButton.textContent = 'Опубликовать';
};

export const setUploadFormSubmit = () => {
  const onSubmitButtonClick = async (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      const formData = new FormData(evt.target);
      const isSuccessful = await sendData(formData);

      if (isSuccessful) {
        closeUploadForm();
        showMessageModal(
          templateSuccessModal,
          successModalCloseButton,
          successModal
        );
      } else {
        showMessageModal(templateErrorModal, errorModalCloseButton, errorModal);
      }
      unBlockSubmitButton();
    }
  };

  uploadForm.addEventListener('submit', onSubmitButtonClick);
};
