import { DragDropContext } from "@hello-pangea/dnd"; //Drag adn drop
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { ToDoComputed } from "./components/ToDoComputed";
import { ToDoCreate } from "./components/ToDoCreate";
import { ToDoList } from "./components/ToDoList";
import { TodoFilter } from "./components/TodoFilter";

const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || [];
const reorder = (list, startIndex, endIndex) => {
	const result = [...list];
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result;
};

export const App = () => {
	const [todos, setTodos] = useState(initialStateTodos);
	const createTodo = (title) => {
		const newTodo = {
			id: Date.now(),
			title: title.trim(),
			completed: false,
		}
		setTodos([...todos, newTodo]);
	}

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	}

	const updateTodo = (id) => {
		setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
	}
	const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

	const clearCompletedTodos = () => {
		setTodos(todos.filter((todo) => !todo.completed))
	}

	//Filtros
	const [filter, setFilter] = useState('all');

	const changeFilter = (filter) => {
		setFilter(filter)
	}

	//Todos en localStorage

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos])


	const filteredTodos = () => {
		switch (filter) {
			case 'all':
				return todos;
			case 'active':
				return todos.filter((todo) => !todo.completed);
			case 'completed':
				return todos.filter((todo) => todo.completed);
			default:
				todos;
		}
	};

	const handleDragEnd = result => {
		const { destination, source } = result;
		if (!destination) return;
		if (
			source.index === destination.index &&
			source.droppableId === destination.droppableId
		)
			return;

		setTodos((prevTasks) =>
			reorder(prevTasks, source.index, destination.index)
		);
	}

	return (
		<div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen  dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] transition-all duration-1000 md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">

			<Header />
			<main className="container mx-auto px-4 mt-8  md:max-w-xl">
				<ToDoCreate createTodo={createTodo} />

				<DragDropContext onDragEnd={handleDragEnd}>
					<ToDoList
						todos={filteredTodos()}
						deleteTodo={deleteTodo}
						updateTodo={updateTodo}
					/>
				</DragDropContext>

				<ToDoComputed computedItemsLeft={computedItemsLeft} clearCompletedTodos={clearCompletedTodos} />

				<TodoFilter changeFilter={changeFilter} filter={filter} />
			</main>
			<footer className="text-center mt-8 dark:text-gray-400">
				Drag and drop to reorder list
			</footer>
		</div>
	);
};
