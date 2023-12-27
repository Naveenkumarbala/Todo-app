// import React, { useState } from 'react';

// const EditTodoForm = ({ editTask, task }) => {
//   const [value, setValue] = useState(task ? task.task : ''); // Check if task is defined

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (task) {
//       editTask(value, task.id);
//     }
//     setValue('');
//   };

//   return (
//     <div>
//       <form className="TodoForm" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           className="todo-input"
//           value={value}
//           placeholder="Update task"
//           onChange={e => setValue(e.target.value)}
//         />
//         <button type="submit" className="todo-btn">
//           Update task
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditTodoForm;

import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}

export default EditTodoForm;