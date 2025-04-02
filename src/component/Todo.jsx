import { useState } from "react";

const todolist = [
  { id: 1, name: "Todo 1", completed: false },
  { id: 2, name: "Todo 2", completed: false },
  { id: 3, name: "Todo 3", completed: false },
  { id: 4, name: "Todo 4", completed: false },
  { id: 5, name: "Todo 5", completed: false },
];

function Todo() {
  const [todos, setTodos] = useState(todolist);
  const [newTodo, setNewTodo] = useState("");  // state để lưu tên todo mới

  // Hàm thêm todo vào danh sách
  function handleAddClick() {
    if (newTodo.trim()) {
      const newTodoItem = {
        id: todos.length + 1,
        name: newTodo,
        completed: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo(""); // Reset thanh input sau khi thêm
    }
  }

  // Hàm xóa todo khỏi danh sách
  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      {/* Thanh input để nhập tên todo mới */}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="border p-2 rounded"
        placeholder="Nhập tên todo"
      />
      <button
        onClick={handleAddClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
      >
        Add Todo
      </button>

      <h1 className="text-3xl font-bold underline">Todo List</h1>

      {/* Hiển thị danh sách todos */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center mb-2">
            {todo.name}
            <button
              onClick={() => handleDelete(todo.id)}
              className="bg-red-500 text-white ml-4 py-1 px-2 rounded"
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
