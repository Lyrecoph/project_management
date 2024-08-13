import { createContext, useState } from "react";

// export const ProjectContext = createContext({
//     selectedProjectId: undefined, 
//     projects: [],
//     tasks: [],
//     selectedProject: ,
//     addTask: () => {},
//     deleteTask: () => {},
//     selectProject: () => {},
//     startAddProject: () => {},
//     addProject: () => {},
//     cancelAddProject: () => {},
//     deleteProject: () => {}
// });

export const ProjectContext = createContext();

export default function ProjectContextProvider({children}){
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
    
    function handleDeleteTask(id){
      setProjectsState(prevState => {
        return {
          ...prevState,
          tasks: prevState.tasks.filter(task => 
            task.id !== id)
        }
      })
    }
    
    
    function handleSelectProject(id){
      setProjectsState(prevState => {
        return {
          ...prevState,
          selectedProjectId: id
        }
      })
    }
    
    // Elle permet d'afficher le composant pour enregistrer un projet
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
    // const ctxValue = {
    //     projects: projectsState.projects,
    //     taks: projectsState.tasks,
    //     selectedProjectId: projectsState.selectedProjectId,
    //     selectedProject: selectedProject,
    //     addTask: handleAddTask,
    //     deleteTask: handleDeleteTask,
    //     selectProject: handleSelectProject,
    //     startAddProject: handleStartAddProject,
    //     addProject: handleAddProject,
    //     cancelAddProject: handleCancelAddProject,
    //     deleteProject: handleDeleteProject
    // }

    return (
        <ProjectContext.Provider 
          value={{
            projectsState,
            selectedProject,
            handleAddTask,
            handleDeleteTask,
            handleSelectProject,
            handleStartAddProject,
            handleAddProject,
            handleCancelAddProject,
            handleDeleteProject,
          }}
        >
            {children}
        </ProjectContext.Provider>
    )

}