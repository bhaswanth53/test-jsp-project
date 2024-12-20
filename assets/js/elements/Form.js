import { Validator } from "lumina-form-validator"

class Form {
    init() {
        this.submitHandler()
    }

    validate(data) {
        const validator = new Validator(data)

        validator.attr('name').label('Name').required()
        validator.attr('email').label('Email address').required().email()
        validator.attr('phone').label('Phone number').required()
        validator.attr('date').label('Date of Joining').required()

        if(!validator.isSuccess()) {
            let errors = validator.getErrors()
            console.log('Errors :: ', errors)
            this.populateErrors(errors)
            return false
        }

        return true
    }

    populateErrors(errors) {
        const name = document.querySelector("span#name-error")
        const email = document.querySelector("span#email-error")
        const phone = document.querySelector("span#phone-error")
        const date = document.querySelector("span#date-error")

        name.textContent = errors?.name
        email.textContent = errors?.email
        phone.textContent = errors?.phone
        date.textContent = errors?.date
    }

    clearErrors() {
        const name = document.querySelector("span#name-error")
        const email = document.querySelector("span#email-error")
        const phone = document.querySelector("span#phone-error")
        const date = document.querySelector("span#date-error")

        name.textContent = ''
        email.textContent = ''
        phone.textContent = ''
        date.textContent = ''
    }

    submitHandler() {
        const form = document.querySelector("form#create-form")
        const name = document.querySelector('input[name=name]')
        const email = document.querySelector('input[name=email]')
        const phone = document.querySelector('input[name=phone]')
        const date = document.querySelector('input[name=date]')

        const self = this

        form.addEventListener('submit', function(e) {
            e.preventDefault()

            const data = {
                name: name.value,
                email: email.value,
                phone: phone.value,
                date: date.value
            }    

            if(self.validate(data)) {
                form.submit()
            } else {
                alert("Form failed")
            }
        })
    }
}

export default Form