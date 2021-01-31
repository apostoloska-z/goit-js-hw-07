// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />

const inputRef = document.querySelector('#validation-input');


const checkSymbolQuantity = () => {
    if (inputRef.value.length !== Number(inputRef.dataset.length)) {
        return inputRef.setAttribute('class', 'invalid');
    } 
    inputRef.setAttribute('class', 'valid');
}

inputRef.addEventListener('blur', checkSymbolQuantity);

