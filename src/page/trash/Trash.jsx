import { useContext, useState } from "react"
import './Trash.css'
import TaskContext from "../../context/taskContext/TaskContext"

export default function Trash(){ 
    const [deletedTasks , setDeletedTasks] = useState(JSON.parse(localStorage.getItem('deletedTasks')) ||  [] )   
    
    const[selectedTasks , setSelectedTasks] = useState([])  

    const {tasks , setTasks} = useContext(TaskContext)  
 
    const [ search , setSearch] = useState('')   

    const [filteredTasks , setFilteredTasks ] = useState(deletedTasks) 

    
    function searchTrash(event) {
        const value = event.target.value

        setSearch(value)

        const tempFilteredTask = deletedTasks.filter(task =>
            task.title
                .toLowerCase()
                .trim()
                .includes(value.toLowerCase().trim())
        )

        setFilteredTasks(tempFilteredTask)
    }

    //sort by 
    
    function changeOrder(event) {
        const value = event.target.value

        const sortedTasks = [...filteredTasks].sort((a, b) => {
            if(value === 'newest') {
                return new Date(b.deletedOn) - new Date(a.deletedOn)
            }

            return new Date(a.deletedOn) - new Date(b.deletedOn)
        })

        setFilteredTasks(sortedTasks)
    }

    
    //select
    function handleSelectAll(){    
        const filteredId = filteredTasks.map(task=>task.id) 

        const allSelected = filteredId.every(id=>selectedTasks.includes(id)) 


        if(allSelected) {
            setSelectedTasks(prev=>prev.filter(id=>!filteredId.includes(id))) 
        }
        else{
            setSelectedTasks(prev => [
                ...new Set([...prev, ...filteredId])
            ])
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
        setFilteredTasks(updatedTasks)
        setSelectedTasks(prev => prev.filter(task => task.id != id) )  
        localStorage.setItem('deletedTasks' , JSON.stringify(updatedTasks))

    } 

    function deleteSelected(){
        if (selectedTasks.length == 0 ) { 
            alert('No tasks Selected')
            return  
        }
        let updatedTasks = deletedTasks.filter(task => !selectedTasks.includes(task.id))  
        setSelectedTasks([])
        setDeletedTasks(updatedTasks) 
        setFilteredTasks(updatedTasks)
        localStorage.setItem('deletedTasks' , JSON.stringify(updatedTasks))
    }


    //restore 

    function restoreTask(task) { 
        const updatedTasks = [...tasks , task] 
        setTasks(updatedTasks )  
        localStorage.setItem('tasks' , JSON.stringify(updatedTasks))
        let updatedDeletedTasks = deletedTasks.filter(tasks => tasks.id != task.id) 
        setDeletedTasks(updatedDeletedTasks)  
        setFilteredTasks(updatedDeletedTasks)
        localStorage.setItem('deletedTasks' , JSON.stringify(updatedDeletedTasks) ) 
        setSelectedTasks(prev => prev.filter(tasks=>tasks.id != task.id ))
    } 

    function restoreSelected(){
        if(selectedTasks.length == 0) {
            alert('No task selected') 
            return 
        }
        let tasksToRestore = deletedTasks.filter(task=> selectedTasks.includes(task.id)) 
        
        
        const updatedTasks = [
            ...tasks,
            ...tasksToRestore
        ] 
        setTasks(updatedTasks)

        localStorage.setItem('tasks' , JSON.stringify(updatedTasks))
        const updatedDeletedTasks = deletedTasks.filter(
            task => !selectedTasks.includes(task.id)
        )

        setDeletedTasks(updatedDeletedTasks) 
        setFilteredTasks(updatedDeletedTasks) 
        localStorage.setItem('deletedTasks' , JSON.stringify(updatedDeletedTasks)) 

        setSelectedTasks([])

    }

    //Date 


    return(

        <>
        <div className="trash-options-container">
            <div className="trash-options-left">
                <input type="text" className="search-trash" placeholder="Search in trash..." 
                    onChange={(event) => searchTrash(event)}
                /> 
                <select name="sort-trash" id="sort-trash" onChange={(event) => changeOrder(event)}>
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                </select>
            </div> 

            <div className="trash-options-right">
                <button className="trash-options-button empty-trash-button" onClick={deleteSelected}>
                    <span> <i className="fa-solid fa-trash"></i> </span> Delete Selected
                </button>

                <button className="trash-options-button restore-all-button" onClick={restoreSelected}>
                    <span>
                        <i className="fa-solid fa-recycle"></i>
                    </span>  Restore Selected
                    
                </button>
            </div>

        </div>
        <div className="deleted-task-container">
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" onChange={handleSelectAll} 
                            checked={
                                filteredTasks.length > 0 &&
                                filteredTasks.every(task => selectedTasks.includes(task.id))
                            }
                    /></th>
                        <th>Task</th>
                        <th>Board</th>
                        <th>DeletedOn</th>
                        <th>Actions</th>
                    </tr> 
                </thead>

                <tbody>
                    {filteredTasks.map(task =>{ 
                        let date = new Date(task.deletedOn) 
                        let month = date.toLocaleString('default', { month: 'short' });
                        return(
                            <tr key={task.id}>
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
                                    <i className="fa-solid fa-recycle" onClick={()=>restoreTask(task)}  ></i>
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