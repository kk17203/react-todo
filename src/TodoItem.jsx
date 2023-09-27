import PropTypes from "prop-types";

export default function TodoItem({
    id,
    completed,
    title,
    handleComplete,
    handleDelete,
}) {
    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    onChange={() => handleComplete(id)}
                    checked={completed}
                />
                {title}
            </label>
            <button className="btn btn-danger" onClick={() => handleDelete(id)}>
                Delete
            </button>
        </li>
    );
}

TodoItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    handleComplete: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};
