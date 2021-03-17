import React, { useEffect, useState } from 'react';

const JobForm = (props) => {

    const [job, setJob] = useState(props.job);

    useEffect(() => {
        setJob(props.job);
    }, [props.job]);

    const inputHandler = (e) => {
        setJob({
            ...job,
            [e.target.name]: e.target.value
        });
    };

    const save = (e) => { 
        e.preventDefault();
        props.save(job);
    };

    return (
        <>
            <form onSubmit={save}>
                <div className="mb-3">
                    <label htmlFor="companyName" className="form-label">Company Name</label>
                    <input onChange={inputHandler} type="text" className="form-control" name="companyName" value={job.companyName} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="position" className="form-label">Position of title</label>
                    <input onChange={inputHandler} type="text" className="form-control" name="position" value={job.position} required />
                </div>               
                <div className="mb-3">
                    <label htmlFor="tasks" className="form-label">Tasks</label>
                    <textarea onChange={inputHandler} className="form-control" name="tasks" value={job.tasks} />
                </div>
                <div className="mb-3">
                    <label htmlFor="dateFrom" className="form-label">Date From</label>
                    <input onChange={inputHandler} type="date" className="form-control" name="dateFrom" value={job.dateFrom} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="dateTo" className="form-label">To</label>
                    <input onChange={inputHandler} type="date" className="form-control" name="dateTo" value={job.dateTo} required />
                </div>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary ms-2">Save</button>
            </form>
        </>
    );
}

export default JobForm;