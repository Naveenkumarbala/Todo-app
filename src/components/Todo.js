// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
// import EditTodoForm from './EditTodoForm';

// const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
//   return (
//     <div className='Todo'>
//       {task.isEditing ? (
//         <EditTodoForm
//           editTask={editTodo} // Correct the prop name to editTask
//           task={task}
//         />
//       ) : (
//         <>
//           <p
//             onClick={() => toggleComplete(task.id)}
//             className={`${task.completed ? 'completed' : ''}`}
//           >
//             {task.task}
//           </p>
//           <div>
//             <FontAwesomeIcon
//               icon={faPenToSquare}
//               onClick={() => editTodo(task.id)}
//             />
//             <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Todo;


import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div className="Todo">
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}

export default Todo;
