import * as  Yup from 'yup'
import Regex from '../../regex/regex'

const { nameReg } = Regex

const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
}

const validationSchema = Yup.object({
    name: Yup.string()
        .matches(nameReg, 'Invalid name')
        .min(3, 'Must contain 3 or more characters')
        .required('Required'),
    email: Yup.string().email('Invalid email')
        .min(8, 'Must contain 8 or more characters')
        .required('Required'),
    subject: Yup.string()
        .min(3, 'Must contain 3 or more characters')
        .required('Required'),
    message: 
        Yup.string()
           .min(3, 'Must contain 3 or more characters')
           .required('Required')
})

export { initialValues, validationSchema }