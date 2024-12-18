import Form from "./elements/Form"

const createForm = document.querySelector("form#create-form")

createForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const form = new Form()
    
    const validate = form.validate()
    if(validate) {
        alert('Form success')
    } else {
        alert('Form not validate')
        console.log('Errors :: ', form.errors)
    }
})