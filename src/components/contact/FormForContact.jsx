import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import firebase from '../../firebase/base'
import { v4 as uuid }  from 'uuid'
import { initialValues, validationSchema } from './FormikPropData'
import Error from '../alerts/Error'
import Loading from '../alerts/Loading'
import Success from '../alerts/Success'
import './style.css'


const FormForContact = () =>{

    const [isErr, setIsErr] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    
    const getClassHandler = (error, touched) =>{
        let className = 'form-control'

        if(error && touched){
            className += ' border border-danger'
        }

        return className
    }

    const timeOutHandler = () =>{
        setTimeout(()=>{
            setIsErr(false)
            setIsSuccess(false)
        }, 5000)
    }

    const setFalseHandler = () =>{
        setIsSuccess(false)
        setIsErr(false)
    }

    const addQuery = async (values) =>{
        const {
            name, email,
            subject, message
        } = values

        await firebase.firestore().collection('queries').add({
            id: uuid(),
            name: name,
            email: email,
            subject: subject,
            message: message,
            date: new Date().toLocaleString()
        })
        .then((response)=>{
            setIsSuccess(true)
            timeOutHandler()
        })
        .catch(err =>{
            setIsErr(true)
            timeOutHandler()
        })
       
    }
    
    return (
        <div className="col-xl-8 col-lg-8 form-contact mb-3">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit = {
                    async (values, {resetForm}) =>{
                        await addQuery(values)
                        resetForm()
                    } 
                }
            >  
            {
                formikProps =>{
                    const { errors, touched, isSubmitting } = formikProps
                    return(
                        <Form id='contact-form'>
                            {
                               isSubmitting && <Loading message="Submitting query.."/>
                            }
                            {
                                isSuccess && <Success message="Success!"/>
                            }
                            {
                                isErr && <Error message="Something went wrong!"/>
                            }
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
                                            onFocus={setFalseHandler}
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
                                            onFocus={setFalseHandler}
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
                                            onFocus={setFalseHandler}
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
                                            onFocus={setFalseHandler}
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
