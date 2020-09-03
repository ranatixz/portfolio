import React from 'react'
import Data from '../../data/data'
import RowA from './RowA'
import RowB from './RowB'

const Portfolio = () =>{

    const { projects } = Data
    
    return (
        <section className="portfolio my-5 py-2">
            <div className="container col-xl-12 my-1 py-1 mx-auto">
                <div className="col-xl-10 mx-auto px-2">
                     <p className="text-primary font-weight-bold">My Portfolio</p>
                     <h2 className="text-primary">Check My Recent <br/> Works</h2>
                </div>
                <div className="my-5 py-5">
                    <div className="col-xl-9 mx-auto">
                        {
                            projects.map((project, index) =>{
                                return(

                                    index % 2 === 0 ?
                                        <RowA
                                            key={index}
                                            workDetails={project}
                                            item={index}
                                        />
                                    :   
                                        <RowB
                                            key={index}
                                            workDetails={project}
                                            item={index}
                                        />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
   
export default Portfolio
