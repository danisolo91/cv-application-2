import React, { useState } from 'react';
import uniqid from 'uniqid';
import Modal from 'bootstrap/js/dist/modal';
import Job from './Job';
import JobForm from './JobForm';

const Jobs = () => {

    const [jobs, setJobs] = useState([
        {
            id: uniqid.time(),
            companyName: 'Facebook,Inc',
            position: 'Software Engineer',
            tasks: 'I was the lead of a scrum team. Developing new functions and lorem ipsum dolor set amet.',
            dateFrom: '1976-09-20',
            dateTo: '1988-05-20'
        },
        {
            id: uniqid.time(),
            companyName: 'Alphabet Company',
            position: 'Backend Developer',
            tasks: 'I was the lead of a scrum team. Developing new functions and lorem ipsum dolor set amet.',
            dateFrom: '1983-09-20',
            dateTo: '1988-09-20'
        }
    ]);

    const initialJobState = {
        id: '',
        companyName: '',
        position: '',
        tasks: '',
        dateFrom: '',
        dateTo: ''
    };

    const [job, setJob] = useState(initialJobState);

    // set job state depending on whether you click add (initial state) or edit (job from array)
    const loadJob = (j) => {
        setJob(j);
    };

    const save = (jb) => {
        if(jb.id) { // edit
            setJobs(prevJobs => {
                return prevJobs.map(j => {
                    if(jb.id === j.id) return jb;
                    return j;
                })
            });
        } else { // add
            jb.id = uniqid.time();
            setJobs(prevJobs => {
                return prevJobs.concat(jb);
            });
        }
        Modal.getInstance(document.getElementById('experienceModal')).hide();
    };

    const deleteJob = (id) => {
        setJobs(prevJobs => {
            return prevJobs.filter(j => j.id !== id);
        });
    };

    return (
        <>
            <div className="container-fluid border-bottom border-primary border-5 mt-4 mb-2">
                <div className="row">
                    <div className="col">
                        <h3 className="text-primary">Experience</h3>
                    </div>
                    <div className="col-4 text-end">
                        <button 
                            onClick={() => loadJob(initialJobState)}
                            type="button" 
                            className="btn btn-outline-primary btn-sm min-width-60px"
                            data-bs-toggle="modal" 
                            data-bs-target="#experienceModal"
                        >
                            <i className="bi bi-plus-circle me-2"></i>Add
                        </button>
                    </div>
                </div>
            </div>
            <div className="list-group list-group-flush">
                {jobs.length > 0 ? jobs.map(job => {
                    return (
                        <Job 
                            key={job.id} 
                            job={job} 
                            loadJob={loadJob}
                            delete={deleteJob}
                        />
                    )
                }) : <p className="ps-2">No experience, please add some...</p>}
            </div>
            <div className="modal fade" id="experienceModal" tabIndex="-1" aria-labelledby="experienceModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="experienceModalLabel">Professional experience</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <JobForm 
                                job={job} 
                                save={save}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Jobs;