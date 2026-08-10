import './Modal.css' 

export default function Modal(props){

    function createTask(event){ 
        event.preventDefault() 
        let data = new FormData(event.currentTarget)   
        props.close() 
        
        const newTask = {
            title: data.get('title'),
            description: data.get('description'),
            board: data.get('board'),
            status: data.get('status'),
            priority: data.get('priority'),
            date: data.get('date'),
            category: data.get('category') ,
            count: Math.ceil(Math.random()   * 5)  , 
            status : 'todo'
        }

        props.setTasks(prevVal => [...prevVal , newTask])
        
        
    }
     
    return(
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <h3 className="header-title">
                        Add New Task
                    </h3> 
                    <button className="modal-close-btn" 
                    onClick={props.close}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button> 
                </div>
                
                <div className="modal-body">
                    <form className="add-task-modal" onSubmit={createTask}>
                        
                    <div className="modal-title">
                        <label htmlFor="" className="title-label">Title</label> 
                        <input type="text" className="title-input" name='title'
                        placeholder='e.g. Learn React Context API ' 
                        />
                    </div> 
                    <div className="modal-description">
                        <label htmlFor="" className="description-label">Description</label> 
                        <textarea 
                            cols={30 } 
                            rows={4}
                            className="description-input"
                            defaultValue="" 
                            placeholder='What Needs to be Done?' 
                            name='description'
                        />
                    </div> 

                    <div className="container1">
                        <div className="board">
                            <label htmlFor="board" className="board-label">Board</label> 
                            <select name="board" id="board" className="board-select" >
                                <option value="Personal">Personal</option>
                                <option value="Kanban">Kanban</option>
                                <option value="Jira">Jira</option>    
                            </select> 
                        </div>

                        <div className="status">
                            <label htmlFor="status" className="status-label">Status</label> 
                            <select name="status" id="status" className="status-select">
                                <option value="todo">todo</option>
                                <option value="progress">progress</option>
                                <option value="done">done</option>    
                            </select> 
                        </div>
                    </div> 

                    <div className="container2">
                        <div className="priority-container">
                            <label htmlFor="priority" className="priority-label">Priority</label> 
                            <select name="priority" id="priority" className="priority-select">
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>    
                            </select> 
                        </div>

                        <div className="date-container">
                            <label htmlFor="date" className="date-label">Date</label> 
                            <input type="date"  className='date-input' name='date'/>
                        </div>
                    </div>

                    <div className="category">
                        <label htmlFor="" className="category-label">Labels</label> 
                        <select name="category" id="category" className="category-select">
                            <option value="Study">Study</option>
                            <option value="Coding">Coding</option>
                        </select>
                    </div>
                    <div className="modal-button-container">
                        <button type='button' className="cancel-task-button" onClick={props.close}>Cancel</button> 
                        <button type='submit' className="create-task-button">Create Task</button> 
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}