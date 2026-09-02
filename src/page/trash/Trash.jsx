import { useEffect, useState } from "react"
import './Trash.css'
export default function Trash(){ 
    const [deletedTasks , setDeletedTasks] = useState(JSON.parse(localStorage.getItem('deletedTasks')) ||  [] )   
    const [selectAll  , setSelectAll] = useState(false)  

    const[selectedTasks , setSelectedTasks] = useState([]) 
    
    function handleSelectAll(){   
        if(selectedTasks.length == deletedTasks.length  ) { 
            setSelectedTasks([]) 
        } 
        else{
            const newArr = [] 
            setSelectedTasks(deletedTasks.map(task => task.id))
        }
         
    } 

    function handleSelectTask(id){ 
        if(selectedTasks.includes(id)) {
            setSelectedTasks(prevVal => prevVal.filter(task => task != id))
        } 
        else{
            setSelectedTasks(prevVal => [...prevVal , id]) 
        }

    }


    return(
        <div className="deleted-task-container">
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" onChange={handleSelectAll} 
                                        checked={
                                deletedTasks.length > 0 &&
                                selectedTasks.length === deletedTasks.length
                            }
                    /></th>
                        <th>Task</th>
                        <th>Board</th>
                        <th>DeletedOn</th>
                        <th>Actions</th>
                    </tr> 
                </thead>

                <tbody>
                    {deletedTasks.map(task =>{
                        return(
                            <tr>
                                <td><input type="checkbox" onChange={()=> handleSelectTask(task.id)} checked={selectedTasks.includes(task.id)}/></td>
                                <td>
                                    <div className="deleted-title">
                                        <p>{task.title}</p> 
                                        <span className={`deleted-task-priority ${task.priority.toLowerCase()}`}>{task.priority}</span> 
                                    </div>
                                </td>
                                <td>{task.board}</td>
                                <td>{task.date}</td>
                                <td>
                                    <i className="fa-solid fa-recycle"></i>
                                    <i className="fa-solid fa-trash"></i> 

                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}