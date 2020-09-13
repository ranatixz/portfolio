import React from 'react'
import useAos from '../../hooks/useAos'

const Paragraph = () =>{

    useAos(1200)

    return (
        <div data-aos="fade-up" className="col-xl-6 col-md-6 col-sm-9 text-primary py-5 mx-auto">
            <p className="font-weight-bold mt-4">About Me</p>
            <h2 className="h2 my-1 mb-4">Web Developer</h2>
            <p className="my-3">
                Hi! I am vincent lanchita I have a 1 year experience
                in frontend development and capable in HTML5, CSS3,
                Bootstrap, JavaScript, jQuery, Reactjs, Nextjs. In addition i 
                can do also software version control using Git/Github
                and server side in web, android app, desktop
                app development such as PHP, MYSQL, SQL Server, C#,
                C++ and Java.
            </p>
            <a className="btn btn-primary my-3" href="https://dropmb.com/files/13b5f4374bfe138171a30ca9afb87126.docx">Download CV</a>
        </div>
    )
}

export default Paragraph
