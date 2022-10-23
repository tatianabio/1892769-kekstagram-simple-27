/*найти инпут загрузки файла
1) создать обработчик события загрузки файла:
1. сделать форму видимой, убрать класс hidden
2. body задаётся класс modal-open
3. навесить обработчик нажатием на кнопку #upload-cancel, либо нажатием клавиши Esc => форма закрывается

function openUserModal () {
  // 1. Показать окно
  // 2. Добавить обработчики для закрытия
  // 3. Прочая логика
}

function closeUserModal () {
  // 1. Скрыть окно
  // 2. Удалить обработчики для закрытия
  // 3. Прочая логика
}
*/

const imgUploadInput = document.querySelector('#upload-file');

const openUploadForm = () => {
  imgUploadInput.addEventListener('change', () => {});
};

export { openUploadForm };
