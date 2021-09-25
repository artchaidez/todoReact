import React from 'react';
import { useState } from 'react';

/*  - title (this is a required field, form should not submit without it)
    - description (this is an optional field, it is not required to submit the form)
    - dateCreated (this field is set dynamically when the form is submitted –
    research the JS lib method Date.now())
    - complete (a boolean initially set to false when a Todo is created)
    - dateCompleted (this field is set dynamically when the form */

/* When rendering a Todo a checkbox should be used to display the value of the
“complete” field. Checking/unchecking the checkbox should update the value of the
“complete” field appropriately. The dateCompeleted field should also be updated
(again, dynamically utilizing Date.now()) */
 

    const start = Date.now();
    const dateCreated = Date(); 

export default function Todo ({ title , description}) {

    description = (typeof description !== 'undefined') ?  description : ""
    //const dateCompleted;
    // TODO: Dynamic update for dateCompleted. use Date.now()

    const [complete, setComplete] = React.useState(false);
    const handleChange = () => {
        setComplete(!complete);
    };

    const [dateCompleted, setDateCompletedTime] = React.useState(false);
    const handleCompletedTime = () => {
        const millis = Date.now() - start;

        if (!complete)
            setDateCompletedTime(title + " was completed " + Date() );
            //setDateCompletedTime(title + " is complete.");
        else 
            setDateCompletedTime(title + " was created " + Math.floor(millis / 1000) + " seconds ago.");
            //setDateCompletedTime(title + " was created " + Date() + " seconds ago.");
    }

    function testFunction() {
        handleCompletedTime();
        handleChange();
    }

    // for checked, dateCompleted/complete order matters
    return (
        <div>
            <h2>{title}</h2>
            <h4>{description}</h4>

            <p>Created: {dateCreated} </p>    
            <input type="text" name="description" id="description" />
            <br/>

            <input type="checkbox" checked={dateCompleted, complete} onChange={testFunction} /> Complete
            <p>{dateCompleted}</p>
            <hr/>
        </div>        
        
    )
}

/* <input type="checkbox" id="complete" name="complete" onclick={myFunction} />
            <label for="complete">Complete</label>
            <br />
            <p id="todoDone" > Checkbox is CHECKED!</p>  */
/* <input type="checkbox" checked={checked} onChange={handleChange} /> My Value
            <p>Is "Value 1" checked? {checked.toString()}</p>*/