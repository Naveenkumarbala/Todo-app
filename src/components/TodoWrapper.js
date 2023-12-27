// import React, { useState } from 'react';
// import TodoForm from './TodoForm';
// import { v4 as uuidv4 } from 'uuid';
// import Todo from './Todo';
// import EditTodoForm from './EditTodoForm';

// const TodoWrapper = () => {
//   const [todos, setTodos] = useState([]);
  
//   const addTodo = todoText => {
//     const newTodo = {
//       id: uuidv4(),
//       task: todoText,
//       completed: false,
//       isEditing: false
//     };
//     setTodos([...todos, newTodo]);
//     console.log(todos);
//   }
//   const toggleComplete = id => {
//     setTodos(todos.map(todo=>todo.id===id?{...todo,completed:!todo.completed}:todo))
//   }
//   //todo.id !== id is the condition being checked.It checks if the id of each todo item in the array is not equal to the id parameter passed to the function.
//    //If they are not equal, the item is included in the new array; otherwise, it's excluded.
//   const deleteTodo = id => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   }
//   const editTodo = id => {
//     setTodos(todos.map(todo => todo.id === id ? {
//       ...todo,
//       isEditing: !todo.isEditing
//     } : todo));
//   }
//   const editTask = ( task, id)=> {
//   setTodos(todos.map(todo => todo.id === id ? {
//     ...todo, task, isEditing: !todo.isEditing
//   } : todo));
//   }
//   return (
//     <div className="TodoWrapper">
//       <h1>Get Things Done</h1>
//       <TodoForm addTodo={addTodo} />
//       {/* Render your todo list here */}
//       {/* we pass each through the map through props */}
//       {todos.map((todo, index) => (
//         todo.isEditing ? (
//           <EditTodoForm editTod={editTask} />
//         ):(
//             <Todo task={todo} key={index} toggleComplete={toggleComplete}
//               deleteTodo={deleteTodo}
//               editTodo={editTodo} />
//         )
//       ))}
//     </div>
//   );
// }

// export default TodoWrapper;

import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>
      <TodoForm addTodo={addTodo} />
      {/* display todos */}
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};
export default TodoWrapper;