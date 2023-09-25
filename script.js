
let pInput = document.getElementById('p');
let plus = document.getElementById('plus');
let addedList = document.getElementById('added');

let arr = [];

plus.addEventListener('click', function() {
    let task = pInput.value;

    if (task !== '') { 
        arr.push(task);

        
        pInput.value = '';

        
        displayTasks();
    }
});


function displayTasks() {
    addedList.innerHTML = '';
    for (let i = 0 ; i < arr.length; i++) {
        let taskItem = document.createElement('li');
        taskItem.textContent = arr[i];
        addedList.appendChild(taskItem);
    }
}