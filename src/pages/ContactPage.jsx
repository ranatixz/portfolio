import React from 'react'
import Banner from '../components/banner/Banner'
import Contact from '../components/contact/Contact'
import useDocumentTitle from '../hooks/useDocumentTitle'
const ContactPage = () =>{

    useDocumentTitle('Contact Vincent')
    return (
       <React.Fragment>
           <Banner text="Contact"/>
           <Contact/>
       </React.Fragment>
    )
}

export default ContactPage
