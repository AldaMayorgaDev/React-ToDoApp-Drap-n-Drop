/* eslint-disable react/display-name */
import PropTypes from 'prop-types';
import { IconCross } from "./icons/IconCross";
import { IconCheck } from "./icons/IconCheck";
import React from "react";


export const ToDoItem = React.forwardRef(
    ({ todo, deleteTodo, updateTodo, ...props }, ref) => {
        const { id, title, completed } = todo;

        return (
            <article
                {...props}
                ref={ref}
                className="flex gap-4 border-b border-b-gray-400 "
            >
                <button
                    className={`h-5 w-5 flex-none rounded-full border-2 ${completed
                        ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                        : "inline-block"
                        }`}
                    onClick={() => updateTodo(id)}
                >
                    {completed && <IconCheck />}
                </button>
                <p
                    className={`grow text-gray-600 transition-all duration-1000 dark:text-gray-400 ${completed && "line-through"
                        }`}
                >
                    {title}
                </p>
                <button className="flex-none" onClick={() => deleteTodo(id)}>
                    <IconCross />
                </button>
            </article>
        );
    }
);

ToDoItem.propTypes = {
    todo: PropTypes.object,
    deleteTodo: PropTypes.func,
    updateTodo: PropTypes.func,
    props: PropTypes.object
}