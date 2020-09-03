import React from 'react'
import useAos from '../../hooks/useAos'

const RowA = ({workDetails}) =>{

    useAos(1200)

    const {
        img, description,
        projectName, technology
    } = workDetails
    
    return (
        <div data-aos='fade-up' className="row my-3 py-2">
            <div className="col-xl-6 col-lg-6 mx-auto my-1">
                <div className="mx-auto">
                    <img 
                        className="col-xl-12" 
                        src={require(`../../images/${img}`)}
                    />
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 mx-auto my-1">
                <div className="mx-auto">
                    <h5 className="text-primary text-center my-3">{projectName}</h5>
                    <p className="text-primary my-2" style={{fontSize: '15px'}}>{description}</p>
                    <div className="my-1" style={{fontSize: '12px'}}>
                        <p className="text-primary font-weight-bold mt-2 mb-0">Technologies: </p>
                        <p className="text-primary">{technology}</p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default RowA
