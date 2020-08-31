import React from 'react'
import useAos from '../../hooks/useAos'

const Works = ({projectDetails, item}) =>{

    useAos(1200)
    
    const putActiveClass = () =>{
        let classes = 'carousel-item '
        return item === 0 ? classes += 'active' : classes
    }

    const {
            img, projectName,
            description, technology
        } = projectDetails
    
    return (
        <div className={putActiveClass()}>
            <div className="row col-xl-9 mt-5 mx-auto">
                <div className="col-xl-6 col-lg-9 m-auto">
                    <div className="mx-auto">
                        <img 
                            className="col-xl-12" 
                            src={require(`../../images/${img}`)}
                        />
                    </div>
                </div>
                <div className="col-xl-6 col-lg-9 m-auto">
                    <div className="mx-auto">
                        <h5 className="text-primary text-center my-3">{projectName}</h5>
                        <p className="text-primary my-2">{description}</p>
                        <div className="my-1" style={{fontSize: '12px'}}>
                            <p className="text-primary font-weight-bold mt-2 mb-0">Technologies: </p>
                            <p className="text-primary">{technology}</p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works
