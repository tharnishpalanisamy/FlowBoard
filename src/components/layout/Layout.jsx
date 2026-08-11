import './Layout.css'
import Header from '../header/Header'
import SideBar from '../sidebar/SideBar'
import Toolbar from '../toolbar/Toolbar'
import Column from '../column/Column'
import Modal from '../modal/Modal'

export default function Layout() {

    return (
        <>
            <div className="parent">

                <SideBar />

                <div className="main-content">

                    <Header />

                    <Toolbar />

                    <div className="columns">

                        <Column />
                        <Column />
                        <Column />

                    </div>

                    {/* <Modal /> */}

                </div>

            </div>
        </>
    )
}