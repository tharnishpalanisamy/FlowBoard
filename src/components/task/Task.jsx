import './Task.css'

export default function Task(props) {
    
    return (
        <div className="card">

            <div className="card-header">

                <div className="header-left">

                    <button
                        className="task-check completeTask"
                        type="button"
                    >
                        <i className="fa-solid fa-check text-dark tick"></i>
                    </button>

                    <div className="card-title">
                        {props.title}
                    </div>
                </div>

                <div className="header-button-container">

                    <button
                        className="delete-task-button"
                        type="button" 
                        onClick={() => props.deleteTask(props.id)}
                    >
                        <i className="fa-solid fa-trash"></i>
                    </button>

                    <button
                        className="edit-task-button"
                        type="button" onClick={()=>props.openEditModal(props) }> 
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>

                </div>

            </div>

            <div className="card-body">

                <span className={`board ${props.board}`}>
                    {props.board}
                </span>

                <span className={`priority ${props.priority}`}>
                    {props.priority}
                </span>

            </div>

            <div className="card-footer">

                <div className="date">
                    <span>
                        <i className="fa-regular fa-calendar"></i>
                    </span>

                    {props.date}
                </div>

                <div className="message">
                    <span>
                        <i className="fa-regular fa-comment"></i>
                    </span>

                    {props.count}
                </div>

            </div>

        </div>
    )
}