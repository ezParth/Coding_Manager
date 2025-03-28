import React from "react"
import IndividualProjects from "./IndividualProjects"

const ShowProject: React.FC = () => {
    return(
        <div>
            <div className="w-full h-full flex item-center justify-center m-5 flex-col mb-5 pb-20" >
                <h1 className="text-black font-sans text-4xl font-bold flex items-center justify-center m-5 mb-10">YOUR PROJECTS(Under Construction:)</h1>
                <IndividualProjects />
            </div>
        </div>
    )
}

export default ShowProject