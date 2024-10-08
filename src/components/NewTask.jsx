import { useContext, useState } from "react"
import { ProjectContext } from "../store/project-context";

export default function NewTask(){
    const {handleAddTask} =  useContext(ProjectContext);
    const [enteredTask, setEnteredTask] = useState('');
    
    function handleChange(event){
        setEnteredTask(event.target.value)
    }

    function handleClick(){
        if(enteredTask.trim() === ''){
            return;
        }
        
        handleAddTask(enteredTask)
        setEnteredTask('')
    }
    return(
        <div className="flex items-center gap-4">
            <input 
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                type="text" 
                value={enteredTask} 
                onChange={handleChange}
             />
            <button 
                className="text-stone-700 hover:text-stone-950"
                onClick={handleClick}
            >
                Add Task
            </button>
        </div>
    )
}