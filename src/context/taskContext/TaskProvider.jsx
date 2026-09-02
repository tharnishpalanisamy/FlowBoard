import { useState } from "react";
import TaskContext from "./TaskContext";

export default function TaskProvider({children}) { 
    const [tasks , setTasks] = useState(JSON.parse(localStorage.getItem('tasks'))  || [] ) 

    return(
        <TaskContext.Provider 
            value={{tasks,setTasks}}
        >
            {children}
        </TaskContext.Provider>
    )
}