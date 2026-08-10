import './Layout.css' 
import Header from '../header/Header' 
import SideBar from '../sidebar/SideBar' 
import Toolbar from '../toolbar/Toolbar' 
import Task from '../task/Task' 
import Column from '../column/Column'
import {tasksData} from '../../data/tasks'
import { useState } from 'react'

export default function Layout (){ 
    const [tasks , setTasks] = useState(tasksData)
    return(
        <>
        <div className="parent">
            <SideBar/> 
            <div className="main-content">
                <Header/> 
                <Toolbar/> 
                <div className="columns">
                    <Column
                    title = 'To Do' 
                    count = '5' 
                    catagory = 'todo' 
                    tasks = {tasks} 
                    setTasks = {setTasks}

                    />
                    <Column
                    title = 'In Progress' 
                    count = '5' 
                    catagory = 'progress'
                    tasks = {tasks}
                    setTasks = {setTasks}
                    />
                    <Column
                    title = 'Done' 
                    count = '5' 
                    catagory = 'done'
                    tasks = {tasks}
                    setTasks = {setTasks}
                    />
                </div>
            </div>
        </div>
        </>
    )
}