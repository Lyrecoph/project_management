import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, 
    projects: []
  });

  function handleStartAddProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData){
    const projectId = Math.random();
    const newProject = {
     ...projectData,
     id: projectId
    }; 
    // MAJ l'etat sur la base de l'ancien etat afin de ne pas perdre la valeur de l'ancien état
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleCancelAddProject(){
    setProjectsState(prevState =>{
      return {
        ...prevState,
        selectedProjectId: undefined
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null){
    content = <NewProject 
      onAddProject={handleAddProject} 
      onCancelAddProject={handleCancelAddProject} 
    />
  } else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
        onStartAddProject={handleStartAddProject} 
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
