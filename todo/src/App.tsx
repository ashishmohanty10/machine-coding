import { FormEvent, useState } from "react";

type Todo = {
  text: string;
  completed: boolean;
};

export default function App() {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  const addTodo = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim().length === 0) return;

    setTodo([...todo, { text, completed: false }]);
    setText("");
  };

  const handleDelete = (id: number) => {
    setTodo(todo.filter((_, index) => index !== id));
  };

  const toggleComplete = (id: number) => {
    setTodo(
      todo.map((item, index) =>
        index === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div>
      <h1>TODO</h1>

      <form onSubmit={addTodo}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">ADD TODO</button>
      </form>

      <ul>
        {todo.map((item, idx) => (
          <div key={idx} className="single-todo">
            <li
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.text}
            </li>
            <button onClick={() => handleDelete(idx)}>Delete</button>
            <button onClick={() => toggleComplete(idx)}>
              {item.completed ? "Undo" : "Completed"}
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
