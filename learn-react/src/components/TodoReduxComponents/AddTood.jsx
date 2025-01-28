import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../features/todoSlice";

function AddTodo({ editTodo, clearEdit }) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.text); // Populate input with the text of the todo being edited
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTodo) {
      // Update the todo
      dispatch(updateTodo({ id: editTodo.id, text: input }));
      clearEdit(); // Reset edit mode
    } else {
      // Add a new todo
      dispatch(addTodo(input));
    }
    setInput(""); // Clear input
  };

  return (
    <form onSubmit={handleSubmit} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className={`text-white ${
          editTodo
            ? "bg-green-500 hover:bg-green-600"
            : "bg-indigo-500 hover:bg-indigo-600"
        } border-0 py-2 px-6 focus:outline-none rounded text-lg`}
      >
        {editTodo ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
