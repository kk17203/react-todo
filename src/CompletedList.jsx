import CompletedItem from "./CompletedItem";
import PropTypes from "prop-types";

export default function CompletedList({ todos, handleComplete, handleDelete }) {
    const completedTodos = todos.filter((todo) => todo.completed);

    return (
        <>
            {completedTodos.length !== 0 && (
                <div className="completed-header-container">
                    <h1 className="header completed-header">
                        Red Pill <span>(Completed)</span>
                    </h1>
                </div>
            )}
            <ul className="list">
                {completedTodos.map((todo) => (
                    <CompletedItem
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

CompletedList.propTypes = {
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
