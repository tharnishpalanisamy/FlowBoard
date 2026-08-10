import './Task.css' 

export default function Task(props) { 
    console.log(props.category);
    
    return(
        <div className="card">
            <div className="card-header"> 

                <button className="task-check completeTask"  type="button"  >
                    <i className="fa-solid fa-check text-dark tick " ></i>
                </button>

                <div className="card-title">{props.title}</div> 
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
                    <span><i class="fa-regular fa-comment"></i></span> {props.count}
                </div>
            </div>
        </div>
    )
}