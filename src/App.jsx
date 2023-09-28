import { useEffect, useState } from "react";
import "./styles.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
import CompletedList from "./CompletedList";

export default function App() {
    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem("ITEMS");
        if (localValue == null) return [];

        return JSON.parse(localValue);
    });

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos));
    }, [todos]);

    function addTodo(title) {
        setTodos((currentTodos) => {
            return [
                ...currentTodos,
                {
                    id: crypto.randomUUID(),
                    title,
                    completed: false,
                },
            ];
        });
    }

    function handleDelete(id) {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    }

    function handleComplete(id) {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    }

    return (
        <>
            <h1 className="page-header">
                Free Your Mind: Embrace the Open Door
            </h1>
            <NewTodoForm addTodoProp={addTodo} />
            <h1 className="header todo-header">
                Blue Pill <span>(Remaining)</span>
            </h1>
            <TodoList
                todos={todos}
                handleComplete={handleComplete}
                handleDelete={handleDelete}
            />
            <CompletedList
                todos={todos}
                handleComplete={handleComplete}
                handleDelete={handleDelete}
            />
        </>
    );
}
