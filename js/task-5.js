const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

const handleName = (event) => {
  if (event.inputType === "insertText") {
    nameOutputRef.textContent = event.target.value;
  } else nameOutputRef.textContent = "незнакомец";
};

nameInputRef.addEventListener("input", handleName);
