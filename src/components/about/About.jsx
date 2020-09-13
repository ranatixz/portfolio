import React from 'react'
import Image from './Image'
import Paragraph from './Paragraph'

const About = () =>{

    return (
        <section className='about pt-5 pb-1'>
            <div className="container col-xl-9 mt-5 mb-2 py-5 mx-auto">
                <div className="row">
                    <Image/>
                    <Paragraph/>
                </div>
            </div>
        </section>   
    )
}

export default About
