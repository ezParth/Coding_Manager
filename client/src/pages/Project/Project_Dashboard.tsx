import React from 'react'
import Project_Images from './Project_Images'
import Navbar from '../landing_page/Navbar'
import Project_Content from './Project_Content'
import Project_Socials from './Project_Socials'
import Bottom from '../landing_page/Bottom'

const Project_Dashboard: React.FC = () => {

    return(
        <div className='display-flex pb-10 pl-10 pr-10'>
            <Navbar />
            <Project_Images/>
            <Project_Content />
            <Project_Socials />
            <div className='mt-40'>
            <Bottom/>
            </div>
        </div>
    )
}

export default Project_Dashboard
