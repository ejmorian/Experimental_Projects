const inputform = document.querySelector('.inputcontainer');
const taskinput = document.querySelector('.taskinput');
const addbutton = document.querySelector('.addbutton');
const taskbox = document.querySelector('.taskbox')

inputform.addEventListener('submit', e =>{
    e.preventDefault();
})

function createTask() {
    const taskcontainer = document.createElement('div')
    taskcontainer.classList.add('taskbox__element');

    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.classList.add('checkbox')

    const taskoutput = document.createElement('input');
    taskoutput.classList.add('taskoutput')
    taskoutput.setAttribute('type', 'text');
    taskoutput.readOnly = true;
    taskoutput.value = taskinput.value;

    const editbutton = document.createElement('span');
    editbutton.classList.add('editbutton')
    editbutton.textContent = 'EDIT'

    const deletebutton = document.createElement('span')
    deletebutton.classList.add('deletebutton')
    deletebutton.textContent = 'DELETE'

    editbutton.addEventListener('click', () =>{
        if (taskoutput.value !== null && taskoutput.value !== ''){
            if (taskoutput.readOnly)
            {
                taskoutput.readOnly = false;
                editbutton.textContent = 'SAVE';
            }else if(editbutton.textContent === 'SAVE')
            {
            editbutton.textContent = 'EDIT'
            taskoutput.readOnly = true;
            }
        } else {
            alert('please enter a task')
        }


    })

    checkbox.addEventListener('click', ()=>{
        if (checkbox.checked == true){
            taskoutput.style.textDecoration = 'line-through'    
        } else{
            taskoutput.style.textDecoration = 'none'   
        }
    })

    deletebutton.addEventListener('click', ()=>{
        taskcontainer.remove();
    })

    taskcontainer.append(checkbox,taskoutput,editbutton,deletebutton);
    taskbox.append(taskcontainer);
}

taskinput.addEventListener('keypress', e =>{
    if (taskinput.value !== null && taskinput.value !== '') {
        if(e.key == 'Enter'){
            createTask()
            taskinput.value = '';
            console.log('this is working')
        }
    }
})

addbutton.addEventListener('click', ()=>{
    if (taskinput.value !== null && taskinput.value !== '') {
        createTask()
        taskinput.value = '';
        console.log('this is working')
    }
})


