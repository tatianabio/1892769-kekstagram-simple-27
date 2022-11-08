import { renderPictures } from './rendering-pictures.js';
import { onUploadInputChange } from './img-upload-form.js';
import { changeImgScale } from './img-scale-preview.js';
import { changeImgEffect, createSlider } from './img-effects.js';

createSlider();
onUploadInputChange();
changeImgScale();
renderPictures();
changeImgEffect();
