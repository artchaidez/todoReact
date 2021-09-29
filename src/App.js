import UserBar from './user/userbar';
import Todo from './todo/todo';
import React, { useState } from 'react'

function App() {

  const [ user, setUser ] = useState('')

  return (
    <div>
      <UserBar user= {user} setUser = {setUser}/>
      <Todo title = "Complete HW1" />
      <Todo title = "Complete HW2" description = "Decription is optional"/>
    </div>
  )
}

export default App;
