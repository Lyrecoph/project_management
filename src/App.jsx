import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, 
    projects: [],
    tasks: []
  });

  function handleAddTask(text){
     
    // MAJ l'etat sur la base de l'ancien etat afin de ne pas perdre la valeur de l'ancien état
    setProjectsState(prevState => {
      const taskId = Math.random();
      const newTask = {
      text,
      projectId: prevState.selectedProjectId,
      id: taskId,
      };
      
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      }
    })
  }

  function handleDeleteTask(){}


  function handleSelectProject(id){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }
  
  function handleStartAddProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  // Elle permet d'ajouter un projet à notre tableau
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

  function handleDeleteProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => 
          project.id !== prevState.selectedProjectId)
      }
    })
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)

  let content = 
    <SelectedProject 
      project={selectedProject} 
      onDeleteProject={handleDeleteProject} 
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />

  if (projectsState.selectedProjectId === null){
    content = (
      <NewProject 
        onAddProject={handleAddProject} 
        onCancelAddProject={handleCancelAddProject} 
      />
    );

  } else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
        onStartAddProject={handleStartAddProject} 
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
