import { showAlert } from './util.js';
import { appErrors } from './errors.js';

const getData = async () => {
  let response;

  try {
    response = await fetch(
      'https://27.javascript.pages.academy/kekstagram-simple/data'
    ).catch(() => {
      throw new Error('500');
    });

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
  } catch (err) {
    showAlert(appErrors[err.message] || 'Непредвиденная ошибка.');
  }

  return await response.json();
};

export { getData };
