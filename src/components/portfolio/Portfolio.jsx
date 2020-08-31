import React from 'react'
import Carousel from './Carousel'

const Portfolio = () =>{
    return (
        <section className="portfolio my-5 py-2">
            <div className="container col-xl-12 my-1 py-1 mx-auto">
                <div className="col-xl-10 mx-auto px-2">
                     <p className="text-primary font-weight-bold">My Portfolio</p>
                     <h2 className="text-primary">Check My Recent <br/> Works</h2>
                </div>
                <div className="mb-4 pb-5">
                    <Carousel/>
                </div>
            </div>
        </section>
    )
}
   
export default Portfolio
