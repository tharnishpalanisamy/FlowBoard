import './Task.css'

export default function Task(props) {

    const boards = JSON.parse(localStorage.getItem('boards')) || [{boardName: 'personal' , color:'purple'}]   
    
    const board = boards.find(board => board.boardName.toLowerCase() == props.board.toLowerCase()) 

    const date = new Date(props.date) 
    const month = date.toLocaleString('default', { month: 'short' });

    console.log('board' , board);
    
    
    return (
        <div
            className={`card ${props.status == 'done' ? 'card-completed' : ''} ${props.isDragging ? 'dragging' : ''}`}
            style={{ touchAction: 'none' }}
            onPointerDown={(event) => props.pointerDown(event, props.id)}
        >
            <div className="card-header">
                <div className="header-left">
                    <button
                        className={`task-check completeTask ${props.status}`}
                        type="button"
                        onClick={() => props.completeTask(props.id)}
                    >
                        <i className={`fa-solid fa-check text-dark tick ${props.status == 'done' ? 'completed ' : null}`}></i>
                    </button>
                    <div className="card-title">{props.title}</div>
                </div>
                <div className="header-button-container">
                    <button className="delete-task-button" type="button" onClick={() => props.deleteTask(props.id)}>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                    <button className="edit-task-button" type="button" onClick={() => props.openEditModal(props)}>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                </div>
            </div>

            <div className="card-body">
                <span className={`board board-${board.color}`}>{props.board}</span>
                <span className={`priority ${props.priority}`}>{props.priority}</span>
            </div>

            <div className="card-footer">
                <div className="date">
                    <span><i className="fa-regular fa-calendar"></i></span>
                    {month} {date.getDate()} 
                </div>
                <div className="message">
                    <span><i className="fa-regular fa-comment"></i></span>
                    {props.count}
                </div>
            </div>
        </div>
    )
}