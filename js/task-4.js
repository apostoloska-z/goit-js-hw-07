// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// <div id="counter">
// <button type="button" data-action="decrement">-1</button>
// <span id="value">0</span>
// <button type="button" data-action="increment">+1</button>
// </div>


const counterRef = document.querySelector('#counter')
const btnDecrementRef = counterRef.firstElementChild;
const btnIncrementRef = counterRef.lastElementChild;
const spanRef = document.querySelector('#value');
let counterValue = Number(spanRef.textContent);
console.log(counterValue)

const decrement = () => {
    counterValue -=1;
    spanRef.textContent = counterValue;
}

const increment = () => {
    counterValue +=1;
    spanRef.textContent = counterValue;
}

btnDecrementRef.addEventListener('click', decrement);
btnIncrementRef.addEventListener('click', increment);



