import React from 'react'

const Portfolio = () =>{
    return (
        <section className="portfolio my-5 py-2">
            <div className="container col-xl-12 my-1 py-1 mx-auto">
                <div className="col-xl-10 mx-auto px-2 my-5">
                     <p className="text-primary font-weight-bold">My Portfolio</p>
                     <h2 className="text-primary">Check My Recent <br/> Works</h2>
                </div>
                <div className="col-xl-9 my-2 mx-auto">
                    <div className="row my-5">
                        <div className="col-xl-6 col-lg-6 col-md-6 d-flex justify-content-center my-3 py-1">
                            <div className="card h-100 d-inline-block">
                                <div className="card-body d-flex justify-content-center">
                                    <img 
                                        className="col-xl-6" 
                                        src={require('../../images/ieqms.png')}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 my-3 py-1">
                            <div className="h-75 mt-3">
                                <h5 className="text-primary text-center mb-2">IEQMS</h5>
                                <p className="text-primary">
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit
                                    in voluptate velit esse cillum dolore
                                    eu fugiat nulla pariatur.
                                </p>
                            </div>
                            <div className="row d-flex justify-content-between">
                                <div className="col-xl-3 col-lg-4 col-md-6 my-1 align-self-start">
                                    <button className="col-xl-12 btn btn-outline-primary">Back</button>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 my-1 align-self-start">
                                    <button className="col-xl-12 btn btn-primary">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
   
export default Portfolio
