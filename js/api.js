import { showAlert } from './util.js';

export const getImgData = async () =>
  await fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .catch(() => showAlert('Загрузка не удалась.'));

export const sendFormData = async (body) => {
  let isSuccessful = true;
  await fetch('https://27.javascript.pages.academy/kekstagram-simple', {
    method: 'POST',
    body: body,
  })
    .then((response) => response.json())
    .catch(() => {
      isSuccessful = false;
    });

  return isSuccessful;
};
