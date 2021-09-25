// import files here to use components (aka functions)
import UserBar from './user/userbar';
import Todo from './todo/todo';
import CreateTodo from './todo/createtodo';
import TodoList from './todo/todolist';

function App() {
  return (
    <div>
      <UserBar />
       <br/><br/><hr/><br/>
      <Todo title = "My First Post" />
      <Todo title = "My Second Post" description = "This is optional"/>
      <TodoList />
    </div>
  )
}

export default App;
