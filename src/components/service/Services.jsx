import React, { useState, useEffect } from 'react'
import Service from './Service'
import Data from '../../data/data'

const Services = () =>{

    const [services, setServices] = useState([])

    useEffect(()=>{
        setServices(Data.services)
    }, [])

    return (
        <section className='service my-2 py-2'>
            <div className="container col-xl-12 my-1 py-1 mx-auto">
                <div className="col-xl-10 mx-auto px-2 mt-3 mb-5">
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
