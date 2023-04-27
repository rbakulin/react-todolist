import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

function TodoList(props) {
    return (
        <ul className="ul">
            { props.todos.map((todo, index) => {
                return (
                    <TodoItem 
                        todo={todo} 
                        key={todo.id} 
                        index={index}
                    />
                )
            }) }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TodoList