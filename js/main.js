import { renderPictures } from './rendering-pictures.js';
import {
  onUploadInputChange,
  onUploadCancelButtonClick,
  validateUploadForm,
} from './img-upload-form.js';

onUploadInputChange();
onUploadCancelButtonClick();
validateUploadForm();

renderPictures();
