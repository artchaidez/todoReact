import UserBar from './user/userbar';
import Todo from './todo/todo';

function App() {
  return (
    <div>
      <UserBar />
      <Todo title = "My First Todo" />
      <Todo title = "My Second Todo" description = "Decription is optional"/>
    </div>
  )
}

export default App;
