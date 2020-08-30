import React, { useState, useEffect } from 'react'
import useAos from '../../hooks/useAos'
import { CSSTransition } from 'react-transition-group'
import useComponentWillMount from '../../hooks/useComponentWillMount'
import './style.css'
import Buttons from './Buttons'

const Works = ({projectDetails}) =>{

    useAos(1200)
    
    // useEffect(()=>{
    //     console.log('works component rendered')
    // }, [projectDetails])

    const {
            img, projectName,
            description, technology
        } = projectDetails
    
    return (
        <div className="row my-5">
            <div className="col-xl-6 col-lg-6 col-md-6 d-flex justify-content-center my-3 py-1">
                <div data-aos="fade-up" className="h-100 d-inline-block">
                    <CSSTransition
                        in={true}
                        appear={true}
                        timeout={1000}
                        classNames={"fade-appear"}
                    >
                        <div className="d-flex justify-content-center mt-3">
                            <img 
                                className="col-xl-12" 
                                src={require(`../../images/${img}`)}
                            />
                        </div>
                     </CSSTransition>
                </div>       
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 my-3 py-1">
                <div data-aos="fade-up" className="mt-1 mb-4">
                    <h5 className="text-primary text-center my-3">{projectName}</h5>
                    <p className="text-primary my-2">{description}</p>
                    <div className="my-2">
                        <p className="text-primary font-weight-bold mt-2 mb-0">Technologies: </p>
                        <p className="text-primary">{technology}</p>
                    </div>       
                </div>
                <Buttons/>
            </div>
        </div>
    )
}

export default Works
