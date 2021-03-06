const numberRef = document.querySelector('input[type="number"]');
const renderRef = document.querySelector('button[data-action="render"]');
const destroyRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector("#boxes");

const createBoxes = (amount) => {
  boxesRef.textContent = "";
  const boxArray = []
  
// создачем счетчик
  for (let i = 0; i < amount; i += 1) {
        //создаем переменые для цветов
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        // создаем блок с нужными стилем
        const createDiv = document.createElement("div");
        createDiv.style.width = `${30 + i * 10}px`;
        createDiv.style.height = `${30 + i * 10}px`;

        // делаем проверку на черный цвет (при умножении на ноль)
      if (i === 0) {
        (createDiv.style.backgroundColor = `rgb(${r},${g},${b})`)
      } else {
        (createDiv.style.backgroundColor = `rgb(${Math.pow(r * i, i) % 256},${Math.pow(g * i, i) % 256
          },${Math.pow(b * i, i) % 256})`);
      }
        // созданные боксы добавляем в массив
        
    boxArray.push(createDiv)     
  }

  // полученый массив вставляем в разметку

  boxesRef.append(...boxArray)
};

const destroyBoxes = () => {
    boxesRef.textContent = "";
}

// при клике на кнопку Создать создаем блоки
renderRef.addEventListener("click", () => {
  createBoxes(numberRef.value);
});

//очищаем созданые блоки
destroyRef.addEventListener("click", () => {
  destroyBoxes()
});
