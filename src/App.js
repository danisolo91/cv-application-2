import React from 'react';
import GeneralInfo from './components/GeneralInfo';
import Educations from './components/Educations';
import Jobs from './components/Jobs';

const App = (props) => {

    return (
        <div className="container mb-5">
            <h1 className="text-center mt-3 mb-3">CV Application</h1>
            <div className="container-fluid border p-3 rounded">
                <GeneralInfo />
                <Educations />
                <Jobs />
            </div>
            <div className="text-center mt-3 text-small">Made by Daniel Solomon</div>
        </div>
    );
};

export default App;