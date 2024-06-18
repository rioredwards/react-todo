import "./App.css";

const todoList = [
  { id: 0, title: "Eat cookies" },
  { id: 0, title: "Learn React" },
  { id: 0, title: "Eat more cookies" },
];

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
