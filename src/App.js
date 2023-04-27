import React, {useEffect} from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import Loader from "./Loader";

const AddTodo = React.lazy(() => import('./Todo/AddTodo'))  // lazy loading of AddTodo component

function App() {
  const [loading, setLoading] = React.useState(true)
  let todosOriginal = []

  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => setTodos(todos))
      .then(setLoading(false))
    },
    []
  )
  const [todos, setTodos] = React.useState(todosOriginal)

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodoItem(title) {
    setTodos(todos.concat([
      {
        title,
        id: Date.now(),
        completed: false,
      }
    ]))
  }

  return (
    <Context.Provider value={{ removeTodo, toggleTodo, addTodoItem}}> {/* pass these functions via context instead of using props */}
      <div className="wrapper">
        <h1>React Tutorial</h1>
        <React.Suspense fallback={<p>loading...</p>}>
          <AddTodo />
        </React.Suspense>

        {loading && <Loader />}
        {todos.length ? (<TodoList todos={todos} />) : (
          loading ? null : <p>No todos yet. Try to add them!</p>
        )} 
      </div>
    </Context.Provider>
  );
}

export default App;
