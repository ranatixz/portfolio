import React, { useState } from 'react'
import Service from './Service'

const Services = () =>{

    const [services] = useState([
        {
            img: 'html-icon.png',
            service: 'Web Development',
            description: 'I can build a blog, e-commerce, directory and contact and magazine sites for your product.'
        },
        {
            img: 'mobile-app.png',
            service: 'Mobile App',
            description: 'Capable in making android app that connected to the arduino through Restful API.'
        },
        {
            img: 's3.png',
            service: 'Dektop App',
            description: 'I can build a desktop app just like point of sale, banking and etc. in a modern user interface.'
        }
    ])

    return (
        <section className='service my-5 py-2'>
            <div className="container col-xl-12 my-1 py-1 mx-auto">
                <div className="col-xl-10 mx-auto px-2 my-5">
                     <p className="text-primary font-weight-bold">My Services</p>
                     <h2 className="text-primary">What Service <br/>I Offer For You</h2>
                </div>
                <div className="row d-flex justify-content-center mb-2 px-2">
                    {
                        services.map((service, index) =>{
                            return(
                                <Service 
                                    key={index}
                                    serviceInfo={service}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services
