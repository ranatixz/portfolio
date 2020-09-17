import React from 'react'

const Error = ({message}) =>{
    return (
        <div className="alert alert-danger text-center" role="alert">
            <p className="my-0"><span className="mx-2"><i className="fas fa-exclamation"></i></span>{ message }</p>
        </div>
    )
}

export default Error
