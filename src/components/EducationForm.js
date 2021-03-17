import React, { useEffect, useState } from 'react';

const EducationForm = (props) => {
    const [education, setEducation] = useState(props.education); // initial value to render the form (this is called once, only on mount)

    const inputHandler = (e) => {
        setEducation({
            ...education,
            [e.target.name]: e.target.value
        });
    }

    const save = (e) => {
        e.preventDefault();
        props.save(education); // pass the education object to the parent
    }

    // setEducation everytime props.education value changes
    useEffect(() => { 
        setEducation(props.education);
    }, [props.education]);
    
    return (
        <>
            <form onSubmit={save}>
                <div className="mb-3">
                    <label htmlFor="schoolName" className="form-label">School Name</label>
                    <input onChange={inputHandler} type="text" className="form-control" name="schoolName" value={education.schoolName} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title of study</label>
                    <input onChange={inputHandler} type="text" className="form-control" name="title" value={education.title} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="dateFrom" className="form-label">From</label>
                    <input onChange={inputHandler} type="date" className="form-control" name="dateFrom" value={education.dateFrom} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="dateTo" className="form-label">To</label>
                    <input onChange={inputHandler} type="date" className="form-control" name="dateTo" value={education.dateTo} required />
                </div>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary ms-2">Save</button>
            </form>
        </>
    );
};

export default EducationForm;