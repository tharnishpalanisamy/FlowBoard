import './Task.css' 

export default function Task(props) {
    return(
        <div className="card">
            <div className="card-header"> 

                <button className="task-check completeTask"  type="button"  >
                    <i className="fa-solid fa-check text-dark tick " ></i>
                </button>

                <div className="card-title">Learn React Hooks</div> 
            </div>
            <div className="card-body">
                <span className="catagory Study">Study</span> 
                <span className="priority High">High</span> 
            </div>

            <div className="card-footer">
                <div className="date">
                    <span><i className="fa-regular fa-calendar"></i></span> 
                    May 25
                </div> 
                <div className="message">
                    <span><i class="fa-regular fa-comment"></i></span> 3
                </div>
            </div>
        </div>
    )
}