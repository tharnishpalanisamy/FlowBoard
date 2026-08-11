import './Column.css'
import Task from '../task/Task'

export default function Column(props) {
    let tasks = props.tasks.filter(task => task.status == props.status)  
    let tasksEl = tasks.map(task =>{
        return <Task 
        key = {task.id} 
        id= {task.id}
        title = {task.title } 
        board = {task.board} 
        priority = {task.priority} 
        date = {task.date} 
        count = {task.count} 
        
        
        />
    })
    return (
        <div className="column">

            <div className="col-header">

                <div className="col-text">

                    <p className={`column-title todo-title ${props.status}-title `}>
                        {props.title}
                    </p>

                    <span className={`column-count todo-count ${props.status}-count`}>
                        {tasksEl.length}
                    </span>

                </div>

                <div className="col-add">

                    <button
                        className="sidebar-link add-btn-top"
                        type="button" 
                        onClick={() => props.showModal(props.status)} 
                    >
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

                <button
                    className={`add-task-button todo-button ${props.status}-button`}
                    type="button" 
                    onClick={() => props.showModal(props.status)} 
                >
                    <span>
                        <i className="fa-solid fa-plus add-task-icon"></i>
                    </span>

                    Add Task
                </button>

            </div>

        </div>
    )
}