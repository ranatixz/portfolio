import { useEffect } from 'react'
import Aos from 'aos'

const useAos = (duration) =>{

    useEffect(()=>{
        Aos.init({duration: duration})
    }, [])

}

export default useAos