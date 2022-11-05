import throttle from 'lodash.throttle'
const formData = document.querySelector('.feedback-form')
const emailInput = document.querySelector('input')
const messageInput = document.querySelector('textarea')

let dataInput = {};


dataPreview();

formData.addEventListener('input', throttle(show, 500))



function show(evt) { 
        dataInput[evt.target.name]= evt.target.value,
        dataInput[evt.target.name]= evt.target.value,    
            
    localStorage.setItem("feedback-form-state",
    JSON.stringify(dataInput))
}


function dataPreview() { 
    if (localStorage.getItem('feedback-form-state')) { 
        const jsonData = localStorage.getItem('feedback-form-state')
        const parseData = JSON.parse(jsonData)
        if (parseData.email) {
            emailInput.value = parseData.email;
        } else { 
            alert('All fields must be filled!')
            emailInput.value = ''
        }

        if (parseData.message) {
            messageInput.value = parseData.message;
        } else { 
            alert('All fields must be filled!')
            messageInput.value = ''
        }
        
    }
}

formData.addEventListener('submit', submitFunc)

function submitFunc(evt) { 
    evt.preventDefault(); 

    localStorage.removeItem('feedback-form-state')
    emailInput.value = ''
    messageInput.value = ''
    console.log(dataInput)
}