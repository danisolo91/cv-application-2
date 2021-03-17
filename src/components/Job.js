import React from 'react';

const Job = (props) => {
    return (
        <div className="container-fluid list-group-item">
            <div className="row">
                <div className="col">
                    <h5>{props.job.companyName}</h5>
                </div>
                <div className="col-3 text-secondary text-end">
                    <i 
                        onClick={() => props.loadJob(props.job)}
                        className="bi bi-pencil-square"
                        data-bs-toggle="modal" 
                        data-bs-target="#experienceModal"
                    ></i>
                    <i 
                        onClick={() => props.delete(props.job.id)}
                        className="bi bi-trash ms-2"
                    ></i>
                </div>
            </div>
            <span className="text-secondary text-small">
                <i className="bi bi-calendar3 me-2"></i>{props.job.dateFrom} - {props.job.dateTo}
            </span>
            <p className="mb-0"><i>{props.job.position}</i>. {props.job.tasks}</p>
        </div>
    );
};

export default Job;