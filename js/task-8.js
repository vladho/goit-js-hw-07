const numberRef = document.querySelector('input[type="number"]');
const renderRef = document.querySelector('button[data-action="render"]');
const destroyRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector("#boxes");

let createBoxes = (i) => {
    //создаем переменые для цветов
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    // создаем блок с нужными стилем
    const createDiv = document.createElement("div");
    createDiv.style.width = `${30 + i * 10}`;
    createDiv.style.height = `${30 + i * 10}`;

    // делаем проверку на черный цвет (при умножении на ноль)
            i === 0 ?
                (createDiv.style.backgroundColor = `rgb(${r},${g},${b})`)
                : (createDiv.style.backgroundColor = `rgb(${Math.pow(r * i, i) % 256},${Math.pow(g * i, i) % 256},${Math.pow(b * i, i) % 256})`);
  // записываем созданные дивки в наш бокс
    boxesRef.appendChild(createDiv);
};

//создаем счетчик
const creatCount = (amount) => {
  for (let i = 0; i < amount; i += 1) {
    createBoxes(i);
  }
};

// при клике на кнопку Создать создаем блоки
renderRef.addEventListener("click", () => {
  creatCount(numberRef.value);
});

//очищаем созданые блоки
destroyRef.addEventListener("click", () => {
    boxesRef.textContent = ""
});
