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

export {
  getRandomNumber,
  checkMaxCommentLength,
  checkMinCommentLength,
  isEscapeKey,
};
