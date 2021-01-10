const sumCategRef = document.querySelector("ul")
console.log(`В списке ${sumCategRef.children.length} категории.`)

const itemRef = document.querySelectorAll(".item")
itemRef.forEach(item => {
    console.log(`Категория: ${item.firstElementChild.textContent}`)
    console.log(`Количество элементов: ${item.lastElementChild.children.length}`)
}
)
