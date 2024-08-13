
// Ce composant permet de passer d’un projet à l’autre et qui contiendra
// un bouton pour ajouter un nouveau projet
import { useContext } from "react";
import Button from "./Button";
import { ProjectContext } from "../store/project-context";


export default function ProjectsSidebar(){
    const {
        projectsState,
        handleSelectProject,
        handleStartAddProject,
    } = useContext(ProjectContext);
    return(
        <aside className="w-1/3 px-8 py-16 bg-neutral-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
                Your Projects
            </h2>
            <div>
                <Button onClick={handleStartAddProject}>+Add Projects</Button>
            </div>
            <br />
            <ul>
                {
                    projectsState.projects.map(project => {
                        let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800"
                        
                        if (project.id === projectsState.selectedProjectId){
                            cssClasses += ' bg-stone-800 text-stone-200'
                        }else{
                            cssClasses += ' text-stone-400'
                        }

                        return (
                            <li key={project.id}>
                                <button 
                                    className= {cssClasses}
                                    onClick={() => handleSelectProject(project.id)}
                                >
                                    {project.title}
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}