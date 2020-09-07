import React from 'react'
import MapComp from './MapComp'
import FormForContact from './FormForContact'

const Contact = () =>{
    return (
       <section className="contact my-2 py-3">
            <div className="container col-xl-12 mx-auto">
                <div className="col-xl-10 mx-auto">
                    <p className="text-primary font-weight-bold">Contact</p>
                    <h2 className="text-primary">Get in touch</h2>
                </div>
                {/* <MapComp/> */}
                <FormForContact/>
            </div>
       </section>
    )
}

export default Contact
