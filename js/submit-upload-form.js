import {
  checkMaxCommentLength,
  checkMinCommentLength,
  isEscapeKey,
} from './util.js';
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
import { sendFormData } from './api.js';
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
  `Enter between ${COMMENT_MIN_LENGTH} and ${COMMENT_MAX_LENGTH} characters`
);

const showMessageModal = (template, closeButton, modal) => {
  const messageModal = template.cloneNode(true);
  body.append(messageModal);

  const onMessageModalEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeMessageModal();
    }
  };

  const onOutsideMessageModalClick = (evt) => {
    if (!modal().querySelector('.inner').contains(evt.target)) {
      closeMessageModal();
    }
  };

  function closeMessageModal() {
    closeButton().removeEventListener('click', closeMessageModal);
    document.removeEventListener('keydown', onMessageModalEscKeydown);
    document.removeEventListener('click', onOutsideMessageModalClick);
    body.removeChild(modal());
  }

  closeButton().addEventListener('click', closeMessageModal);
  document.addEventListener('keydown', onMessageModalEscKeydown);
  document.addEventListener('click', onOutsideMessageModalClick);
};

const blockSubmitButton = (isBlocked = false) => {
  uploadSubmitButton.disabled = isBlocked;
  uploadSubmitButton.textContent = isBlocked ? 'In progress...' : 'Submit';
};

export const onSubmitButtonClick = async (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();

  if (isValid) {
    blockSubmitButton(true);
    const formData = new FormData(evt.target);
    const isSuccessful = await sendFormData(formData);

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
    blockSubmitButton(false);
  }
};
