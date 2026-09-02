import { useContext, useRef, useState } from 'react'
import './AddBoard.css'
import BoardContext from '../../context/addModalContext/BoardContext'

export default function AddBoardModal(){ 
    const {showAddModal , setShowAddModal} = useContext(BoardContext)  
    const [selectedColor , setSelectedColor] = useState(null)  
    const [selectedIcon , setSelectedIcon] = useState(null)
    
    function hideAddBoard(){
        setShowAddModal(false)
    }

    function addBoard(event){
        event.preventDefault() 
        let formData = new FormData(event.currentTarget) 
        let boardName = formData.get("board-name") 
        let icon = selectedIcon 
        let color = selectedColor 

        if(!boardName || icon == null || color == null) {
            alert('Please provide the details correctly') 
            return 
        } 

        let newBoard = {
            boardName , icon , color 
        } 

        let boards = JSON.parse(localStorage.getItem('boards'))  || [{boardName : 'Personal' , color:'purple' , icon: 'user'}]  

        console.log('boards' , boards);
        
        const boardExists = boards.some(board =>
            board.boardName.trim().toLowerCase() === boardName.toLowerCase() )

        if (boardExists) {
            alert('Board name already exists')
            return
        }
        boards.push(newBoard) 
        localStorage.setItem('boards' , JSON.stringify(boards)) 
        
        hideAddBoard() 

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
                        <form onSubmit={(event) => addBoard(event)}>
                            <div className="board-name-container">
                            <label htmlFor="">Board</label>
                            <input type="text" name="board-name" className="board-input board-name" placeholder='Enter the Board name ...'/> 
                        </div>

                        <div className="board-color">
                            <label>Choose Color</label>

                            {/* <div className="color-options">
                                <button type='button' className={`color-option green ${selectedColor == 'green' ? 'color-option-active' : ''}`} title="Green" onClick={()=>setSelectedColor('green')}></button>
                                <button type='button' className={`color-option blue ${selectedColor == 'blue' ? 'color-option-active' : ''}`} title="Blue" onClick={()=>setSelectedColor('blue')}></button>
                                <button type='button' className={`color-option red ${selectedColor == 'red' ? 'color-option-active' : ''}`} title="Red" onClick={()=>setSelectedColor('red')}></button>
                                <button type='button' className={`color-option yellow ${selectedColor == 'yellow' ? 'color-option-active' : ''}`} title="Yellow" onClick={()=>setSelectedColor('yellow')}></button>
                                <button type='button' className={`color-option purple ${selectedColor == 'purple' ? 'color-option-active' : ''}`} title="Purple" onClick={()=>setSelectedColor('purple')}></button>
                                <button type='button' className={`color-option orange ${selectedColor == 'orange' ? 'color-option-active' : ''}`} title="Orange" onClick={()=>setSelectedColor('orange')}></button>
                                <button type='button' className={`color-option pink ${selectedColor == 'pink' ? 'color-option-active' : ''}`} title="Pink" onClick={()=>setSelectedColor('pink')}></button>
                                <button type='button' className={`color-option add-color`} title="Add" ><i className="fa-solid fa-plus"></i></button>


                            </div> */}

                            <div className="color-options">

                                <button
                                    type="button"
                                    className={`color-option purple ${selectedColor === 'purple' ? 'color-option-active' : ''}`}
                                    title="Purple"
                                    onClick={() => setSelectedColor('purple')}
                                />

                                <button
                                    type="button"
                                    className={`color-option blue ${selectedColor === 'blue' ? 'color-option-active' : ''}`}
                                    title="Blue"
                                    onClick={() => setSelectedColor('blue')}
                                />

                                <button
                                    type="button"
                                    className={`color-option cyan ${selectedColor === 'cyan' ? 'color-option-active' : ''}`}
                                    title="Cyan"
                                    onClick={() => setSelectedColor('cyan')}
                                />

                                <button
                                    type="button"
                                    className={`color-option green ${selectedColor === 'green' ? 'color-option-active' : ''}`}
                                    title="Green"
                                    onClick={() => setSelectedColor('green')}
                                />

                                <button
                                    type="button"
                                    className={`color-option amber ${selectedColor === 'amber' ? 'color-option-active' : ''}`}
                                    title="Amber"
                                    onClick={() => setSelectedColor('amber')}
                                />

                                <button
                                    type="button"
                                    className={`color-option orange ${selectedColor === 'orange' ? 'color-option-active' : ''}`}
                                    title="Orange"
                                    onClick={() => setSelectedColor('orange')}
                                />

                                <button
                                    type="button"
                                    className={`color-option pink ${selectedColor === 'pink' ? 'color-option-active' : ''}`}
                                    title="Pink"
                                    onClick={() => setSelectedColor('pink')}
                                />

                                <button
                                    type="button"
                                    className={`color-option red ${selectedColor === 'red' ? 'color-option-active' : ''}`}
                                    title="Red"
                                    onClick={() => setSelectedColor('red')}
                                />

                            </div>


                        </div>

                        <div className="board-icon">
                            <label htmlFor="icon">Choose Icon</label>
                            {/* <div className="icon-options">  
                                <button type='button' className={`icon-button ${selectedIcon == 'school' ? 'icon-button-active' : null}`} onClick={()=>setSelectedIcon('school')}><i className="fa-solid fa-school"></i></button>
                                <button type='button' className={`icon-button ${selectedIcon == 'book' ? 'icon-button-active' : null}`} onClick={()=>setSelectedIcon('book')}><i className="fa-solid fa-book-open"></i></button>
                                <button type='button' className={`icon-button ${selectedIcon == 'user' ? 'icon-button-active' : null}`} onClick={()=>setSelectedIcon('user')}><i className="fa-solid fa-user"></i></button>   
                                <button type='button' className={`icon-button ${selectedIcon == 'house' ? 'icon-button-active' : null}`} onClick={()=>setSelectedIcon('house')}><i className="fa-solid fa-house"></i></button>
                                <button type='button' className={`icon-button ${selectedIcon == 'dumbbell' ? 'icon-button-active' : null}`} onClick={()=>setSelectedIcon('dumbbell')}><i className="fa-solid fa-dumbbell"></i></button> 
                                <button type='button' className={`icon-button ${selectedIcon == 'desktop' ? 'icon-button-active' : null}`} onClick={()=>setSelectedIcon('desktop')}><i className="fa-solid fa-desktop"></i></button> 
                            </div> */}

                            <div className="icon-options">

                            <button
                                type="button"
                                className={`icon-button ${selectedIcon === 'user' ? 'icon-button-active' : ''}`}
                                onClick={() => setSelectedIcon('user')}
                                title="Personal"
                            >
                                <i className="fa-solid fa-user"></i>
                            </button>

                            <button
                                type="button"
                                className={`icon-button ${selectedIcon === 'briefcase' ? 'icon-button-active' : ''}`}
                                onClick={() => setSelectedIcon('briefcase')}
                                title="Work"
                            >
                                <i className="fa-solid fa-briefcase"></i>
                            </button>



                            <button
                                type="button"
                                className={`icon-button ${selectedIcon === 'book' ? 'icon-button-active' : ''}`}
                                onClick={() => setSelectedIcon('book')}
                                title="Reading"
                            >
                                <i className="fa-solid fa-book-open"></i>
                            </button>

                            <button
                                type="button"
                                className={`icon-button ${selectedIcon === 'house' ? 'icon-button-active' : ''}`}
                                onClick={() => setSelectedIcon('house')}
                                title="Home"
                            >
                                <i className="fa-solid fa-house"></i>
                            </button>

                            <button
                                type="button"
                                className={`icon-button ${selectedIcon === 'dumbbell' ? 'icon-button-active' : ''}`}
                                onClick={() => setSelectedIcon('dumbbell')}
                                title="Fitness"
                            >
                                <i className="fa-solid fa-dumbbell"></i>
                            </button>

                            <button
                                type="button"
                                className={`icon-button ${selectedIcon === 'desktop' ? 'icon-button-active' : ''}`}
                                onClick={() => setSelectedIcon('desktop')}
                                title="Technology"
                            >
                                <i className="fa-solid fa-desktop"></i>
                            </button>

                            <button
                                type="button"
                                className={`icon-button ${selectedIcon === 'code' ? 'icon-button-active' : ''}`}
                                onClick={() => setSelectedIcon('code')}
                                title="Development"
                            >
                                <i className="fa-solid fa-code"></i>
                            </button>

                        </div>

                        </div>

                        

                        <div className="board-button-container">
                            <button className="board-cancel-button" onClick={hideAddBoard}>Cancel</button> 
                            <button className="board-add-button">Create Board</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}