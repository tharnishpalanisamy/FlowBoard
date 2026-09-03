import { useState } from "react";
import TaskContext from "./TaskContext"; 
import { tasksData } from "../../data/tasks";

export default function TaskProvider({children}) { 
    const [tasks , setTasks] = useState(
        localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : tasksData
    ) 
    const [search , setSearch ] = useState('')  
    const [filters , setFilters] = useState({
    priority: [],
    dueDate: 'none',
    sortBy: 'dueDate',
    order: 'newest'
}) 
    const [showPopover , setShowPopOver] = useState(false) 
    return( 
        <TaskContext.Provider 
            value={{tasks,setTasks , search , setSearch , filters , setFilters , showPopover , setShowPopOver}}
        >
            {children}
        </TaskContext.Provider>
    )
}