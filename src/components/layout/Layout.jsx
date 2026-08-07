import './Layout.css' 
import Header from '../header/Header' 
import SideBar from '../sidebar/SideBar' 
import Toolbar from '../toolbar/Toolbar' 
import Task from '../task/Task' 
import Column from '../column/Column'

export default function Layout (){
    return(
        <>
        <div className="parent">
            <SideBar/> 
            <div className="main-content">
                <Header/> 
                <Toolbar/> 
                <div className="columns">
                    <Column/>
                    <Column/>
                    <Column/>
                </div>
            </div>
        </div>
        </>
    )
}