import './sidebar.css';

export default function SideBar({titles, onClick,onPick}){
  return(
    <div className="sideBar">
      <h2>YOUR PROJECTS</h2>
      <button className = "add-button"onClick={onClick}>+ Add Project</button>
      <ul>
        {titles.map((val,index)=>{
          return(
            <button onClick={()=>onPick(index)} className='list-of-tasks' key={index}>{val.title}</button>
          );
        })}
      </ul>
    </div>
  );
}