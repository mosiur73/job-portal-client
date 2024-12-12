import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyApplication = () => {

    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
        
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])
    return (
        <div>
            <h2>my application {jobs.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        jobs.map(job =>   <tr key={job._id}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={job.company_logo}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{job.title}</div>
                  <div className="text-sm opacity-50">{job.location}</div>
                </div>
              </div>
            </td>
            <td>
             {job.company}
              <br />
             
            </td>
          
            <th>
              <button className="btn btn-warning">Delete</button>
            </th>
          </tr>)
    }
     
     
    </tbody>
  
  </table>
</div>
        </div>
    );
};

export default MyApplication;