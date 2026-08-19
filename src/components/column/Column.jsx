import './Column.css'
import Task from '../task/Task'

export default function Column(props) {
    let tasks = props.tasks.filter(task => task.status === props.status)
    let tasksEl = tasks.map(task => (
        <Task
            key={task.id}
            id={task.id}
            title={task.title}
            board={task.board}
            priority={task.priority}
            date={task.date}
            count={task.count}
            deleteTask={props.deleteTask}
            openEditModal={props.openEditModal}
            description={task.description}
            status={task.status}
            completeTask={props.completeTask}
            completion={task.completion}
            pointerDown={props.pointerDown}
            isDragging={props.draggingId === task.id}
        />
    )) 

    tasksEl.reverse() 

    return (
        <div className="column" data-column-id={props.status} >
            <div className="col-header" onPointerDown={(event) => props.columnPointerDown(event, props.status)}> 
                <div className="col-text">
                    <p className={`column-title todo-title ${props.status}-title `}>
                        {props.title}
                    </p>
                    <span className={`column-count todo-count ${props.status}-count`}>
                        {tasksEl.length}
                    </span>
                </div>
                <div className="col-add">
                    <button className="sidebar-link add-btn-top" type="button" onClick={props.showModal}>
                        <span><i className="fa-solid fa-plus icon-plus icon add-icon"></i></span>
                    </button>
                </div>
            </div>

            <div
                className={`col-body ${props.dragOverStatus === props.status ? 'col-body-over' : ''}`}
                data-status={props.status}
            >
                {tasksEl}
            </div>

            <div className="col-footer">
                <button className={`add-task-button todo-button ${props.status}-button`} type="button" onClick={props.showModal}>
                    <span><i className="fa-solid fa-plus add-task-icon"></i></span>
                    Add Task
                </button>
            </div>
        </div>
    )
}