import React from 'react';

const Education = (props) => {
    // since we directly render props (not through a state object), when the parent
    // updates this props values, react will render the view with the new ones
    return (
        <div className="container-fluid list-group-item">
            <div className="row">
                <div className="col">
                    <h5>{props.education.schoolName}</h5>
                </div>
                <div className="col-3 text-secondary text-end">
                    <i 
                        onClick={()=> props.loadEducation(props.education)}
                        className="bi bi-pencil-square"
                        data-bs-toggle="modal" 
                        data-bs-target="#educationModal"
                    ></i>
                    <i 
                        onClick={() => props.deleteEducation(props.education.id)}
                        className="bi bi-trash ms-2" 
                    ></i>
                </div>
            </div>
            <span className="text-secondary text-small">
                <i className="bi bi-calendar3 me-2"></i>{props.education.dateFrom} - {props.education.dateTo}
            </span>
            <p className="mb-0">{props.education.title}</p>
        </div>
    );
};

export default Education;