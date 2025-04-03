import { useState, useRef, useEffect } from "react";

function WorkExperience() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      company: 'All Span Building Systems LTD.',
      position: 'Project Designer (EWP)',
      workYear: 'May 2023 - Present',
      location: 'Cochrane, Alberta',
      bulletPoints: [
        'Utilized Mitek software to create precise structural designs, showcasing proficiency in technical problem-solving and software-based modeling, and rapidly adapting to new software tools.',
        'Effectively communicated complex technical concepts to both technical and non-technical stakeholders, enhancing cross-functional collaboration and client satisfaction.',
        'Applied strong attention to detail in analyzing structural parameters, ensuring robust and accurate design configurations—skills directly transferable to writing, testing, and debugging high-quality code.',
        'Maintained organized documentation and workflow processes'
      ]
    },
    {
      id: 2,
      company: 'East Side Marios',
      position: 'Supervisor',
      workYear: 'April 2016 - Jan 2020',
      location: 'Niagara Falls, Ontario',
      bulletPoints: [
        'Led a team of seven in a fast-paced environment, developing strong team management and leadership skills.',
        'Created employee work schedules, optimizing workflow efficiency',
        'Ensured quality control and compliance with safety regulations, reinforcing attention to detail'
      ]
    }
  ]);
  const nextJobId = useRef(3);

  // Function to adjust textarea height
  const adjustTextareaHeight = (element) => {
    element.style.height = 'auto';
    element.style.height = element.scrollHeight + 'px';
  };

  // Effect to adjust heights on content change
  useEffect(() => {
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
      adjustTextareaHeight(textarea);
    });
  }, [jobs]);

  // Add a new job with a sequential ID
  const addJob = () => {
    const newJob = {
      id: nextJobId.current,
      company: '',
      position: '',
      workyear: '',
      location: '',
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

  const updateJobYear = (id, field, value) => {
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
            <div>
              <input type='text' className="workYear" onChange={(e) => updateJobYear(job.id, 'workYear', e.target.value)} value={job.workYear}/>
              <input type="text" className="jobLocation" value={job.location}/>
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
                onChange={(e) => {
                  updateBulletPoint(job.id, index, e.target.value);
                  adjustTextareaHeight(e.target);
                }}>
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
