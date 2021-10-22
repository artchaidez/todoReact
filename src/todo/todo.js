import React, { useContext } from 'react';
import { StateContext } from '../Contexts';
import { Link } from 'react-navi'
import { Card } from 'react-bootstrap'

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
        <Card>
          <Card.Body>
              <Card.Title><Link  href={`/todo/${postId}`}>{title}</Link>
              </Card.Title>
              <Card.Subtitle>
              <i>Written by <b>{author}</b></i>
              </Card.Subtitle>
              <Card.Text>
                  {processedDescription}
              </Card.Text>
              {short && <Link href={`/todo/${postId}`}>View full todo</Link>}
            
          </Card.Body>
          </Card>

    )
}

export default React.memo(Todo);