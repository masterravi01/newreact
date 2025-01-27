import { useState } from "react";
import { useTodo } from "../../Contexts/TodoContext";

function TodoForm() {
  const { addTodo } = useTodo();
  const [todo, setTodo] = useState("");
  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, isCompleted: false });
    setTodo("");
  };
  return (
    <form
      className="flex"
      onSubmit={(e) => {
        add(e);
      }}
    >
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo && setTodo(e.target.value)}
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
