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

    function openModal(status) {
        setShowModal(true) 
        setStatus(status) 
    } 
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

                         />
                        <Column 
                        showModal = {() => openModal('progress') } 
                        title = 'In progress'  
                         status = 'progress'
                         tasks = {tasks} 
                         setStatus = {setStatus}
                        />
                        <Column 
                        showModal = {() => openModal('done') } 
                        
                        title = 'Done'  
                         status = 'done'
                         tasks = {tasks} 
                         setStatus = {setStatus}
                         />
 
                    </div>

                    {showModal && <Modal  
                        status = {status}
                        closeModal = {()=> setShowModal(false)} 
                        setTasks = {setTasks}  
                        tasks = {tasks}
                    />}

                </div>

            </div>
        </>
    )
}