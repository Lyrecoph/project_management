// Composant permettant de s'afficher si nous n'ajoutons pas de projet 
// ou si nous n'en avons pas déjà selectionné un projet 
import noProjectImage from '../assets/no-projects.png';
import Button from './Button';

export default function NoProjectSelected({onStartAddProject}){
    return(
        <div className="mt-24 text-center w-2/3">
            <img 
                src={noProjectImage} 
                alt="An empty task list"
                className='w-16 h-16 object-contain mx-auto' 
            />
            <h2 className='text-xl font-bold text-stone-500 mt-4'>
                No Project Selected
            </h2>
            <p>Select a project or get started with a new one</p>
            <p>
                <Button onClick={onStartAddProject}>Create new project</Button>
            </p>
        </div>
    )
}