//option - 1

// let counterValueRed = document.querySelector("#value")
// const counterRef = document.querySelector("#counter");
// let counter = 0;

// const counterFunction = event => {
//     const decrementRef = event.target.dataset.action;
//     if ('decrement' === decrementRef) {
//         counter -= 1;
//         counterValueRed.innerHTML = counter
//         }
//     if ('increment' === decrementRef) {
//         counter += 1;
//         counterValueRed.innerHTML = counter
//     }

// }

// counterRef.addEventListener("click", counterFunction)

//option - 2

let counter = 0;

const counterValueRed = document.querySelector("#value");

const incrementRef = document.querySelector('button[data-action="increment"]');
const decrementRef = document.querySelector('button[data-action="decrement"]');

incrementRef.addEventListener("click", (event) => {
  counter += 1;
  counterValueRed.innerHTML = counter;
});

decrementRef.addEventListener("click", (event) => {
  counter -= 1;
  counterValueRed.innerHTML = counter;
});
