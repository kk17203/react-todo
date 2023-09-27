import { useState } from "react";
import PropTypes from "prop-types";

export default function NewTodoForm(props) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === "") return;

        props.addTodoProp(newItem);

        setNewItem("");
    }

    return (
        <form className="new-item-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="item">New Task</label>
                <input
                    type="text"
                    id="item"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
            </div>
            <button className="btn">Add</button>
        </form>
    );
}

NewTodoForm.propTypes = {
    addTodoProp: PropTypes.func.isRequired,
};
