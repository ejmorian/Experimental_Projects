// Get DOM objects
const inputform = document.querySelector('.inputcontainer');
const taskinput = document.querySelector('.taskinput');
const addbutton = document.querySelector('.addbutton');
const taskbox = document.querySelector('.taskbox');

// LOAD Existing task
window.addEventListener('load', (event) => {
    taskbox.innerHTML = localStorage.getItem('taskbox')

    const taskcontainer = document.querySelectorAll('.taskbox__element')
    const checkbox = document.querySelectorAll('.checkbox')
    const taskoutput = document.querySelectorAll('.taskoutput');
    const editbutton = document.querySelectorAll('.editbutton');
    const deletebutton = document.querySelectorAll('.deletebutton');

    const empty = document.createElement('input')
    empty.setAttribute('type', 'text');

    for (i = 0; i < taskcontainer.length; i++) {

        let x = i;

        deletebutton[i].addEventListener('click', () => {
            console.log('deletebutton clicks')
            taskcontainer[x].remove();
            save()

        })

        editbutton[i].addEventListener('click', () => {
            console.log('editbutton clicks')

            if (taskoutput[x].readOnly) {
                taskoutput[x].readOnly = false;
                const end = taskoutput[x].value.length;
                taskoutput[x].setSelectionRange(end, end);
                taskoutput[x].focus();
                editbutton[x].textContent = 'SAVE';
                save()
            } else {
                empty.value = taskoutput[x].value;
                taskoutput[x].readOnly = true;
                editbutton[x].textContent = 'EDIT';
                taskoutput[x].setAttribute('value', empty.value);
                save()
                console.log(taskoutput[x].value);
            }
            save()
        })
        checkbox[i].addEventListener('click', () => {
            console.log('checkbox clicks')
            if (checkbox[x].checked == true) {
                checkbox[x].setAttribute('checked', true);
                taskoutput[x].style.textDecoration = 'line-through'
                save()
            } else if (checkbox[x].checked == false) {
                checkbox[x].removeAttribute('checked');
                taskoutput[x].style.textDecoration = 'none'
                save()
            }
        })
    }

});


// addTask utility

taskinput.addEventListener('keypress', e => {
    if (taskinput.value !== null && taskinput.value !== '') {
        if (e.key == 'Enter') {
            createTask()
            taskinput.value = '';
            console.log('this is working')
        }
    }
})

addbutton.addEventListener('click', () => {
    if (taskinput.value !== null && taskinput.value !== '') {
        createTask()
        taskinput.value = '';
        console.log('this is working')
    }
})

inputform.addEventListener('submit', e => {
    e.preventDefault();
})
// --------

function createTask() {

    const taskcontainer = document.createElement('div')
    const checkbox = document.createElement('input')
    const taskoutput = document.createElement('input');
    const editbutton = document.createElement('span');
    const deletebutton = document.createElement('span')
    const empty = document.createElement('input')

    empty.setAttribute('type', 'text');
    taskcontainer.classList.add('taskbox__element');
    checkbox.setAttribute('type', 'checkbox')
    checkbox.classList.add('checkbox')
    taskoutput.classList.add('taskoutput')
    taskoutput.setAttribute('type', 'text');
    taskoutput.readOnly = true;
    editbutton.classList.add('editbutton')
    editbutton.textContent = 'EDIT'
    deletebutton.classList.add('deletebutton')
    deletebutton.textContent = 'DELETE'

    editbutton.addEventListener('click', () => {

        if (taskoutput.value !== null && taskoutput.value !== '') {
            if (taskoutput.readOnly) {
                const end = taskoutput.value.length;
                taskoutput.setSelectionRange(end, end);
                taskoutput.focus();
                taskoutput.readOnly = false;
                editbutton.textContent = 'SAVE';
            } else if (editbutton.textContent === 'SAVE') {
                empty.value = taskoutput.value;
                taskoutput.setAttribute('value', empty.value)
                editbutton.textContent = 'EDIT'
                taskoutput.readOnly = true;
            }
        } else {
            alert('please enter a task')
        }
        save()
    })

    checkbox.addEventListener('click', () => {
        if (checkbox.checked == true) {
            checkbox.setAttribute('checked', true);
            taskoutput.style.textDecoration = 'line-through'
            save()
        } else if (checkbox.checked == false) {
            checkbox.removeAttribute('checked');
            taskoutput.style.textDecoration = 'none'
            save()
        }
    })

    deletebutton.addEventListener('click', () => {
        taskcontainer.remove();
        save()
    })
    taskoutput.setAttribute('value', taskinput.value);
    taskcontainer.append(checkbox, taskoutput, editbutton, deletebutton);
    taskbox.append(taskcontainer);

    save()

}

// SAVE changes to task 
function save() {
    window.localStorage.setItem('taskbox', taskbox.innerHTML);
}

