import PropTypes from 'prop-types';
import { useState } from "react";

export const ToDoCreate = ({ createTodo }) => {


    const [title, setTitle] = useState('');

    const handleSubmitAddTodo = e => {
        e.preventDefault();

        if (title.trim().length > 0) {
            createTodo(title)
            return setTitle('');
        }
        setTitle('');
    }
    return (
        <form onSubmit={handleSubmitAddTodo} className=" dark:bg-gray-800 bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8 transition-all duration-1000">
            <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
            <input
                type="text"
                placeholder="Create a new todo..."
                className="w-full text-gray-400 outline-none  dark:bg-gray-800 transition-all duration-1000"
                value={title}
                onChange={(e) => { setTitle(e.target.value) }}
            />
        </form>
    )
}

ToDoCreate.propTypes = {
    createTodo: PropTypes.func,
}