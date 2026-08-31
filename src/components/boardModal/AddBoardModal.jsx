import { useContext, useRef, useState } from 'react'
import './AddBoard.css'
import BoardContext from '../../context/addModalContext/BoardContext'

export default function AddBoardModal(){ 
    const {showAddModal , setShowAddModal} = useContext(BoardContext)  
    const [selectedColor , setSelectedColor] = useState(null) 
    
    function hideAddBoard(){
        setShowAddModal(false)
    }

    function selectColor(color){ 
        setSelectedColor(color) 

    }
    return(
        <>
            <div className="add-modal-overlay">
                <div className="add-modal">  
                    <div className="add-modal-header">
                        <p>Add Board</p>  

                        <button onClick={hideAddBoard}
                            className="add-modal-close-btn"
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className="add-modal-body">
                        <div className="board-name-container">
                            <label htmlFor="">Board</label>
                            <input type="text" name="board-name" className="board-input board-name" placeholder='Enter the Board name ...'/> 
                        </div>

                        <div className="board-color">
                            <label>Choose Color</label>

                            <div className="color-options">
                                <button className={`color-option green ${selectedColor == 'green' ? 'color-option-active' : ''}`} title="Green" onClick={()=>setSelectedColor('green')}></button>
                                <button className={`color-option blue ${selectedColor == 'blue' ? 'color-option-active' : ''}`} title="Blue" onClick={()=>setSelectedColor('blue')}></button>
                                <button className={`color-option red ${selectedColor == 'red' ? 'color-option-active' : ''}`} title="Red" onClick={()=>setSelectedColor('red')}></button>
                                <button className={`color-option yellow ${selectedColor == 'yellow' ? 'color-option-active' : ''}`} title="Yellow" onClick={()=>setSelectedColor('yellow')}></button>
                                <button className={`color-option purple ${selectedColor == 'purple' ? 'color-option-active' : ''}`} title="Purple" onClick={()=>setSelectedColor('purple')}></button>
                                <button className={`color-option orange ${selectedColor == 'orange' ? 'color-option-active' : ''}`} title="Orange" onClick={()=>setSelectedColor('orange')}></button>
                                <button className={`color-option pink ${selectedColor == 'pink' ? 'color-option-active' : ''}`} title="Pink" onClick={()=>setSelectedColor('pink')}></button>
                                <button className={`color-option pink ${selectedColor == 'pink' ? 'color-option-active' : ''}`} title="Pink" onClick={()=>setSelectedColor('pink')}></button>


                            </div>
                        </div>

                        <div className="board-icon">
                            <label htmlFor="icon">Choose Icon</label>
                            <div className="icon-options">  
                                <button className="icon-button"><i className="fa-solid fa-school"></i></button>
                                <button className="icon-button"><i className="fa-solid fa-book-open"></i></button>
                                <button className="icon-button"><i className="fa-solid fa-user"></i></button>   
                                <button className="icon-button"><i className="fa-solid fa-house"></i></button>
                                <button className="icon-button"><i className="fa-solid fa-dumbbell"></i></button> 
                                <button className="icon-button"><i className="fa-solid fa-desktop"></i></button> 
                            </div>

                        </div>

                        <div className="board-button-container">
                            <button className="board-cancel-button" onClick={hideAddBoard}>Cancel</button> 
                            <button className="board-add-button">Create Board</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}