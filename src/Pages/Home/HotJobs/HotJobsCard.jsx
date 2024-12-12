import React from 'react';
import { Link } from 'react-router-dom';

const HotJobsCard = ({job}) => {
    console.log(job);
    const {title,_id,company_logo,location,jobType,description,company,category,requirements}=job

    return (
        <div className="card card-compact bg-base-100  shadow-2xl border-blue-400">
       <div className='flex items-center gap-3'>
       <figure>
          <img
            src={company_logo}
            alt="Shoes" />
        </figure>
        <div>
            <h1 className="text-2xl">{company}</h1>
            <p>{location}</p>
        </div>
       </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className='flex gap-2 flex-wrap'>
            {
                requirements.map(skill =><p className='bg-slate-100 rounded-lg'>{skill}</p>)
            }
          </div>
          <div className="card-actions justify-end">
           <Link to={`/jobs/${_id}`}>
           <button className="btn btn-primary">Applay</button>
           </Link>
          </div>
        </div>
      </div>
    );
};

export default HotJobsCard;