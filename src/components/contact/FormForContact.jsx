import React from 'react'
import './style.css'

const FormForContact = () =>{
    return (
        <div className="row col-xl-9 mx-auto my-5 px-0">
            <div className="col-xl-8 col-lg-8 form-contact mb-5">
                <form action="post">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <textarea 
                                    className="form-control" 
                                    placeholder="Enter a message"
                                    cols="30"
                                    rows="6"
                                />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder="Enter your name"
                                />
                            </div>
                        </div>
                        <div className="col-sm-6">
                             <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder="Enter subject"
                                />
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                            <button
                                className="btn btn-outline-primary col-xl-4 col-lg-6"
                                type="submit"
                            >
                               Send message
                            </button> 
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-lg-4 py-4 px-3">
                <div className="media contact-info px-auto">
                    <span className="contact-info-icon">
                         <i className="fas fa-home"></i>
                    </span>
                    <div className="media-body">
                        <h5>Davao City, Philippines</h5>
                        <p>Brgy 2-A Magallanes Street</p>
                    </div>
                </div>
                <div className="media contact-info">
                    <span className="contact-info-icon">
                        <i className="far fa-envelope"></i>
                    </span>
                    <div className="media-body">
                        <h5>lanchitavincent@gmail.com</h5>
                        <p>Send your query anytime!</p>
                    </div>
                </div>
                <div className="media contact-info px-auto">
                    <span className="contact-info-icon ml-2">
                        <i className="fas fa-mobile-alt"></i>
                    </span>
                    <div className="ml-1 media-body">
                        <h5>09202925151</h5>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default FormForContact
