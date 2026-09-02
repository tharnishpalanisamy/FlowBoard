import './SideBar.css' 
import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import BoardContext from '../../context/addModalContext/BoardContext'



const ICONS = {
    user: "fa-solid fa-user",
    briefcase: "fa-solid fa-briefcase",
    school: "fa-solid fa-graduation-cap",
    book: "fa-solid fa-book-open",
    house: "fa-solid fa-house",
    dumbbell: "fa-solid fa-dumbbell",
    desktop: "fa-solid fa-desktop",
    code: "fa-solid fa-code"
}

export default function SideBar(){

    const {showAddModal , setShowAddModal} = useContext(BoardContext)

    function renderBoards(){
        let boards = JSON.parse(localStorage.getItem('boards') ) || [{boardName : 'Personal' , color:'purple' , icon: 'user'}] 

        return boards.map(board =>{
            return (
                <NavLink key={board.boardName} to={`boards/${board.boardName.toLowerCase()}`} className={'sidebar-link'}>
                    <span><i className={`${ICONS[board.icon]} icon ${board.color}`}></i></span> 
                    {board.boardName}
                </NavLink>
            )
        } )
    }

    let elements = renderBoards() 

    function handleAddBoard(){
        setShowAddModal(true) 
    }


    return(
        <aside className='sidebar'>
            <div className="logo-contanier">
                <img src="../src\assets\logo.png" alt="" className="logo" /> 
                <h3 className="logo-name">FlowBoard</h3>
            </div>

            <div className="top">
                <NavLink to={'/'} className="sidebar-link"><span><i className="fa-solid fa-house house-icon icon"></i></span> Dashboard</NavLink>
            </div>

            <div className="boards">
                <span className="sidebar-title">BOARDS</span> 
                <div className="boards-items">
                    {/* <NavLink to='personal' className="sidebar-link"><span><i className="fa-solid fa-table-cells-large personal-icon icon"></i></span> Personal</NavLink> */}
                    {elements}
                    {/* <NavLink to='work' className="sidebar-link"><span><i className="fa-solid fa-briefcase icon work-icon"></i></span> Work</NavLink>
                    <NavLink to='study' className="sidebar-link"><span><i className="fa-solid fa-graduation-cap icon study-icon"></i></span> Study</NavLink>
                    <NavLink to='shopping' className="sidebar-link"><span><i className="fa-solid fa-cart-shopping icon shopping-icon"></i></span> Shopping</NavLink> */}
                    <button onClick={handleAddBoard} to='newboard' className="sidebar-button sidebar-link"><span><i className="fa-solid fa-plus icon-plus icon add-icon"></i></span> New Board</button>
                </div>
            </div> 

            <div className="other">
                <span className="sidebar-title">OTHER</span> 
                <div className="other-items">
                    <NavLink to='calender' className="sidebar-link"><span><i className="fa-regular fa-calendar icon"></i></span> Calender</NavLink>
                    <NavLink to='analytics' className="sidebar-link"><span><i className="fa-solid fa-chart-line icon"></i></span> Analytics</NavLink>
                    <NavLink to='settings' className="sidebar-link"><span><i className="fa-solid fa-gear icon"></i></span> Settings</NavLink>
                    <NavLink to={'trash'} className="sidebar-link"><span><i className="fa-regular fa-trash-can icon"></i></span> Trash</NavLink>
                </div>
            </div>
        </aside> 

        
    )
}   