
const inputBox = document.getElementById('inputBox');
const listContainer = document.getElementById('listContainer');

function addTask(){
    if(inputBox.value == ''){
        alert("Please enter a task");
    } else{
        let liElement = document.createElement('li');
        liElement.textContent = inputBox.value;
        listContainer.appendChild(liElement);
        let spanElement = document.createElement('span');
        spanElement.classList.add('deleteBtn');
        spanElement.innerHTML = '&times';
        liElement.appendChild(spanElement);
    }
    inputBox.value = ''; 
    saveData();
}

listContainer.addEventListener('click', function(event){
    if (event.target.tagName === "LI") {
        event.target.classList.toggle('checked');
        saveData();
    } 
    else if(event.target.className === 'deleteBtn'){
        event.target.parentNode.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();