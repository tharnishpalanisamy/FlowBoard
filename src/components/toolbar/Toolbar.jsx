import './Toolbar.css' 

export default function Toolbar(props){
    return(
        <div className="toolbar">
            <div className="toolbar-options">
                <p className="toolbar-link toolbar-active"><span><i className="fa-solid fa-table-cells-large icon"></i>
                </span> Board</p>
                <p className="toolbar-link"><span><i className="fa-regular fa-calendar icon"></i></span> Calender</p>
                <p className="toolbar-link"><span><i className="fa-solid fa-chart-line icon"></i></span> Analytics</p>
            </div>

            <div className="toolbar-buttons">
                <button className="filterBtn"><span><i className='bx bx-filter-alt icon' ></i></span> Filter</button> 
                <button className="addTaskBtn" onClick={props.add}><span>
                    <i className="fa-solid fa-plus icon-plus icon add-icon"></i></span> Add Task
                </button>
                <button className="menuBtn"><i className="fa-solid fa-ellipsis-vertical icon menuIcon"></i></button>
            </div> 
        </div>
    )
}