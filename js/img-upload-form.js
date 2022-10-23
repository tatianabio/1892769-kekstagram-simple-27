import { isEscapeKey } from './util.js';

const uploadInput = document.querySelector('#upload-file');
const uploadModal = document.querySelector('.img-upload__overlay');
const uploadCancelButton = document.querySelector('#upload-cancel');

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

  document.removeEventListener('keydown', onModalEscKeydown);
}

const onUploadInputChange = () => {
  uploadInput.addEventListener('change', () => {
    openUploadForm();
  });
};

const onUploadCancelButtonClick = () => {
  uploadCancelButton.addEventListener('click', () => {
    closeUploadForm();
  });
};

export { onUploadInputChange, onUploadCancelButtonClick };
