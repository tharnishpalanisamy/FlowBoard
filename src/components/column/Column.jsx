import './Column.css' 
import Task from '../task/Task'  
import {tasksData} from '../../data/tasks'
import { useState } from 'react'

export default function Column(props) { 
    let data = props.tasks.filter(task => task.status == props.catagory) 
    let tasksEl = data.map(task =>{
        return (
            <Task 
                title = {task.title}
                status = {task.status}
                category = {task.category} 
                priority = {task.priority} 
                date = {task.date} 
                count = {task.count} 
                
                />
        )
    })

    return(
        <div className="column">
            <div className="col-header">
                <div className="col-text">
                    <p className={`column-title ${props.catagory}-title`}>{props.title}</p> 
                    <span className={`column-count ${props.catagory}-count`}>{props.count}</span> 
                </div> 

                <div className="col-add">
                    <button className="sidebar-link add-btn-top" onClick={props.add}>
                        <span>
                            <i className="fa-solid fa-plus icon-plus icon add-icon"></i>
                        </span>
                    </button>
                </div>
            </div>

            <div className="col-body">
                {tasksEl}
            </div>

            <div className="col-footer">
                <button className= {`add-task-button ${props.catagory}-button`} 
                onClick={props.add}
                >
                    <span><i className="fa-solid fa-plus add-task-icon"></i></span> 
                    Add Task
                </button>
            </div>
        </div>
    )
}