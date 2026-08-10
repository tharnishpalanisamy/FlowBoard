import './Task.css' 

export default function Task(props) {  

    
    return(
        <div className="card">
            <div className="card-header"> 

                <div className="header-left">
                    <button className="task-check completeTask"  type="button"  >
                        <i className="fa-solid fa-check text-dark tick " ></i>
                    </button>

                    <div className="card-title">{props.title}</div> 
                </div> 

                <button className="delete-task-button" onClick={()=>props.delete(props.title)}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
            <div className="card-body">
                <span className={`category ${props.category}`}>{props.category}</span> 
                <span className={`priority ${props.priority}`}>{props.priority}</span> 
            </div>

            <div className="card-footer">
                <div className="date">
                    <span><i className="fa-regular fa-calendar"></i></span> 
                    {props.date}
                </div> 
                <div className="message">
                    <span><i className="fa-regular fa-comment"></i></span> {props.count}
                </div>
            </div>
        </div>
    )
}