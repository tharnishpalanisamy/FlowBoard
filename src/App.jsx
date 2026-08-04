import SideBar from "./components/sidebar/SideBar"; 
import Header from "./components/header/Header"; 
import './App.css'
export default function App(){
    return(
        <>
            <div className="header">
                <SideBar/> 
                <Header/>
            </div>
        </>
    )
}