// import SideBar from "./components/sidebar/SideBar"; 
// import Header from "./components/header/Header"; 
import Layout from './components/layout/Layout' 
import Modal from './components/modal/Modal'
import {createBrowserRouter , createRoutesFromElements, Route , RouterProvider} from 'react-router-dom'
import './App.css'   
import Dashboard from './page/dashboard/Dashboard' 
import Trash from './page/trash/Trash' 
import Personal from './page/boards/personal/Personal' 
import Settings from './page/settings/Settings'
import Analytics from './page/analytics/Analytics' 
import Calender from './page/calender/Calender' 
import AddBoardModal from './components/boardModal/AddBoardModal' 
import TaskManagement from './components/taskManagement/TaskManagement' 

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
        <Route index element={<Personal/>}/> 
        
        {/* Boards */} 
        <Route path='boards/:board' element = {<TaskManagement/>} /> 


        {/* others */} 
        <Route path='calender' element={<Calender/>} /> 
        <Route path='analytics' element={<Analytics/>} /> 
        <Route path='settings' element={<Settings/>} /> 
        <Route path='trash' element={<Trash/>} /> 



    </Route>
))
export default function App(){
    return(
        <>
            <RouterProvider router={router}/>

        </>
    )
}