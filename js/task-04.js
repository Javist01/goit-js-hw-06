
let counterValue = 0

const decrement = document.querySelector('[data-action="decrement"]');

const increment = document.querySelector('[data-action="increment"]');

const counter = document.querySelector("#value");

const decrementValue = () => {
    console.log(counterValue -= 1);
    changeCounterValue()
}

const incrementValue = () => {
    console.log(counterValue += 1);
    changeCounterValue()
}

const changeCounterValue = () => {
counter.textContent = counterValue;
}

decrement.addEventListener("click", decrementValue);
increment.addEventListener("click", incrementValue);