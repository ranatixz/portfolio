import React from 'react'

const Loading = ({message}) =>{
    return (
        <div className="my-2 mx-auto d-flex justify-content-center py-1">
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">{message}</span>
            </div>
            <p className="text-primary mx-2 mt-1">{message} </p>
        </div>
    )
}

export default Loading
