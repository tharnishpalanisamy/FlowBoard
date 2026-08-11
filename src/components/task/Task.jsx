import './Task.css'

export default function Task() {

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
                        Complete React Course
                    </div>

                </div>

                <div className="header-button-container">

                    <button
                        className="delete-task-button"
                        type="button"
                    >
                        <i className="fa-solid fa-trash"></i>
                    </button>

                    <button
                        className="edit-task-button"
                        type="button"
                    >
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>

                </div>

            </div>

            <div className="card-body">

                <span className="board Personal">
                    Personal
                </span>

                <span className="priority High">
                    High
                </span>

            </div>

            <div className="card-footer">

                <div className="date">
                    <span>
                        <i className="fa-regular fa-calendar"></i>
                    </span>

                    Aug 11
                </div>

                <div className="message">
                    <span>
                        <i className="fa-regular fa-comment"></i>
                    </span>

                    3
                </div>

            </div>

        </div>
    )
}