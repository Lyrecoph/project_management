import { useContext, useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";
import { ProjectContext } from "./store/project-context";

function App() {

  const { projectsState } = useContext(ProjectContext)
  
  let content = 
    <SelectedProject />

  if (projectsState.selectedProjectId === null){
    content = (
      <NewProject />
    );

  } else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      {content}
    </main>
  );
}

export default App;
