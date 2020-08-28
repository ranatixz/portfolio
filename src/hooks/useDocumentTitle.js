import { useEffect } from 'react'

const useDocumentTitle = initialTitle =>{
    
    useEffect(()=>{
        document.title = initialTitle
    }, [initialTitle])

}

export default useDocumentTitle
