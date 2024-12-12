import { div } from 'motion/react-client';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {company_logo,title,company,_id}=useLoaderData()
    // console.log(jobs);
    
    return (
        <div className='flex justify-center my-10'>
            <div className="card bg-base-100 w-96 shadow-2xl">
        <figure>
          <img
            src={company_logo}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{company}</p>
          <div className="card-actions justify-end">
            <Link to={`/jobApply/${_id}`}>
            <button className="btn btn-primary">Apply Now</button>
            </Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default JobDetails;