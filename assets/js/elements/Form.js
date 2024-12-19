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
            return false
        }

        return true
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
                alert("Form Success")
                console.log('Data :: ', data)
            } else {
                alert("Form failed")
            }
        })
    }
}

export default Form