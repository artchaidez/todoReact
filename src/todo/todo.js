import React, { useContext } from 'react';
import { StateContext } from '../Contexts';

const start = Date.now();
const dateCreated = Date(); 

// TODO: merge my "completed" with Prof "complete" and "completedOn"

export default function Todo ({ title , description, author, complete, completedOn, postId}) {

    const {dispatch} = useContext(StateContext);

    description = (typeof description !== 'undefined') ?  description : "";
    const millis = Date.now() - start;

    const [completed, setComplete] = React.useState(false);
    const handleChange = () => {
        setComplete(!completed);
    };

    const [dateCompleted, setDateCompletedTime] = React.useState(false);
    const handleCompletedTime = () => {
        if (!completed)
            setDateCompletedTime(title + " was completed " + Date() );
        else 
            setDateCompletedTime(title + " was created " + Math.floor(millis / 1000) + " seconds ago.");
    }

    function testFunction() {
        handleCompletedTime();
        handleChange();
    }

    // warning on line 39,  Unexpected use of comma operator  no-sequences
    return (
        <div>
            <h2>{title}</h2>
            <h4>{description}</h4>

            <p>Created: {dateCreated} </p>    
            <input type="checkbox" checked={dateCompleted, completed} onChange={testFunction} /> Complete

            <p>{dateCompleted}</p>
            
            <i>Written by <b>{author}</b></i>
            <input type="checkbox" onClick={e => {dispatch({type: 'TOGGLE_POST', complete:!complete, postId: postId})}} />
            <button onClick={(e) => {dispatch({type: 'DELETE_POST', postId: postId})}}>Delete Post</button>
            {complete && <><br/><i>Completed on: {new Date(completedOn).toLocaleDateString('en-us')}</i><br/></>}
          
            <hr/>
        </div>               
    )
}