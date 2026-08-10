import './Layout.css' 
import Header from '../header/Header' 
import SideBar from '../sidebar/SideBar' 
import Toolbar from '../toolbar/Toolbar' 
import Task from '../task/Task' 
import Column from '../column/Column'
import Modal from '../modal/Modal'
import {tasksData} from '../../data/tasks'
import { useState } from 'react'

export default function Layout (){ 
    const [tasks , setTasks] = useState(tasksData)  
    console.log(tasks);
    
    const [showModal , setShowModal] = useState(false)  
    return(
        <>
        <div className="parent">
            <SideBar/> 
            <div className="main-content">
                <Header/> 
                <Toolbar add = {()=>setShowModal(true)}/> 
                <div className="columns">
                    <Column
                    title = 'To Do' 
                    count = '5' 
                    catagory = 'todo' 
                    tasks = {tasks} 
                    setTasks = {setTasks} 
                    add = {()=>setShowModal(true)} 

                    />
                    <Column
                    title = 'In Progress' 
                    count = '5' 
                    catagory = 'progress'
                    tasks = {tasks}
                    setTasks = {setTasks}
                    add = {()=>setShowModal(true)} 
                    />
                    <Column
                    title = 'Done' 
                    count = '5' 
                    catagory = 'done'
                    tasks = {tasks}
                    setTasks = {setTasks}
                    add = {()=>setShowModal(true)} 
                    />
                </div> 

                {showModal && 
                    <Modal 
                        close = {()=>setShowModal(false)} 
                        setTasks = {setTasks}
                    />
                }
            </div>
        </div>
        </>
    )
}