import React, { useContext } from 'react'
import Project_Images from './Project_Images'
import Navbar from '../landing_page/Navbar'
import Project_Content from './Project_Content'
import Project_Socials from './Project_Socials'
import Bottom from '../landing_page/Bottom'
import Project_API from '../../api/Project.api'
import { ProjectContext } from '../../Context/ProjectContext'

const Project_Dashboard: React.FC = () => {
    const { image, image2, slackLink, linkedInLink, twitterLink, title, description, websiteLink, githubLink } = useContext(ProjectContext)
    const handleProjectSave: any = () => {
        try {
            const res = Project_API( image, image2, slackLink, linkedInLink, twitterLink, title, description, websiteLink, githubLink);
            console.log(res);
        } catch (error) {
            console.log("Error in handleProjectSave",error);
        }
    }

    return(
        <div className='display-flex pb-10 pl-10 pr-10'>
            <Navbar />
            <Project_Images/>
            <Project_Content />
            <Project_Socials />
            <button onClick={handleProjectSave}>Save</button>
            <div className='mt-40'>
            <Bottom/>
            </div>
        </div>
    )
}

export default Project_Dashboard
