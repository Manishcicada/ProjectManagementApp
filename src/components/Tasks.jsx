import './Tasks.css';
import { useRef, useState } from 'react';

export default function Tasks({details, index, updateArray, deleteProject}){

  console.log(details);
  const task_data = useRef();

  const[reload,reloadComponent] = useState(false);

  const temp_details = details;

  function handleUpdate(){
    temp_details[index].tasks.push(task_data.current.value);
    updateArray(temp_details);
    reloadComponent(!reload);
  }

  function taskDeletion(indexofarr){
    temp_details[index].tasks.splice(indexofarr,1);
    updateArray(temp_details);
    reloadComponent(!reload);
  }

  function projectDeletion(){
    delete temp_details[index];
    deleteProject(temp_details.flat());
  }

  return (
    <div className="tasks-main-class">
      <div className='delete-div'>
        <h1>{details[index].title}</h1>
        <button onClick={projectDeletion}>Delete</button>
      </div>
      
      <h2>{details[index].date}</h2>
      <p>
        {details[index].description}
      </p>

      <div className='tasks'>
        <h1>Tasks</h1>
        <div>
          <input ref={task_data} type='text'></input>
          <button onClick={handleUpdate}>Add Task</button>
        </div>
        <ul>
          
          {details[index].tasks.map((val,index)=>{
            return(
              <li key={index}>
                <div className='delete-div'>
                  <p>{val}</p>
                  <button onClick={()=>taskDeletion(index)}>Clear</button>
                </div>
              </li>
            );
          })}  
          
        </ul>
    </div>
    </div>
  );
}