import React, {useContext} from "react";
import PropTypes from "prop-types"
import Context from "../context";

function TodoItem({ todo, index}) {
    const { removeTodo, toggleTodo } = useContext(Context)  // get the functions from context
    let classes = []
    if (todo.completed) {
        classes.push('done')
    }

    return (
        <li className="li">
            <span className={classes.join(' ')}>
                <input 
                    type="checkbox" 
                    className="checkbox"
                    checked={todo.completed} 
                    onChange={() => toggleTodo(todo.id)} 
                />
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>

            <button className="rm" onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
}

export default TodoItem