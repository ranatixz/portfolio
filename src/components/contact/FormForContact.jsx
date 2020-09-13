import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as  Yup from 'yup'
import Regex from '../../regex/regex'
import './style.css'


const { nameReg } = Regex

const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
}

const onSubmit = values =>{
    alert('Thank you for touching me. Have a nice day!')
    document.getElementById('contact-form').reset()
    //kulang og legit na reset sa form og sa state//
    //ipasa ang data sa api kulang sad//
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

const FormForContact = () =>{

    const getClassHandler = (error, touched) =>{
        let className = 'form-control'

        if(error && touched){
            className += ' border border-danger'
        }

        return className
    }
    
    return (
        <div className="col-xl-8 col-lg-8 form-contact mb-3">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >  
            {
                formikProps =>{
                    const { errors, touched } = formikProps
                    return(
                        <Form id='contact-form'>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <Field
                                            as="textarea"
                                            className={getClassHandler(errors.message, touched.message)} 
                                            placeholder="Enter a message"
                                            cols="30"
                                            rows="6"
                                            name="message"
                                        />
                                        <ErrorMessage 
                                            className="error"
                                            component="p"
                                            name="message"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <Field
                                            className={getClassHandler(errors.name, touched.name)}
                                            placeholder="Enter your name"
                                            name="name"
                                        />
                                        <ErrorMessage
                                            className="error"
                                            component="p"
                                            name="name"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <Field
                                            className={getClassHandler(errors.email, touched.email)}
                                            placeholder="Enter your email"
                                            name="email"
                                        />
                                        <ErrorMessage 
                                            className="error"
                                            component="p"
                                            name="email"
                                        />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <Field
                                            className={getClassHandler(errors.subject, touched.subject)}
                                            placeholder="Enter subject"
                                            name="subject"
                                        />
                                        <ErrorMessage 
                                            className="error"
                                            component="p" 
                                            name="subject"
                                        />
                                    </div>
                                </div>
                                <div className="col-12 mt-4">
                                    <button
                                        className="btn btn-outline-primary col-xl-4 col-lg-6"
                                        type="submit"
                                    >
                                        Send message
                                    </button> 
                                </div>
                            </div>
                        </Form>
                    )
                }
            }
            </Formik>
        </div>
    )
}

export default FormForContact
