import throttle from 'lodash.throttle'
const formData = document.querySelector('.feedback-form')
const emailInput = document.querySelector('input')
const messageInput = document.querySelector('textarea')

let dataInput = {email:"",message:""};


dataPreview();



formData.addEventListener('input', throttle(show, 500))



function show(evt) { 
    dataInput[evt.target.name]= evt.target.value,
    dataInput[evt.target.name]= evt.target.value,    
            
    localStorage.setItem("feedback-form-state", JSON.stringify(dataInput))
}

function dataPreview() { 
    if (localStorage.getItem('feedback-form-state')) { 
        const jsonData = localStorage.getItem('feedback-form-state')
        const parseData = JSON.parse(jsonData)
        emailInput.value = parseData.email;
        messageInput.value = parseData.message;
        dataInput.email = parseData.email;
        dataInput.message = parseData.message;
       
        
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