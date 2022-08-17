import React from "react";
// import toggle from './App'


function Task(props) {
 
  return (
    <div id='task'className="task" style={{backgroundColor:props.completed?'green':'white'}}>
      {props.taskName}
      <button onClick={() => 

      
       {
        props.completeTask(props.id)
       
       }}>Completed</button>
      
      <button onClick={() => props.deleteTask(props.id)}>x</button>
    </div>
  );
}

export default Task;
