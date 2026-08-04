import './SideBar.css' 

export default function SideBar(){
    return(
        <aside className='sidebar'>
            <div className="logo-contanier">
                <img src="../src\assets\logo.png" alt="" className="logo" /> 
                <h3 className="logo-name">FlowBoard</h3>
            </div>

            <div className="top">
                <p className="sidebar-link active"><span><i class="fa-solid fa-house icon"></i></span> Dashboard</p>
            </div>

            <div className="boards">
                <span className="sidebar-title">BOARDS</span> 
                <div className="boards-items">
                    <p className="sidebar-link active"><span><i class="fa-solid fa-table-cells-large icon"></i></span> Personal</p>
                    <p className="sidebar-link"><span><i class="fa-solid fa-briefcase icon work-icon"></i></span> Work</p>
                    <p className="sidebar-link"><span><i class="fa-solid fa-graduation-cap icon study-icon"></i></span> Study</p>
                    <p className="sidebar-link"><span><i class="fa-solid fa-cart-shopping icon shopping-icon"></i></span> Shopping</p>
                    <p className="sidebar-link"><span><i class="fa-solid fa-plus icon-plus icon add-icon"></i></span> New Board</p>
                </div>
            </div> 

            <div className="other">
                <span className="sidebar-title">OTHER</span> 
                <div className="other-items">
                    <p className="sidebar-link"><span><i class="fa-regular fa-calendar icon"></i></span> Calender</p>
                    <p className="sidebar-link"><span><i class="fa-solid fa-chart-line icon"></i></span> Analytics</p>
                    <p className="sidebar-link"><span><i class="fa-solid fa-gear icon"></i></span> Settings</p>
                    <p className="sidebar-link"><span><i class="fa-regular fa-trash-can icon"></i></span> Trash</p>
                </div>
            </div>
        </aside>
    )
}