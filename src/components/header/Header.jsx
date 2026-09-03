import { useLocation, useParams } from 'react-router-dom'
import './Header.css' 

export default function Header(){ 
    let params = useParams() 
    const location = useLocation() 

    const isTrash = location.pathname === '/trash' 

    return(
        <header>
            <nav className="nav-bar">
                <div className="menu">

                    <div className="menu-option">
                        <i className="fa-solid fa-bars menu-icon"></i>
                    </div>

                    <div className="menu-dropdown">
                        <span className='menu-text'>Personal</span> 
                        <select name="" id="select"></select>
                    </div> 

                    <div className="menu-star">
                        <i className="fa-solid fa-star star-icon"></i>
                    </div>
                </div> 

                <div className="options">
                    {!params.board && !isTrash ? <div className="search-task">
                        <i className="fa-solid fa-magnifying-glass search-icon"></i>

                        <input
                            type="text"
                            className="input-task"
                            placeholder="Search tasks..."
                        />
                    </div> : null}
                    <div className="theme">
                        <button className='theme-btn'><i className='bx bx-sun theme-icon'></i></button> 
                    </div> 

                    <div className="notification">
                        <button className="notification-btn"><i className="fa-regular fa-bell notification-icon"></i></button>
                    </div>

                    <div className="profile">
                        <button className="profile-btn"><i className="fa-solid fa-user profile-icon"></i></button>
                    </div>
                </div>
                
            </nav>
        </header>
    )
}