import SideBar from './components/SideBar' 
import Info from './components/Info';
import ProjectInput from './components/ProjectInput';
import { useState } from 'react';
import Tasks from './components/Tasks';

const orgdetails = [];

function App() {

  const [newProject, setNewProject] = useState(false);
  const[details, updateDetails] = useState(orgdetails);
  const[projectNumber, updateProjectNumber] = useState(details.length-1);

  function handleClick(){
    setNewProject(false);
  }

  function handleSave(addDetails){
    updateDetails(addDetails);
    setNewProject(false);
    updateProjectNumber(projectNumber+1);
  }

  function selectProject(index){
    updateProjectNumber(index);
  }

  function updateArray(newDetails){
    updateDetails(newDetails);
    setNewProject(false);
  }

  function deleteProject(newDetails){
    console.log(newDetails);
    updateDetails(newDetails);
    setNewProject(false);
    updateProjectNumber(projectNumber-1);
  }

  return (
    <>
      <SideBar titles={details} onPick = {selectProject} onClick={()=>{setNewProject(true)}}></SideBar>

      {projectNumber<0 && !newProject?<Info onCancellation = {()=>{setNewProject(true)}}></Info>
      :
      (newProject?<ProjectInput onCancellation = {handleClick} onSave={handleSave} oldDetails ={details}></ProjectInput>
      :
      <Tasks details={details.flat()} index={projectNumber}
      updateArray={updateArray} deleteProject = {deleteProject}></Tasks>
      )
      }
    </>
  );
}

export default App;
