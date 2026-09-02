import { useParams } from 'react-router-dom';
import './Modal.css'

export default function Modal(props) {
    console.log( 'edit task' , props.editTask);

    console.log('hi' , props.tasks);

    const params = useParams() 
    const board = params.board  
    console.log('bioard' , board);
    
    
    function createTask(event){
        event.preventDefault() 
        
        
        let formData = new FormData(event.currentTarget) 
        
        let title = formData.get('title') 
        let description = formData.get('description') 
        let priority = formData.get('priority') 
        let date = formData.get('date') 
        let status = formData.get('status')

        if(!title) {
            alert('title cannot be empty') 
            return  
        } 

        for (let i = 0 ; i < props.tasks.length ; i++) {
            let task = props.tasks[i] 
            if (task.title == title) {
                alert('title already exists') 
                return 
            }
        }

        
        let newTask = { 
            id : Date.now()  ,  
            title ,description ,priority , date  , status , board 
        } 

        props.setTasks(prevTasks => [...prevTasks , newTask]) 
        props.closeModal()

        
    }

    function editTask(event , id) { 

        event.preventDefault() 
        
        
        let formData = new FormData(event.currentTarget) 
        
        let title = formData.get('title') 
        let description = formData.get('description') 
        let priority = formData.get('priority') 
        let date = formData.get('date') 
        let status = formData.get('status')

        if(!title) {
            alert('title cannot be empty') 
            return  
        }
        let editedTask = {
            id : id , title , description , board , priority , date, status 
        }

        props.setTasks(prevTasks =>(
            prevTasks.map(task =>{
                if (task.id === id) {
                    return editedTask
                }
                return task 
            })
        )) 

        props.closeModal() 
    }

    return (
        <div className="modal-overlay">
            <div className="modal">

                <div className="modal-header">
                    <h3 className="header-title">
                        {props.editTask ? 'Edit Task' :'Add New Task'}
                    </h3>

                    <button
                        className="modal-close-btn"
                        onClick={props.closeModal}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div className="modal-body">
                    <form className="add-task-modal" onSubmit={props.editTask ? (event)=> editTask(event , props.editTask.id) 
                        : createTask}>

                        <div className="modal-title">
                            <label
                                htmlFor="title"
                                className="title-label"
                            >
                                Title
                            </label>

                            <input
                                type="text"
                                className="title-input"
                                name="title"
                                id="title"
                                placeholder="Enter the Task title..."
                                defaultValue={props.editTask ? props.editTask.title : '' }
                            />
                        </div>

                        <div className="modal-description">
                            <label
                                htmlFor="description"
                                className="description-label"
                            >
                                Description
                            </label>

                            <textarea
                                cols={30}
                                rows={4}
                                className="description-input"
                                placeholder="Add Task Description..."
                                name="description"
                                id="description" 
                                defaultValue={props.editTask?props.editTask.description:''}
                            />
                        </div>

                        {/* <div className="container1">

                            <div className="board">
                                <label
                                    htmlFor="board"
                                    className="board-label"
                                >
                                    Board
                                </label>

                                <select
                                    name="board"
                                    id="board"
                                    className="board-select" 
                                    defaultValue={props.editTask ?props.editTask.board : null } 
                                >
                                    <option value="Personal">
                                        Personal
                                    </option>

                                    <option value="Kanban">
                                        Kanban
                                    </option>

                                    <option value="Jira">
                                        Jira
                                    </option>
                                </select>
                            </div>

                            <div className="status">
                                <label
                                    htmlFor="status"
                                    className="status-label"
                                >
                                    Status
                                </label>

                                <select
                                    name="status"
                                    id="status"
                                    className="status-select" 
                                    defaultValue={props.editTask ? props.editTask.status : props.status}
                                >
                                    <option value="todo">
                                        todo
                                    </option>

                                    <option value="progress">
                                        progress
                                    </option>

                                    <option value="done">
                                        done
                                    </option>
                                </select>
                            </div>

                        </div> */}

                        <div className="container2">

                            <div className="priority-container">
                                <label
                                    htmlFor="priority"
                                    className="priority-label"
                                >
                                    Priority
                                </label>

                                <select
                                    name="priority"
                                    id="priority"
                                    className="priority-select"
                                    defaultValue={props.editTask ?props.editTask.priority : null } 
                                >
                                    <option value="High">
                                        High
                                    </option>

                                    <option value="Medium">
                                        Medium
                                    </option>

                                    <option value="Low">
                                        Low
                                    </option>
                                </select>
                            </div>

                            <div className="date-container">
                                <label
                                    htmlFor="date"
                                    className="date-label"
                                >
                                    Date
                                </label>

                                <input
                                    type="date"
                                    className="date-input"
                                    name="date"
                                    id="date"
                                    defaultValue={props.editTask ?props.editTask.date : null } 
                                />
                            </div>

                        </div>

                        <div className="status-container">
                            <label
                                htmlFor="status"
                                className="board-label"
                            >
                                Status
                            </label>

                            <select
                                name="status"
                                id="status"
                                className="status-select"
                                defaultValue={props.editTask ?props.editTask.label : null } 
                            >
                                <option value="todo">
                                    todo
                                </option>

                                <option value="progress">
                                    In progress
                                </option>

                                <option value="done">
                                     done
                                </option>
                            </select>
                        </div>

                        <div className="modal-button-container">

                            <button
                                type="button"
                                className="cancel-task-button"
                                onClick={props.closeModal}
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="create-task-button"
                            >
                                {props.editTask ? 'Edit Task' : 'Create Task'}
                            </button>

                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}