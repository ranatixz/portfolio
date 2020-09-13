import React from 'react'
import useAos from '../../hooks/useAos'

const Image = () =>{

    useAos(1200)

    return (
        <div data-aos="fade-up" className="col-xl-6 col-md-6 col-sm-9 mx-auto">
            <img 
                className="img img-fluid col-xl-9" 
                src={require('../../images/me.png')} 
                alt="Handsome guy"
            />
        </div>
    )
}

export default Image
