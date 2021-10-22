import React, { useContext } from 'react';
import { StateContext } from '../Contexts';
import { Link } from 'react-navi'

const start = Date.now();
const dateCreated = Date(); 

// TODO: merge my "completed" with Prof "complete" and "completedOn"
// TODO: Change postId to todoId
function Todo ({ title , description, author, complete, completedOn, postId, short = false}) {

    const {dispatch} = useContext(StateContext);

    let processedDescription = description
    if (short) {
        if (description.length > 30) {
            processedDescription = description.substring(0, 30) + '...'
        }
    }

        //below is what to merge or change
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
    // below is what to merge/ change

    // warning on line 39,  Unexpected use of comma operator  no-sequences
    return (
        <div>
            <Link href={`/todo/${postId}`}><h3 >{title}</h3></Link>
            <h4>{processedDescription}</h4>

            <p>Created: {dateCreated} </p>    
            <input type="checkbox" checked={dateCompleted, completed} onChange={testFunction} /> Complete

            <p>{dateCompleted}</p>
            
            <i>Written by <b>{author}</b></i>
            <input type="checkbox" onClick={e => {dispatch({type: 'TOGGLE_TODO', complete:!complete, postId: postId})}} />
            <button onClick={(e) => {dispatch({type: 'DELETE_TODO', postId: postId})}}>Delete Todo</button>
            {complete && <><br/><i>Completed on: {new Date(completedOn).toLocaleDateString('en-us')}</i><br/></>}
            {short &&
            <div>
               <br />
               <Link href={`/post/${postId}`}>View full post</Link>
            </div> 
            }
       </div>

    )
}

export default React.memo(Todo);