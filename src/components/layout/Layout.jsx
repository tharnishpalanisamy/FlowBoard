import './Layout.css'
import Header from '../header/Header'
import SideBar from '../sidebar/SideBar' 
import { Outlet } from 'react-router-dom'


const DRAG_THRESHOLD = 5 // px of movement before a "click" becomes a "drag"

export default function Layout() {
    

    return (
        <>
            <div className="parent">
                <SideBar />
                <div className="main-content">
                    <Header /> 
                    <Outlet/>
                </div>
            </div>
        </>
    )
}