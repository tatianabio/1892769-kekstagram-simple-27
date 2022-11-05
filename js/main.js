import { renderPictures } from './rendering-pictures.js';
import {
  onUploadCancelButtonClick,
  onUploadInputChange,
} from './img-upload-form.js';
import { setUploadFormSubmit } from './validate-upload-form.js';
import { changeImgScale } from './img-scale-preview.js';
import { changeImgEffect } from './img-effects.js';

onUploadInputChange();
onUploadCancelButtonClick();
setUploadFormSubmit();
changeImgScale();
renderPictures();
changeImgEffect();
