const EMPTY_VALUE = '';
const ALERT_SHOW_TIME = 5000;

const clearFieldValue = (field) => {
  field.value = EMPTY_VALUE;
};

const clearElementTextContent = (element) => {
  element.textContent = EMPTY_VALUE;
};

const checkMaxCommentLength = (checkedString, maxLength) =>
  checkedString.length <= maxLength;

const checkMinCommentLength = (checkedString, minLength) =>
  checkedString.length >= minLength;

const getRandomNumber = (from, to) => {
  if (isNaN(from) || from < 0 || isNaN(to) || to < 0) {
    return NaN;
  }

  if (from === to) {
    return from;
  }

  const min = Math.min(from, to);
  const max = Math.max(from, to);

  return Math.floor(Math.random() * (max - min + 1) + min);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {
  clearElementTextContent,
  clearFieldValue,
  getRandomNumber,
  checkMaxCommentLength,
  checkMinCommentLength,
  isEscapeKey,
  showAlert,
};
