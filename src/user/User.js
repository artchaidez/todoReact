import React from 'react';
import { Link } from 'react-navi'
import { Card} from 'react-bootstrap'

function User ( user ) {

    return (
        <Card>
          <Card.Body>
              <Card.Title><Link  href={`/users/${user.userId}`}>{user.username}</Link>
            </Card.Title>
          </Card.Body>
          </Card>

    )
}

export default React.memo(User);