import './Column.css'
import Task from '../task/Task'

export default function Column() {

    return (
        <div className="column">

            <div className="col-header">

                <div className="col-text">

                    <p className="column-title todo-title">
                        To Do
                    </p>

                    <span className="column-count todo-count">
                        3
                    </span>

                </div>

                <div className="col-add">

                    <button
                        className="sidebar-link add-btn-top"
                        type="button"
                    >
                        <span>
                            <i className="fa-solid fa-plus icon-plus icon add-icon"></i>
                        </span>
                    </button>

                </div>

            </div>

            <div className="col-body">

                <Task />
                <Task />
                <Task />

            </div>

            <div className="col-footer">

                <button
                    className="add-task-button todo-button"
                    type="button"
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