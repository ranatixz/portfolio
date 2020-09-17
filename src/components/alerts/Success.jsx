import React from 'react'

const Success = ({message}) =>{
    return (
        <div className="alert alert-success text-center" role="alert">
            <p className="my-0">{ message }<span className="mx-2"><i className="fas fa-check"></i></span></p>
        </div>
    )
}

export default Success
