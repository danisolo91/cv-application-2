import React, { useState } from 'react';
import Modal from 'bootstrap/js/dist/modal'; // make sure bootstrap.js is imported only once (backdrop won't work on .hide())

const GeneralInfo = (props) => {
    const [person, setPerson] = useState({
        fullName: 'Daniel Solomon',
        email: 'example@example.com',
        phoneNumber: '+34-666-555-444'
    });

    const inputHandler = (e) => {
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        });
    };

    const editPerson = (e) => {
        e.preventDefault();
        Modal.getInstance(document.getElementById('generalInfoModal')).hide();
    }

    return (
        <>
            <div className="container p-3 bg-primary text-light rounded">
                <div className="row">
                    <div className="col">
                        <h2>{person.fullName}</h2>
                        <div>
                            <i className="bi bi-envelope"> </i> 
                            <span>{person.email}</span>
                        </div>
                        <div>
                        <i className="bi bi-telephone"> </i>
                            <span>{person.phoneNumber}</span>
                        </div>
                    </div>
                    <div className="col-2 text-light text-end">
                        <i 
                            className="bi bi-pencil-square"
                            data-bs-toggle="modal" 
                            data-bs-target="#generalInfoModal"
                        ></i>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="generalInfoModal" tabIndex="-1" aria-labelledby="generalInfoLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="generalInfoLabel">General information</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={editPerson}>
                            <div className="mb-3">
                                <label htmlFor="fullName" className="form-label">Full Name</label>
                                <input onChange={inputHandler} type="text" className="form-control" name="fullName" value={person.fullName} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input onChange={inputHandler} type="email" className="form-control" name="email" value={person.email} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                <input onChange={inputHandler} type="text" className="form-control" name="phoneNumber" value={person.phoneNumber} />
                            </div>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary ms-2">Submit</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GeneralInfo;