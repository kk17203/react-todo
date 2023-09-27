import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

export default function TodoList({ todos, handleComplete, handleDelete }) {
    const workingOnTodos = todos.filter((todo) => !todo.completed);

    return (
        <>
            {workingOnTodos.length === 0 && <p>No Current Todos</p>}
            <ul className="list">
                {workingOnTodos.map((todo) => (
                    <TodoItem
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        key={todo.id}
                        handleComplete={handleComplete}
                        handleDelete={handleDelete}
                    />
                ))}
            </ul>
        </>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        })
    ).isRequired,
    handleComplete: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};
