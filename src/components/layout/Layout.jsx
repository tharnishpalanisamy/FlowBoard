import './Layout.css'
import Header from '../header/Header'
import SideBar from '../sidebar/SideBar'
import Toolbar from '../toolbar/Toolbar'
import Column from '../column/Column'
import Modal from '../modal/Modal' 
import {tasksData} from '../../data/tasks' 
import { useState } from 'react' 

export default function Layout() {
    const [showModal , setShowModal] = useState(false) 
    const [status , setStatus] = useState('todo') 

    const [tasks , setTasks] = useState(tasksData)  

    const [selectedTask , setSelectedTask] = useState(null)

    function openModal(status) {
        setShowModal(true) 
        setStatus(status) 
        setSelectedTask(null)
    } 

    function openEditModal(task) {
        setShowModal(true) 
        setStatus(task.status) 
        setSelectedTask(task)

    }

    function loadData(id) {
        let task = tasks.find(task => task.id === id) 
        
    }

    function deleteTask(id) {
        setTasks(prevTasks =>
            prevTasks.filter(task => task.id !== id)
        )
    }

    // function editTask(id , editedTask) {
    //     setTasks(prevTasks =>{
    //         prevTasks.map(task =>{
    //             if (task.id === id) {
    //                 return editedTask
    //             }
    //             return task 
    //         })
    //     })
    // }
    return (
        <>
            <div className="parent">

                <SideBar />

                <div className="main-content">

                    <Header />

                    <Toolbar showModal = {() =>openModal('todo')}/>

                    <div className="columns">

                        <Column
                        showModal = {() => openModal('todo') }  
                        title = 'To Do'  
                        status = 'todo'
                        tasks = {tasks} 
                        setStatus = {setStatus} 
                        deleteTask = {deleteTask} 
                        openEditModal = {openEditModal}

                        />
                        <Column 
                        showModal = {() => openModal('progress') } 
                        title = 'In progress'  
                        status = 'progress'
                        tasks = {tasks} 
                        setStatus = {setStatus}
                        deleteTask = {deleteTask}
                        openEditModal = {openEditModal}
                        />
                        <Column 
                        showModal = {() => openModal('done') } 
                        
                        title = 'Done'  
                        status = 'done'
                        tasks = {tasks} 
                        setStatus = {setStatus}
                        deleteTask = {deleteTask}
                        openEditModal = {openEditModal}
                        />

                    </div>

                    {showModal && <Modal  
                        status = {status}
                        closeModal = {()=> setShowModal(false)} 
                        setTasks = {setTasks}  
                        tasks = {tasks} 
                        editTask = {selectedTask}
                    />}

                </div>

            </div>
        </>
    )
}