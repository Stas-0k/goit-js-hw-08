const emailInput = document.querySelector('input')
const messageInput = document.querySelector('textarea')
const form = document.querySelector('.feedback-form')




form.addEventListener('input', show)


function show(event) { 
    const result = { elements: { email, message } } = event.currentTarget;
  
    localStorage.setItem('feedback-form-state', result)
}