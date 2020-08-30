import React, { useContext } from 'react'
import { ItemContext, ButtonFunctionsContext } from './Portfolio'
import Data from '../../data/data'

const Buttons = () =>{
    
    const itemContext = useContext(ItemContext)
    const { nextItemHandler, backItemHandler } = useContext(ButtonFunctionsContext)

    const ButtonBack = () =>{
        return(
            <div className="col-xl-6 col-lg-6 col-md-6 my-1 align-self-start">
                <button className="col-xl-12 btn btn-outline-primary" id="btn-back" onClick={backItemHandler}>Back</button>
            </div>
        )
    }

    const ButtonNext = () =>{
        return(
            <div className="col-xl-6 col-lg-6 col-md-6 my-1 align-self-start">
                <button className="col-xl-12 btn btn-primary" id="btn-next" onClick={nextItemHandler}>Next</button>
            </div>
        )
    }

    return (
        <div className="row d-flex justify-content-between">
            {
                itemContext <= 0 ?
                 null : <ButtonBack/>
            }
            {
                itemContext === Data.projects.length -1 ?
                 null : <ButtonNext/>
            }
         </div>
    )
}

export default Buttons
