import React, { useEffect } from 'react'
import './style.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Service = ({serviceInfo}) =>{

    useEffect(()=>{
        Aos.init({duration: 1200})
    }, [])

    const {img, service, description} = serviceInfo

    return (
        <div data-aos="fade-up" className="service-item col-xl-3 col-lg-3 col-md-5 col-sm-9 mx-1 mt-3 my-2 pt-5 pb-2">
            <center>
                <img 
                    className="img img-rounded-circle col-xl-4 col-lg-6 col-md-6 col-sm-4 col-5 my-5" 
                    src={require(`../../icons/${img}`)}
                />
            </center>
            <h3 className="h3 text-center text-primary">{service}</h3>
            <p className="text-center text-primary my-3">{description}</p>
            <div className="mx-auto col-xl-9 my-5">
                <a className="btn btn-outline-primary col-lg-12">Learn more</a>
            </div>
        </div>
    )
}

export default Service
