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
                                <button className="color-option green" title="Green" onClick={(event) => selectColor(event)}></button>
                                <button className="color-option blue" title="Blue" onClick={(event) => selectColor(event)}></button>
                                <button className="color-option red" title="Red" onClick={(event) => selectColor(event)}></button>
                                <button className="color-option yellow" title="Yellow" onClick={(event) => selectColor(event)}></button>
                                <button className="color-option purple" title="Purple" onClick={(event) => selectColor(event)}></button>
                                <button className="color-option orange" title="Orange" onClick={(event) => selectColor(event)}></button>
                            </div>
                        </div>

                        <div className="board-icon">
                            <label htmlFor="icon">Choose Icon</label>
                            <select name="icon" id="icon" className='board-input'> 
                                <option value="">Select an Icon</option>
                                <option value="house">🏠</option>
                                <option value="user">👤</option>
                                <option value="cart">🛒</option>
                                <option value="book">📖</option>
                                <option value="school">🏫</option>
                                <option value="graduation">🎓</option>
                            </select> 

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