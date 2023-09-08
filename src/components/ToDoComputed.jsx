import PropTypes from 'prop-types';

export const ToDoComputed = ({ computedItemsLeft, clearCompletedTodos }) => {
    return (
        <section className="flex justify-between rounded-b-md bg-white py-4 px-4  dark:bg-gray-800 transition-all duration-1000">
            <span className="text-gray-400">{computedItemsLeft} items left</span>
            <button onClick={clearCompletedTodos} className="text-gray-400">Clear completed</button>
        </section>
    )
}

ToDoComputed.propTypes = {
    computedItemsLeft: PropTypes.number,
    clearCompletedTodos: PropTypes.func
}