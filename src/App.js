import UserBar from './user/userbar';
import Todo from './todo/todo';

function App() {
  return (
    <div>
      <UserBar />
      <Todo title = "Complete HW1" />
      <Todo title = "Complete HW2" description = "Decription is optional"/>
    </div>
  )
}

export default App;
