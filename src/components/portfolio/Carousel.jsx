import React from 'react'
import Data from '../../data/data'
import Works from './Works'


const Carousel = () =>{
    return (
        <div id="carouselExampleControls" className="carousel slide px-4" data-ride="carousel">
            <div className="carousel-inner">
                    {
                        Data.projects.map((project, index)=>{
                            return(
                                <Works 
                                    key={index}
                                    projectDetails={project}
                                    item={index}
                                />
                            )   
                        })
                    }
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
      </div>
    )
}

export default Carousel
