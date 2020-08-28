import React, { useState } from 'react'
import Service from './Service'

const Services = () =>{

    const [services] = useState([
        {
            img: 'html-icon.png',
            service: 'Web Development',
            description: 'I can build a blog, e-commerce, directory and contact and magazine sites for your product.',
            link: "https://en.wikipedia.org/wiki/Web_development"
        },
        {
            img: 'mobile-app.png',
            service: 'Mobile App',
            description: 'Capable in making android app that connected to the arduino through Restful API.',
            link: "https://en.wikipedia.org/wiki/Mobile_app_development#:~:text=Mobile%20app%20development%20is%20the,digital%20assistants%20or%20mobile%20phones.&text=As%20part%20of%20the%20development,the%20creation%20of%20mobile%20apps."
        },
        {
            img: 's3.png',
            service: 'Desktop App',
            description: 'I can build a desktop app just like point of sale, banking and etc. in a modern user interface.',
            link: "https://www.google.com/search?sxsrf=ALeKk01tV0RNLK9DoFW8uacv0Qs8OZP7_w%3A1598620444686&ei=HANJX-jKKYyGoATmmIKoDg&q=desktop+application+development+meaning&oq=desktop+application+development+mea&gs_lcp=CgZwc3ktYWIQAxgAMgUIIRCgATIFCCEQoAE6AggAOgQIABBDOgYIABAWEB5QogVYggpg8hZoAHAAeAGAAfgHiAG6FpIBDTAuMS4xLjUtMS4xLjGYAQCgAQGqAQdnd3Mtd2l6wAEB&sclient=psy-ab"
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
