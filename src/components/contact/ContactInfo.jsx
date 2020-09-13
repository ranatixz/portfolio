import React from 'react'

const ContactInfo = () =>{
    return (
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
                    <h5>09075801674</h5>
                </div>
            </div>
        </div> 
    )
}

export default ContactInfo
