import React from 'react';
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
export default function Todo ({ title }) {
    return (
        <div>
            <h3>{title}</h3>
            <div>lol </div>
            <input type="text" name="description" id="description" />
            <br />
            <i>Written by <b>Art</b></i>
        </div>        
    )
}