import PropTypes from "prop-types";

export default function CompletedItem({
    id,
    title,
    completed,
    handleComplete,
    handleDelete,
}) {
    return (
        <li key={id}>
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

CompletedItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    handleComplete: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};
