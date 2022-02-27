const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("form button");
const olElement = document.querySelector("ol");
const task = [];


//CRIANDO EVENT ONCLICK NO BOTÃO DE ADICIONAR
buttonElement.onclick = ev => {
    ev.preventDefault();
    //O if testa se o item esta vazio
    if (inputElement.value) {
        const textElement = document.createElement("span");
        textElement.innerHTML = inputElement.value;
        const btnRemover = document.createElement("button");
        btnRemover.innerHTML = "Remover"

        const liElement = document.createElement('li');
        //liElement.innerHTML = `<span>${inputElement.value}</span>`;
        liElement.appendChild(textElement);
        liElement.appendChild(btnRemover);
       
        //task.push(inputElement.value)
        //

        btnRemover.onclick = () =>{
            olElement.removeChild(liElement);
        }
        olElement.appendChild(liElement);
        InputEvent.value = "";
        console.log(inputElement.value)
    }
}
