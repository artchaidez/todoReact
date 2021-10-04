import React from 'react';

const start = Date.now();
const dateCreated = Date(); 

export default function Todo ({ title , description}) {

    description = (typeof description !== 'undefined') ?  description : "";
    const millis = Date.now() - start;

    const [complete, setComplete] = React.useState(false);
    const handleChange = () => {
        setComplete(!complete);
    };

    const [dateCompleted, setDateCompletedTime] = React.useState(false);
    const handleCompletedTime = () => {
        if (!complete)
            setDateCompletedTime(title + " was completed " + Date() );
        else 
            setDateCompletedTime(title + " was created " + Math.floor(millis / 1000) + " seconds ago.");
    }

    function testFunction() {
        handleCompletedTime();
        handleChange();
    }

    // for checked, dateCompleted/complete order matters
    // warning on line 39,  Unexpected use of comma operator  no-sequences
    return (
        <div>
            <h2>{title}</h2>
            <h4>{description}</h4>

            <p>Created: {dateCreated} </p>    

            <input type="checkbox" checked={dateCompleted, complete} onChange={testFunction} /> Complete
            <p>{dateCompleted}</p>
            <hr/>
        </div>               
    )
}