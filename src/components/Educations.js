import React, { useState } from 'react';
import uniqid from 'uniqid';
import Modal from 'bootstrap/js/dist/modal';
import EducationForm from './EducationForm';
import Education from './Education';

const Educations = () => {

    const [educations, setEducations] = useState([
        {
            id: uniqid.time(),
            schoolName: 'TheOdinProject',
            title: 'Fullstack Developer',
            dateFrom: '1980-09-20',
            dateTo: '1984-06-15'
        },
        {
            id: uniqid.time(),
            schoolName: 'Oxford University',
            title: 'Computer Science Degree',
            dateFrom: '1976-09-20',
            dateTo: '1980-06-15'
        }
    ]);

    const initialEducationState = {
        id: '',
        schoolName: '',
        title: '',
        dateFrom: '',
        dateTo: ''
    };

    const [education, setEducation] = useState(initialEducationState);

    const loadEducation= (ed) => {
        setEducation(ed);
    };

    const saveEducation = (ed) => {
        if(ed.id) { // edit
            setEducations(prevEducations => {
                return prevEducations.map(e => {
                    if(e.id === ed.id) return ed;
                    return e;
                });
            });
        } else { // add
            ed.id = uniqid.time();
            setEducations((prevEducations) => {
                return prevEducations.concat(ed);
            });
        }
        Modal.getInstance(document.getElementById('educationModal')).hide();
    };

    const deleteEducation = (id) => {
        setEducations(prevEducations => {
            return prevEducations.filter(ed => ed.id !== id);
        });
    };

    return (
        <>
            <div className="container-fluid border-bottom border-primary border-5 mt-4 mb-2">
                <div className="row">
                    <div className="col">
                        <h3 className="text-primary">Education</h3>
                    </div>
                    <div className="col-4 text-end">
                        <button
                            onClick={() => loadEducation(initialEducationState)}
                            type="button" 
                            className="btn btn-outline-primary btn-sm min-width-60px"
                            data-bs-toggle="modal" 
                            data-bs-target="#educationModal"
                        >
                            <i className="bi bi-plus-circle me-2"></i>Add
                        </button>
                    </div>
                </div>
            </div>
            <div className="list-group list-group-flush">
                {educations.length > 0 ? educations.map(ed => {
                    return (
                        <Education 
                            key={ed.id} 
                            education={ed} 
                            loadEducation={loadEducation} 
                            deleteEducation={deleteEducation}
                        />
                    )
                }) : <p className="ps-2">No educations. Please add some...</p>}
            </div>
            <div className="modal fade" id="educationModal" tabIndex="-1" aria-labelledby="educationModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="educationModalLabel">Educational experience</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <EducationForm 
                                education={education} 
                                save={saveEducation} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Educations;