//Галерея изображений
const picturesContainer = document.querySelector('.pictures');
const templatePicture = document
  .querySelector('#picture')
  .content.querySelector('.picture');

//Форма редактирования фотографии
const uploadModal = document.querySelector('.img-upload__overlay');
const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = document.querySelector('#upload-file');
const commentTextArea = uploadModal.querySelector('[name="description"]');
const uploadCancelButton = document.querySelector('#upload-cancel');

export {
  picturesContainer,
  templatePicture,
  uploadModal,
  uploadForm,
  uploadInput,
  commentTextArea,
  uploadCancelButton,
};
