import {useState, useEffect, useCallback} from "react"
import { useForm } from '@formspree/react'
import validationForm from "utils/validationForm"
import { FormErrors } from "utils/interfaces"

export default function useFormspree(){
    const [mounted, setMounted] = useState<boolean>(false)
    const [errors, setErrors] = useState<FormErrors>({})
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [loading, setLoading] = useState(false)
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_ID_FORM ?? "")
    const [response, setResponse] = useState<boolean | null>(null)

    useEffect( () => {
        if(!mounted){
            setMounted(true);
        }else{
            setLoading(state.submitting)
            if (!state.submitting) {
                setResponse(state.succeeded)
                setTimeout(()=>{
                    setResponse(null)
                },3000);
            }
        }
    },[state.submitting, state.succeeded])

    const sendMail = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(validationForm(name,email,message,setErrors)) {
            handleSubmit(e)
            setName("")
            setEmail("")
            setMessage("")
        }
    },[name, email, message, handleSubmit])

    return {name, setName, email, setEmail, message, setMessage, response, errors, sendMail, loading}
}