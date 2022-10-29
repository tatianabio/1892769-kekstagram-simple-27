import { imgPreviewFile } from './dom-elements.js';

const filterEffects = ['chrome', 'sepia', 'marvin', 'phobos', 'heat'];

const effectsList = document.querySelector('.effects');
effectsList.addEventListener('change', () => {
  const checkedInput = effectsList.querySelector('input[type=radio]:checked');
  console.log(checkedInput.value);

  // const effectClass =
  //
  // filterEffects.classList.contains(``);
  //
  // if (checkedInput.value === 'none') {
  // }

  imgPreviewFile.classList.add(`effects__preview--${checkedInput.value}`);
});
