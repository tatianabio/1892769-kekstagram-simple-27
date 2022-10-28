import { renderPictures } from './rendering-pictures.js';
import {
  onUploadInputChange,
  onUploadCancelButtonClick,
} from './img-upload-form.js';
import { validateUploadForm } from './validate-upload-form.js';

onUploadInputChange();
onUploadCancelButtonClick();
validateUploadForm();

renderPictures();
