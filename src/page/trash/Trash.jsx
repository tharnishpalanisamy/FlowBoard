import { useEffect, useState } from "react"
import './Trash.css'
export default function Trash(){ 
    const [deletedTasks , setDeletedTasks] = useState(JSON.parse(localStorage.getItem('deletedTasks')) ||  [] )   
    const [selectAll  , setSelectAll] = useState(false)  

    const[selectedTasks , setSelectedTasks] = useState([]) 
    
    //select
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

    //delete 

    function deleteTask(id) {  
        let updatedTasks = deletedTasks.filter(task => task.id != id)
        setDeletedTasks(updatedTasks)   
        localStorage.setItem('deletedTasks' , JSON.stringify(updatedTasks))

    }

    //Date 


    return(

        <>
        <div className="trash-options-container">
            <div className="trash-options-left">
                <input type="text" className="search-trash" placeholder="Search in trash..."/> 
                <select name="sort-trash" id="sort-trash">
                    <option value="Newest first">Newest First</option>
                </select>
            </div> 

            <div className="trash-options-right">
                <button className="trash-options-button empty-trash-button">
                    <span> <i className="fa-solid fa-trash"></i> </span> Empty Trash
                </button>

                <button className="trash-options-button restore-all-button">
                    <span>
                        <i className="fa-solid fa-recycle"></i>
                    </span>  Restore All
                    
                </button>
            </div>

        </div>
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
                        let date = new Date(task.deletedOn) 
                        let month = date.toLocaleString('default', { month: 'short' });
                        return(
                            <tr key={task.title}>
                                <td><input type="checkbox" onChange={()=> handleSelectTask(task.id)} checked={selectedTasks.includes(task.id)}/></td>
                                <td>
                                    <div className="deleted-title">
                                        <p>{task.title}</p> 
                                        <span className={`deleted-task-priority ${task.priority.toLowerCase()}`}>{task.priority}</span> 
                                    </div>
                                </td>
                                <td>{task.board}</td>
                                <td>{month} {date.getDate()}</td>
                                <td>
                                    <i className="fa-solid fa-recycle"  ></i>
                                    <i className="fa-solid fa-trash" onClick={()=>deleteTask(task.id)}></i> 

                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </>
    )
}