import React from 'react'
import './style.css'

const Home = () =>{
    return (
       <section className='home py-5'> 
            <div className="container col-xl-9 my-5 py-5 mx-auto">
                <div className="my-5 py-5">
                    <h1 className="display-3 text-center text-primary">Vincent Lanchita</h1>
                    <p className="text-primary text-center font-weight-bold mt-3 min-jump">Scroll to proceed</p>
                    <div className="col-md-12 wrapper pt-3">
                        <div className="col-sm-0 mt-5 jumping-ball jump m-auto px-auto pl-1 pt-1">
                            <i className="fas fa-chevron-down down"></i>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    )
}

export default Home
