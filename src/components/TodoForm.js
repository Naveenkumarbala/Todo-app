// //creating a form and adding value and send it to the todowrapper;
// import React, { useState } from 'react'
// const TodoForm = ({addTodo}) => {
//     const [value, setValue] = useState("");
//     const handleSubmit = e => {
//         //the page reloads whenver we submit to prevent that we use preventDefault;
//         e.preventDefault();
//       // console.log(value);
//       addTodo(value);
//       setValue("");
//     }
//     return (
//     <div>
//       <form className="TodoForm" onSubmit={handleSubmit}>
//           <input type="text" className='todo-input' value={value}  placeholder="what is the task today?" onChange={(e)=>setValue(e.target.value)} />
//               <button type="submit" className='todo-btn'>Add task</button>
//           </form>
//     </div>
//   )
// }

// export default TodoForm


import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='What is the task today?' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}

export default TodoForm
