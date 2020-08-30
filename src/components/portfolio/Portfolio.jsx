import React, { useState, useEffect } from 'react'
import Works from './Works'
import Data from '../../data/data'
import useComponentWillMount from '../../hooks/useComponentWillMount'

export const ItemContext = React.createContext()
export const ButtonFunctionsContext = React.createContext()

const Portfolio = () =>{

    const [project, setProject] = useState({})
    const [item, setItem] = useState(0)
    
    useEffect(()=>{
        setProject(Data.projects[item])
    }, [item])
    
    useComponentWillMount(()=>{
        setProject(Data.projects[0])
    })

    const nextItemHandler = () => {
        if(item === Data.projects.length -1){
            console.log('stop')
        }else{
            setItem(prevItem => prevItem + 1)
        }    
    }

    const backItemHandler = () =>{
        setItem(prevItem => prevItem -1)
    }
  
    return (
        <section className="portfolio my-5 py-2">
            <div className="container col-xl-12 my-1 py-1 mx-auto">
                <div className="col-xl-10 mx-auto px-2 my-5">
                     <p className="text-primary font-weight-bold">My Portfolio</p>
                     <h2 className="text-primary">Check My Recent <br/> Works</h2>
                </div>
                <div className="col-xl-9 my-2 mx-auto">
                    <ItemContext.Provider value={item}>
                        <ButtonFunctionsContext.Provider value={{nextItemHandler, backItemHandler}}>
                            <Works 
                                projectDetails={project}
                                nextItemHandler={nextItemHandler}
                            />     
                        </ButtonFunctionsContext.Provider>
                    </ItemContext.Provider>
                </div>
            </div>
        </section>
    )
}
   
export default Portfolio
