const validationInputRef = document.querySelector("#validation-input")

let dataLenghtRef = Number(validationInputRef.getAttribute("data-length"))

validationInputRef.addEventListener("change", event => {
    if (event.target.selectionEnd === dataLenghtRef) {
        validationInputRef.classList.remove("invalid")
        validationInputRef.classList.add("valid")
    } else {
        validationInputRef.classList.remove("valid")
        validationInputRef.classList.add("invalid")
    }
})
