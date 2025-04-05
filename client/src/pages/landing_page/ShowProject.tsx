import React from "react"
import IndividualProjects from "./IndividualProjects"

const ShowProject: React.FC = () => {
    return(
        <div>
            <div className="w-full h-full flex item-center justify-center m-5 flex-col mb-5 pb-20" >
                <IndividualProjects />
            </div>
        </div>
    )
}

export default ShowProject