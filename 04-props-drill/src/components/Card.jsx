import React from 'react'
import { Bookmark } from 'lucide-react'
const Card = (props) => {
    return (
        <div className="card">
            <div className="top">
                <img src={props.companyLogo} alt="" />
                <button>Save <Bookmark size={20}/></button>
            </div>
            <div className="center">
                <h3>{props.companyName}<span>{props.daysAgo} days ago</span></h3>
                <h2>{props.position}</h2>
                <div className='tag'>
                    <h4>{props.jobType}</h4>
                    <h4>{props.level}</h4>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>{props.payScale}</h3>
                    <p>{props.location}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>

        
    )
}

export default Card
