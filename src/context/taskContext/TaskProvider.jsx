import { useState } from "react";
import TaskContext from "./TaskContext"; 
import { tasksData } from "../../data/tasks";

export default function TaskProvider({children}) { 
    const [tasks , setTasks] = useState(
        localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : tasksData
    )
    return( 
        <TaskContext.Provider 
            value={{tasks,setTasks}}
        >
            {children}
        </TaskContext.Provider>
    )
}