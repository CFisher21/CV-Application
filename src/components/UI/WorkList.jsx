import { useState, useRef } from "react";

function WorkExperience() {
  const [jobs, setJobs] = useState([]);
  const nextJobId = useRef(1);

  // Add a new job with a sequential ID
  const addJob = () => {
    const newJob = {
      id: nextJobId.current,
      company: '',
      position: '',
      bulletPoints: []
    };
    nextJobId.current++;
    setJobs([...jobs, newJob]);
  };

  // Update a specific field of a job
  const updateJobField = (id, field, value) => {
    setJobs(
      jobs.map(job =>
        job.id === id ? { ...job, [field]: value } : job
      )
    );
  };

  // Remove a job by filtering it out of the jobs array
  const removeJob = (jobId) => {
    setJobs(jobs.filter(job => job.id !== jobId));
  };

  // Add an empty bullet point to a specific job
  const addBulletPoint = (jobId) => {
    setJobs(
      jobs.map(job =>
        job.id === jobId
          ? { ...job, bulletPoints: [...job.bulletPoints, ''] }
          : job
      )
    );
  };

  // Update a bullet point for a specific job
  const updateBulletPoint = (jobId, bulletIndex, value) => {
    setJobs(
      jobs.map(job => {
        if (job.id === jobId) {
          const newBulletPoints = job.bulletPoints.map((bp, index) =>
            index === bulletIndex ? value : bp
          );
          return { ...job, bulletPoints: newBulletPoints };
        }
        return job;
      })
    );
  };

  // Remove a bullet point from a specific job
  const removeBulletPoint = (jobId, bulletIndex) => {
    setJobs(
      jobs.map(job => {
        if (job.id === jobId) {
          const newBulletPoints = job.bulletPoints.filter((_, index) => index !== bulletIndex);
          return { ...job, bulletPoints: newBulletPoints };
        }
        return job;
      })
    );
  };

  return (
    <div>
      <button onClick={addJob} className="addJob">Add Job</button>
      {jobs.map((job) => (
        <div key={job.id} className="jobContainer">
          <div className="jobTitleContainer">
            <div className="jobTitle" >
              <input
                type="text"
                placeholder="Company"
                className="company"
                value={job.company}
                onChange={(e) => updateJobField(job.id, 'company', e.target.value)}
              />
              <input
                type="text"
                placeholder="Position"
                className="position"
                value={job.position}
                onChange={(e) => updateJobField(job.id, 'position', e.target.value)}
              />
            </div>
            {/* Remove job button */}
            <button onClick={() => removeJob(job.id)} className="deleteBtn3">X</button>
          </div>

          <button onClick={() => addBulletPoint(job.id)} className="addBullet">Add Bullet Point</button>

          {job.bulletPoints.map((bullet, index) => (
            <div key={index} className='bullets'>
              <textarea 
                type="text"
                placeholder="Describe your responsibility or achievement..."
                value={bullet}
                onChange={(e) => updateBulletPoint(job.id, index, e.target.value)}>
                </textarea>
              {/* Remove bullet point button */}
              <button onClick={() => removeBulletPoint(job.id, index)} className="deleteBtn2">X</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default WorkExperience;
