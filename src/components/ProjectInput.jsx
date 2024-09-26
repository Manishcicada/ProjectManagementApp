import "./project-input.css";
import { useRef } from "react";


export default function ProjectInput({onCancellation, onSave, oldDetails}){

  const details = oldDetails;
  const values_title = useRef();
  const values_description = useRef();
  const values_date = useRef();

  function handleUpdate(){
    details.push({
      title: values_title.current.value,
      description: values_description.current.value,
      date: values_date.current.value,
      tasks: []
    });
    onSave(details);
  }

  return(
    <div className="input-class-project">
      <div className="button-class">
        <button className="cancel" onClick={onCancellation}>Cancel</button>
        <button className="save" onClick={handleUpdate}>Save</button>
      </div>
      
      <label>TITLE</label>
      <input type="text" ref={values_title} required></input>
      <label>DESCRIPTION</label>
      <input type="text" ref={values_description} required></input>
      <label>DUE DATE</label>
      <input type="date" ref={values_date} required></input>
      
    </div>
  );
}