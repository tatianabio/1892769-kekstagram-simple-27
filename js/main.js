import { renderPictures } from './rendering-pictures.js';
import {
  onUploadInputChange,
  onUploadCancelButtonClick,
} from './img-upload-form.js';
import { validateUploadForm } from './validate-upload-form.js';
import { changeImgScale } from './img-scale-preview.js';

onUploadInputChange();
onUploadCancelButtonClick();
validateUploadForm();
changeImgScale();
renderPictures();
