import React, {useContext, useState} from "react";
import Context from "../context";

// custom hook
function useInputValue(defaultValue = '') {
    const [inputValue, setInputValue] = useState(defaultValue)

    return {
        bind: {
            value: inputValue,
            onChange: event => setInputValue(event.target.value),
        },
        clear: () => setInputValue(''),
        value: () => inputValue
    }

}

function AddTodo() {
    const { addTodoItem } = useContext(Context)  // get the function from context
    const inputObj = useInputValue()

    function submitHandler(event) {
        event.preventDefault()

        if (inputObj.value().trim()) {
            addTodoItem(inputObj.value())
            inputObj.clear()
        }
    }

    return (
        <form className="submit" onSubmit={submitHandler}>
            <input {...inputObj.bind}/>
            <button type="submit">Add Todo</button> 
        </form>
    )

}

export default AddTodo