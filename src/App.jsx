// import SideBar from "./components/sidebar/SideBar"; 
// import Header from "./components/header/Header"; 
import Layout from './components/layout/Layout' 
import Modal from './components/modal/Modal'
import {createBrowserRouter , createRoutesFromElements, Route , RouterProvider} from 'react-router-dom'
import './App.css'   
import Dashboard from './page/dashboard/Dashboard' 
import Trash from './page/trash/Trash' 
import Personal from './page/boards/personal/Personal'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
        <Route index element={<Dashboard/>}/> 
        <Route path='trash' element={<Trash/>} /> 


        {/* Boards */} 
        <Route path='personal' element = {<Personal/>} />


    </Route>
))
export default function App(){
    return(
        <>
            <RouterProvider router={router}/>

        </>
    )
}