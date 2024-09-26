import './info.css';

export default function Info({onCancellation}){
  return(
    <div className="info">
      <img src="../src/assets/no-projects.png"></img>
      <h1>No Project Selected</h1>
      <p>Select a project or get started with a new one</p>
      <button onClick={onCancellation}>Create new project</button>
    </div>
  );
}