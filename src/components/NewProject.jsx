import { useContext, useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
import { ProjectContext } from "../store/project-context";

export default function NewProjects(){
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const { handleAddProject, handleCancelAddProject } = useContext(ProjectContext);

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;
         
        // validation...
        // si les valeurs non valides on été saisie 
        if(
            enteredTitle.trim() === '' || 
            enteredDescription.trim() === '' || 
            enteredDueDate.trim() === ''
        ){
            // nous afficherons un modal
            modal.current.open();
            // empêche l'execution de la suite des instructions se trouvant dans la fonction
            return; 
        }

        handleAddProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })

    }

    
    return(
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
                <p className="text-stone-600 mb-4">
                    Oops... looks like you forgot to enter a value
                </p>
                <p className="text-stone-600 mb-4">
                    Please make sure you provide a valid value for every input field.
                </p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button 
                            className="text-stone-800 hover:text-stone-950"
                            onClick={handleCancelAddProject}
                        >
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button 
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    </li>
                </menu>
                {/* ref a été utilisé vu que je veux vraiment lire ces valeurs que 
                    lorsque je clique sur le bouton enregistrer */}
                <div>
                    <Input type="text" ref={title} label="Title" />
                    <Input ref={description} label="Description" textarea />
                    <Input type="date" ref={dueDate} label="Due Date" />
                </div>
            </div>
        </>
    )
}