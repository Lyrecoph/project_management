
// Ce composant permet de passer d’un projet à l’autre et qui contiendra
// un bouton pour ajouter un nouveau projet
import Button from "./Button";


export default function ProjectsSidebar({onStartAddProject, projects}){
    return(
        <aside className="w-1/3 px-8 py-16 bg-neutral-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
                Your Projects
            </h2>
            <div>
                <Button onClick={onStartAddProject}>+Add Projects</Button>
            </div>
            <br />
            <ul>
                {
                    projects.map(project => 
                        <li key={project.id}>
                            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">{project.title}</button>
                        </li>
                    )
                }
            </ul>
        </aside>
    )
}