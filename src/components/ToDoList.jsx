import PropTypes from 'prop-types';
import { Droppable, Draggable } from "@hello-pangea/dnd"; //Drag adn drop
import { ToDoItem } from "./ToDoItem";

export const ToDoList = ({ todos, deleteTodo, updateTodo }) => {
    return (
        <Droppable droppableId="todos">
            {(droppableProvided) => (
                <div
                    ref={droppableProvided.innerRef}
                    {...droppableProvided.droppableProps}
                    className="mt-8 overflow-hidden rounded-t-md bg-white  dark:bg-gray-800 [&>article]:p-4 transition-all duration-1000">

                    {todos.map((todo, index) => (
                        <Draggable
                            key={todo.id}
                            index={index}
                            draggableId={`${todo.id}`}
                        >
                            {(draggableProvided) => (
                                < ToDoItem
                                    todo={todo}
                                    deleteTodo={deleteTodo}
                                    updateTodo={updateTodo}
                                    ref={draggableProvided.innerRef}
                                    {...draggableProvided.dragHandleProps}
                                    {...draggableProvided.draggableProps}
                                />

                            )}
                        </Draggable>

                    ))}
                    {droppableProvided.placeholder}
                </div>
            )}
        </Droppable>
    );
};


ToDoList.propTypes = {
    todos: PropTypes.array,
    deleteTodo: PropTypes.func,
    updateTodo: PropTypes.func,
}