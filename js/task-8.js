// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов 
// в input и нажимает кнопку Создать, 
// после чего рендерится коллекция. 
// При нажатии на кнопку Очистить, 
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), 
// которая принимает 1 параметр amount - число. 
// Функция создает столько div, 
// сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

{/* <div id="controls">
<input type="number" min="0" max="100" step="1" />
<button type="button" data-action="render">Создать</button>
<button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div> */}

const controlsRef = document.querySelector('#controls');
const inputRef = document. querySelector('#controls input');
const btnRenderRef = document.querySelector('button[data-action="render"]');
const btnDestroyRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');
let size = 30;


function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

const createBoxes = (amount) => {
    const boxes = [...Array(amount)];
    boxes.map(box => {
        box = document.createElement('div');
        box.style.width = size;
        box.style.height = size;
        size += 10;
        box.style.backgroundColor = random_rgba();
        boxesRef.appendChild(box);
    })
}

const getNumberOfBoxes = () => {
    createBoxes(Number(inputRef.value));
    inputRef.value = '';
}

const destroyBoxes = () => {
    while (boxesRef.firstChild) {
    boxesRef.removeChild(boxesRef.lastChild)
    }
}

btnRenderRef.addEventListener('click', getNumberOfBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes)


