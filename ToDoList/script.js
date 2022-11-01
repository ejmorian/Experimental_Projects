
// get utility elements 
    const todolist__textfield = document.querySelector('.todolist__textfield');
    const todolist__addbutton = document.querySelector('.todolist__addbutton');
    const listcontainer = document.querySelector('.listcontainer');
    const todolist__clearbutton = document.querySelector('.todolist__clearbutton');
    
// Create Task Elements, Set Attribute, Set Styles, Set EventListeners, Add to UI (List)
    function addTask() {

    if (todolist__textfield.value !== null && todolist__textfield.value !== '' ){
                
        const taskcontainer = document.createElement('div')
        const taskcontainer__checkbox = document.createElement('input');
        const taskcontainer__label = document.createElement('label');
        const taskcontainer__delbutton = document.createElement('button');


        taskcontainer.setAttribute('class','taskcontainer')

        taskcontainer__checkbox.setAttribute('type','checkbox');
        taskcontainer__checkbox.setAttribute('class', 'taskcontainer__checkbox');
        taskcontainer__checkbox.setAttribute('for', 'taskcontainer__label');
        taskcontainer__checkbox.style.zoom = '1.5';

        taskcontainer__label.setAttribute('class', 'taskcontainer__label');
        taskcontainer__label.textContent = todolist__textfield.value;
        todolist__textfield.value = '';

        taskcontainer__delbutton.setAttribute('for', 'taskcontainer__label');
        taskcontainer__delbutton.setAttribute('class', 'taskcontainer__delbutton');
        taskcontainer__delbutton.textContent = 'X';
        taskcontainer__delbutton.style.padding = '0.5rem';

        taskcontainer.style.display = 'flex';
        taskcontainer.style.justifyContent = 'space-between';

        
        taskcontainer__checkbox.addEventListener('change', e => {
        if(e.target.checked){
            taskcontainer__label.style.textDecoration = 'line-through';
        }
        else
        taskcontainer__label.style.textDecoration = 'none';
        })

        taskcontainer__delbutton.addEventListener('click', e => {
            taskcontainer.remove();
        })


        taskcontainer.append(taskcontainer__checkbox, taskcontainer__label,taskcontainer__delbutton);
        listcontainer.append(taskcontainer);
    } else{
        console.log("please enter a task");
    }

}

// Set Event listeners and functionality to utilies

todolist__addbutton.addEventListener('click', e => {
    addTask();
})

todolist__textfield.addEventListener('keypress', e =>{
    if (e.key === 'Enter'){
        addTask();
        todolist__textfield.value = ''
    }
})

todolist__clearbutton.addEventListener('click', e => {
    while (listcontainer.firstChild) {
        listcontainer.removeChild(listcontainer.firstChild);
      }
})

// prevent list overflows
listcontainer.style.overflow = 'auto';
// sets auto focus on the add task text field.
todolist__textfield.focus();

