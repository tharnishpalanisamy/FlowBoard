import './Column.css' 
import Task from '../task/Task' 
export default function Column(props) {
    return(
        <div className="column">
            <div className="col-header">
                <div className="col-text">
                    <p className="column-title">To Do</p> 
                    <span className="column-count">5</span> 
                </div> 

                <div className="col-add">
                    <p className="sidebar-link"><span><i className="fa-solid fa-plus icon-plus icon add-icon"></i></span></p>
                </div>
            </div>

            <div className="col-body">
                <Task/> 
                <Task/>
                <Task/>
            </div>

            <div className="col-footer">
                <button className="add-task-button">
                    <span><i className="fa-solid fa-plus add-task-icon"></i></span> 
                    Add Task
                </button>
            </div>
        </div>
    )
}