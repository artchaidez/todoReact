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
      <Todo author = "Art" />
      <TodoList />
    </div>
  )
}

export default App;
