import { useParams } from 'react-router-dom';
import './Modal.css'


function getLocalDateString(d = new Date()) {
    const year = d.getFullYear()
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
}

function isPastDate(dateStr) {
    if (!dateStr) return true

    const selected = new Date(dateStr + 'T00:00:00')
    if (isNaN(selected.getTime())) return true   // garbage/unparseable input

    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

    return selected < today
}


export default function Modal(props) {

    const params = useParams()
    const board = params.board

    function createTask(event) {
        event.preventDefault()

        let formData = new FormData(event.currentTarget)

        let title = formData.get('title')
        let description = formData.get('description')
        let priority = formData.get('priority')
        let date = formData.get('date')
        let status = formData.get('status')

        if (!title || !date) {
            alert('Please fill all the required fields')
            return
        }

        if (isPastDate(date)) {
            alert('Date cannot be from Past')
            return
        }

        for (let i = 0; i < props.tasks.length; i++) {
            let task = props.tasks[i]
            if (task.title == title) {
                alert('title already exists')
                return
            }
        }

        let newTask = {
            id: Date.now(),
            title, description, priority, date, status, board, createdOn: new Date()
        }

        props.setTasks(prevTasks => [...prevTasks, newTask])
        props.closeModal()
    }

    function editTask(event, id) {
        event.preventDefault()

        let formData = new FormData(event.currentTarget)

        let title = formData.get('title')
        let description = formData.get('description')
        let priority = formData.get('priority')
        let date = formData.get('date')
        let status = formData.get('status')

        if (!title || !date) {
            alert('Please fill all the required fields')
            return
        }

        if (isPastDate(date)) {
            alert('Date cannot be from Past')
            return
        }

        let editedTask = {
            id: id, title, description, board, priority, date, status
        }

        props.setTasks(prevTasks => (
            prevTasks.map(task => {
                if (task.id === id) {
                    return editedTask
                }
                return task
            })
        ))

        props.closeModal()
    }

    function handleSubmit(event) {
        if (!event.currentTarget.checkValidity()) {
            event.preventDefault()
            event.currentTarget.reportValidity()
            return
        }
        return props.editTask ? editTask(event, props.editTask.id) : createTask(event)
    }

    return (
        <div className="modal-overlay">
            <div className="modal">

                <div className="modal-header">
                    <h3 className="header-title">
                        {props.editTask ? 'Edit Task' : 'Add New Task'}
                    </h3>

                    <button
                        className="modal-close-btn"
                        onClick={props.closeModal}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div className="modal-body">
                    <form className="add-task-modal" onSubmit={handleSubmit}>

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
                                defaultValue={props.editTask ? props.editTask.title : ''}
                                required
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
                                defaultValue={props.editTask ? props.editTask.description : ''}
                            />
                        </div>

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
                                    defaultValue={props.editTask ? props.editTask.priority : null}
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
                                    required
                                    min={getLocalDateString()}
                                    defaultValue={props.editTask ? props.editTask.date : null}
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
                                defaultValue={props.editTask ? props.editTask.status : props.status}
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