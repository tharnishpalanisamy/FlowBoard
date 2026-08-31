import './Layout.css'
import Header from '../header/Header'
import SideBar from '../sidebar/SideBar' 
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import BoardContext from '../../context/addModalContext/BoardContext' 
import AddBoardModal from '../boardModal/AddBoardModal'


const DRAG_THRESHOLD = 5 // px of movement before a "click" becomes a "drag"

export default function Layout() {
    const {showAddModal , setShowAddModal} = useContext(BoardContext)

    return (
        <>
            <div className="parent">
                <SideBar />
                <div className="main-content">
                    <Header /> 
                    <Outlet/>
                </div>
            </div> 

            {showAddModal && <AddBoardModal/> }
        </>
    )
}