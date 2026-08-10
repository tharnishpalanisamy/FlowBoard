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
    const [taskStatus , setTaskStatus] = useState('todo') 

    function openModal(status) {
        setTaskStatus(status) 
        setShowModal(true)
    }

    function deleteTask(id) {
        setTasks(prevTasks => prevTasks.filter(task =>{
            return task.title != id 
        }) )
    }
    return(
        <>
        <div className="parent">
            <SideBar/> 
            <div className="main-content">
                <Header/> 
                <Toolbar add = {()=>openModal('todo')}/> 
                <div className="columns">
                    <Column
                    title = 'To Do' 
                    catagory = 'todo' 
                    tasks = {tasks} 
                    setTasks = {setTasks} 
                    add = {()=>openModal('todo')} 
                    delete = {deleteTask}

                    />
                    <Column
                    title = 'In Progress' 
                    catagory = 'progress'
                    tasks = {tasks}
                    setTasks = {setTasks}
                    add = {()=>openModal('progress')} 
                    delete = {deleteTask}
                    />
                    <Column
                    title = 'Done' 
                    catagory = 'done'
                    tasks = {tasks}
                    setTasks = {setTasks}
                    add = {()=>openModal('done')} 
                    delete = {deleteTask}
                    />
                </div> 

                {showModal && 
                    <Modal 
                        close = {()=>setShowModal(false)} 
                        setTasks = {setTasks}
                        status = {taskStatus}
                    />
                }
            </div>
        </div>
        </>
    )
}