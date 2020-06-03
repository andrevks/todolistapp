var campo = document.querySelector("#app");
var inputElement = document.getElementById("addNew");
var listOfItems = document.getElementById("items");
var clearButton = document.querySelector("#clear");
var addButton = document.getElementById("send");
//Criando array que usa os dados salvos no LocalStorage
var todoLists = localStorage.getItem("todoList");
todoLists = todoLists? JSON.parse(todoLists):[];


function renderItems() {

    //Para não repetir itens na lista
    if (listOfItems.hasChildNodes()) listOfItems.innerHTML = '';


    for (const element of todoLists) {

        const text = document.createTextNode(element);
        const li = document.createElement('li');
        li.appendChild(text);
        const a = document.createElement('a');
        a.href = "#";
        a.innerHTML = " X";
        li.appendChild(a);

        let position = todoLists.indexOf(element);
        //Envia cada posição dos items do array como argumento 
        //para a função 
        a.setAttribute('onclick', "removeItem(" + position + ")");
        listOfItems.appendChild(li);
    }

}
renderItems();

function createItem() {

    if (inputElement.value != '') {
        const inputValue = inputElement.value;
        todoLists.push(inputValue);
        saveLocalStorage();
        renderItems();
        inputElement.value = '';
    }

}
addButton.addEventListener("click", createItem);

document.addEventListener("keyup",(event)=>{
    if(event.keyCode == 13){
        createItem();
    }
})
function removeItem(pos) {

    todoLists.splice(pos, 1);
    saveLocalStorage();
    renderItems();
}

function clearEverything() {
    localStorage.clear();

    while(listOfItems.hasChildNodes){
        //Remove cada child do elemento ul
        listOfItems.removeChild(listOfItems.childNodes[0]);
    }

}
clearButton.addEventListener('click', clearEverything);

function saveLocalStorage() {

    lists = JSON.stringify(todoLists);
    localStorage.setItem("todoList", lists);

}

//function createItem(){

    //const item = document.createElement("li");
    //item.className = "todo";

    ////Adding input value to the item 
    //const text = document.createTextNode(inputValue);
    //item.appendChild(text);

    //const link = document.createElement("a");
    //link.href = 'javascript:removeItem(event)';

    ////Creating a Icon to delete
    //const deleteItemIcon = document.createTextNode(" X");
    //link.appendChild(deleteItemIcon);
    //item.appendChild(link);
    //listOfItems.appendChild(item);
//}
