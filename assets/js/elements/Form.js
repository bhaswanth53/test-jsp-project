import { Validator } from "lumina-form-validator"

class Form {
    data = {
        name: null,
        email: null,
        phone: null,
        date: null
    }

    errors = {}

    constructor() {
        this.data.name = document.querySelector('input[name=name]')
        this.data.email = document.querySelector('input[name=email]')
        this.data.phone = document.querySelector('input[name=phone]')
        this.data.date = document.querySelector('input[name=date]')
    }

    validate() {
        const validator = new Validator({
            name: this.data.name.value,
            email: this.data.email.value,
            phone: this.data.phone.value,
            date: this.data.date.value
        })

        validator.attr('name').label('Name').required()
        validator.attr('email').label('Email address').required().email()
        validator.attr('phone').label('Phone number').required()
        validator.attr('date').label('Date of Joining').required()

        if(!validator.isSuccess()) {
            this.errors = validator.getErrors()
            return false
        }

        return true
    }
}

export default Form