import React from 'react'
import FormForContact from './FormForContact'
import ContactInfo from './ContactInfo'

const Contact = () =>{
    return (
       <section className="contact my-2 py-3">
            <div className="container col-xl-12 mx-auto pt-4 pb-1">
                <div className="col-xl-10 mx-auto">
                    <p className="text-primary font-weight-bold">Contact</p>
                    <h2 className="text-primary">Get in touch</h2>
                </div>
                <div className="row col-xl-9 mx-auto mt-5 mb-2 px-0">
                     <FormForContact/>
                     <ContactInfo/>
                </div>
            </div>
       </section>
    )
}

export default Contact
