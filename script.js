const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function myTask(){
    if(inputBox.value === ''){
        alert('Enter something')
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();

    }else{
        console.log('hello')
    }
});


function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
};

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
    localStorage.removeItem(listContainer)
}

showTask();

