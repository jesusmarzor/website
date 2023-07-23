import { mailRegex } from "./constants"
import { FormErrors } from "./interfaces"

export default (name: string, email: string, message: string, setError: (errors: FormErrors) => void): boolean => {
    let errors: FormErrors = {}
    if(name.length === 0) {
        errors.name = "error.name"
    }
	if(!(mailRegex).exec(email.toLocaleLowerCase())){
		errors.email = "error.email"
    }
    if(message.length === 0) {
        errors.message = "error.message";
    }
    setError(errors)
    return Object.keys(errors).length === 0
}