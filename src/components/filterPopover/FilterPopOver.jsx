import './FilterPopOver.css'
import TaskContext from '../../context/taskContext/TaskContext'
import { useContext, useState } from 'react'

export default function FilterPopOver() {
    const defaultFilters={
        priority: [],
        dueDate: 'none',
        sortBy: 'dueDate',
        order: 'newest'
    }
    const {
        filters,
        setFilters,
        showPopover,
        setShowPopOver
    } = useContext(TaskContext) 

    const [tempFilters , setTempFilters] = useState(filters)

    const handleSubmit = (event) => {
        event.preventDefault()

        setFilters(tempFilters)
        setShowPopOver(false) 
    }
     console.log('filers' , filters);
     
    const handleClear = () => {
        setFilters(defaultFilters) 
        setTempFilters(defaultFilters) 
    }

    //change handlers
    function changePriority(event){
        const value = event.target.value 
        setTempFilters(prev =>({
            ...prev , 
            priority : prev.priority.includes(value) ? prev.priority.filter(item => item != value) 
            : [...prev.priority , value]
        })) 
    }

    function changeDueDate(event) {
        const value = event.target.value 

        setTempFilters(prev=>({
            ...prev , 
            dueDate : value 
        }))
    }

    function changeSortBy(event){
        const value = event.target.value 

        setTempFilters(prev=>({
            ...prev , sortBy : value 
        }))
    }

    function changeOrder(event){
        const value = event.target.value 

        setTempFilters(prev=>({
            ...prev , order : value 
        }))
    }

    
    return (
        <form className="popover" onSubmit={handleSubmit}>

            <div className="popover-header">
                <h4 className="popover-title">
                    Filter Tasks
                </h4> 

                <button type='button' className="close-popover-button" onClick={()=>setShowPopOver(false)}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>

            {/* Priority */}
            <div className="popover-filter">

                <p className="popover-para">
                    Priority
                </p>

                <label>
                    <input
                        type="checkbox"
                        name="priority"
                        onChange={(event)=>changePriority(event)}
                        value="Low"
                        checked={tempFilters.priority.includes('Low')} 
                    />
                    Low
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="priority"
                        onChange={(event)=>changePriority(event)}
                        value="Medium" 
                        checked={tempFilters.priority.includes('Medium')}     
                    />
                    Medium
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="priority"
                        onChange={(event)=>changePriority(event)}
                        value="High"
                        checked={tempFilters.priority.includes('High')}
                    />
                    High
                </label>

            </div>


            {/* Due Date */}
            <div className="popover-filter">

                <p className="popover-para">
                    Due Date
                </p>

                <label>
                    <input
                        type="radio"
                        name="dueDate"
                        onChange={(event)=>changeDueDate(event)}
                        checked={tempFilters.dueDate == 'overdue'}
                        value="overdue"
                    />
                    Overdue
                </label>

                <label>
                    <input
                        type="radio"
                        name="dueDate"
                        onChange={(event)=>changeDueDate(event)}
                        checked={tempFilters.dueDate == 'today'}
                        value="today"
                    />
                    Today
                </label>

                <label>
                    <input
                        type="radio"
                        name="dueDate"
                        onChange={(event)=>changeDueDate(event)}
                        checked={tempFilters.dueDate == 'week'}
                        value="week"
                    />
                    This Week
                </label>

                <label>
                    <input
                        type="radio"
                        name="dueDate"
                        onChange={(event)=>changeDueDate(event)}
                        // checked={tempFilters.dueDate == 'none'}
                        value="none"
                    />
                    No Due Date
                </label>

            </div>


            {/* Sort */}
            <div className="popover-sort">

                <div>

                    <p className="popover-para">
                        Sort By
                    </p>

                    <select name="sortBy" value={tempFilters.sortBy} onChange={(event) => changeSortBy(event)}>

                        <option value="dueDate">
                            Due Date
                        </option>

                        <option value="createdAt">
                            Created Date
                        </option>

                        <option value="priority">
                            Priority
                        </option>

                        <option value="title">
                            Title
                        </option>

                    </select>

                </div>


                <div>

                    <p className="popover-para">
                        Order
                    </p>

                    <select name="order" value={tempFilters.order} onChange={(event)=>changeOrder(event)}>

                        <option value="newest">
                            Newest First
                        </option>

                        <option value="oldest">
                            Oldest First
                        </option>

                    </select>

                </div>

            </div>


            {/* Actions */}
            <div className="popover-actions">

                <button
                    type="button"
                    className="clear-btn"
                    onClick={handleClear}
                >
                    Clear Filters
                </button>

                <button
                    type="submit"
                    className="apply-btn"
                >
                    Apply Filters
                </button>

            </div>

        </form>
    )
}