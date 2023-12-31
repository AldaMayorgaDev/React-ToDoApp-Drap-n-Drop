import PropTypes from 'prop-types';
export const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container mx-auto mt-8">
            <div className="flex justify-center gap-4 rounded-md bg-white p-4  dark:bg-gray-800 transition-all duration-1000">

                <button
                    onClick={() => changeFilter('all')}
                    className={`${filter === 'all'
                        ? "text-purple-600 hover:text-gray-500"
                        : "text-gray-600 hover:text-blue-500 "}`}>All</button>
                <button onClick={() => changeFilter('active')} className={`${filter === 'active'
                    ? "text-purple-600 hover:text-gray-500"
                    : "text-gray-600 hover:text-blue-500 "}`}>Active</button>
                <button onClick={() => changeFilter('completed')} className={`${filter === 'completed'
                    ? "text-purple-600 hover:text-gray-500"
                    : "text-gray-600 hover:text-blue-500 "}`}>Completed</button>
            </div>
        </section>
    )
}

TodoFilter.propTypes = {
    changeFilter: PropTypes.func,
    filter: PropTypes.string
}