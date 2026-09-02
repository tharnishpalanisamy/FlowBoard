import Toolbar from '../toolbar/Toolbar'
import Column from '../column/Column'
import Modal from '../modal/Modal'
import { tasksData } from '../../data/tasks'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

const DRAG_THRESHOLD = 5 // px of movement before a "click" becomes a "drag"

export default function TaskManagement(){ 
    let params = useParams() 
    let boardType = params.board || 'personal'
    
    const [showModal, setShowModal] = useState(false) 
    const [status, setStatus] = useState('todo')
    const [tasks, setTasks] = useState(
        localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : tasksData
    )
    const boardTasks = tasks.filter(
        task => task.board === boardType 
    )
    const [selectedTask, setSelectedTask] = useState(null) 

    const [columns, setColumns] = useState(
        localStorage.getItem('columns')
            ? JSON.parse(localStorage.getItem('columns'))
            : [
                { id: 'todo', title: 'To Do' },
                { id: 'progress', title: 'In progress' },
                { id: 'done', title: 'Done' }
            ]
    )
    

    useEffect(() => {
        localStorage.setItem('columns', JSON.stringify(columns))
    }, [columns])

    const [draggingColumnId, setDraggingColumnId] = useState(null)

    //column drag
    function columnPointerDown(event, id) {
    if (event.button !== undefined && event.button !== 0) return

    const columnElement = event.currentTarget.closest('.column')
    const rect = columnElement.getBoundingClientRect()

    dragState.current = {
        type: 'column',
        id,
        columnElement,
        startX: event.clientX,
        startY: event.clientY,
        offsetX: event.clientX - rect.left,
        offsetY: event.clientY - rect.top,
        rect,
        clone: null,
        started: false
    }

    window.addEventListener('pointermove', columnPointerMove)
    window.addEventListener('pointerup', columnPointerUp)
}   function columnPointerMove(event) {
    const drag = dragState.current
    if (!drag || drag.type !== 'column') return

    if (!drag.started) {
        const dx = event.clientX - drag.startX
        const dy = event.clientY - drag.startY

        if (Math.hypot(dx, dy) < DRAG_THRESHOLD) return

        drag.started = true

        drag.clone = createClone(drag.columnElement, drag.rect)

        document.body.style.userSelect = 'none'

        setDraggingColumnId(drag.id)
    }

    drag.clone.style.left =
        (event.clientX - drag.offsetX) + 'px'

    drag.clone.style.top =
        (event.clientY - drag.offsetY) + 'px'
}

function columnPointerUp(event) {
    const drag = dragState.current

    window.removeEventListener('pointermove', columnPointerMove)
    window.removeEventListener('pointerup', columnPointerUp)

    if (!drag || drag.type !== 'column') return

    if (drag.started) {

        const elUnder = document.elementFromPoint(
            event.clientX,
            event.clientY
        )

        const column = elUnder
            ? elUnder.closest('[data-column-id]')
            : null

        if (column) {
            const targetId = column.dataset.columnId

            moveColumn(drag.id, targetId)
        }

        if (drag.clone) {
            document.body.removeChild(drag.clone)
        }

        document.body.style.userSelect = ''
    }

    setDraggingColumnId(null)
    dragState.current = null
}

function moveColumn(draggedId, targetId) {
    if (draggedId === targetId) return

    setColumns(prevColumns => {

        const oldIndex = prevColumns.findIndex(
            column => column.id === draggedId
        )

        const newIndex = prevColumns.findIndex(
            column => column.id === targetId
        )

        if (oldIndex === -1 || newIndex === -1) {
            return prevColumns
        }

        const updatedColumns = [...prevColumns]

        const [draggedColumn] = updatedColumns.splice(oldIndex, 1)

        updatedColumns.splice(newIndex, 0, draggedColumn)

        return updatedColumns
    })
}



    // drag UI state — only these two need to trigger re-renders
    const [draggingId, setDraggingId] = useState(null)
    const [dragOverStatus, setDragOverStatus] = useState(null)

    // everything else about the in-progress drag lives in a ref so
    // pointermove firing dozens of times a second doesn't re-render React
    const dragState = useRef(null)

    useEffect(() =>
        localStorage.setItem('tasks', JSON.stringify(tasks))
    , [tasks])

    function openModal(status) {
        setShowModal(true)
        setStatus(status)
        setSelectedTask(null)
    }

    function openEditModal(task) {
        setShowModal(true)
        setStatus(task.status)
        setSelectedTask(task)
    }

    function deleteTask(id) {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
        let task = tasks.find(task => task.id == id ) 
        let deletedTasks = JSON.parse(localStorage.getItem('deletedTasks')) || []  
        deletedTasks.unshift(task) 
        localStorage.setItem('deletedTasks' , JSON.stringify(deletedTasks))
    }

    function complete(id) {
        setTasks(prevTasks => prevTasks.map(task => {
            if (task.id === id) {
                return { ...task, completion: !task.completion, status: task.completion ? 'todo' : 'done' }
            }
            return task
        }))
    }

    function dropTask(taskId, newStatus) {
    setTasks(prevTasks => {
        const id = Number(taskId)

        const draggedTask = prevTasks.find(task => task.id === id)

        if (!draggedTask) {
            return prevTasks
        }

        const remainingTasks = prevTasks.filter(task => task.id !== id)

        const updatedTask = {
            ...draggedTask,
            status: newStatus,
            completion: newStatus === 'done'
        }

        return [...remainingTasks , updatedTask]
    })
}

    function createClone(cardElement, rect) {
        const clone = cardElement.cloneNode(true)
        clone.style.position = 'fixed'
        clone.style.top = rect.top + 'px'
        clone.style.left = rect.left + 'px'
        clone.style.width = rect.width + 'px'
        clone.style.height = rect.height + 'px'
        clone.style.margin = '0'
        clone.style.pointerEvents = 'none'
        clone.style.zIndex = '9999'
        clone.style.opacity = '1'
        clone.style.transform = 'rotate(2deg)'
        clone.style.boxShadow = '0 12px 28px rgba(0,0,0,0.35)'
        clone.classList.add('drag-clone')
        document.body.appendChild(clone)
        return clone
    }

    function pointerDown(event, id) {
        if (event.button !== undefined && event.button !== 0) return // left click / primary touch only

        const cardElement = event.currentTarget
        const rect = cardElement.getBoundingClientRect()

        dragState.current = {
            id,
            cardElement,
            startX: event.clientX,
            startY: event.clientY,
            offsetX: event.clientX - rect.left,
            offsetY: event.clientY - rect.top,
            rect,
            clone: null,
            started: false
        }

        window.addEventListener('pointermove', pointerMove)
        window.addEventListener('pointerup', pointerUp)
    }

    function pointerMove(event) {
        const drag = dragState.current
        if (!drag) return

        if (!drag.started) {
            const dx = event.clientX - drag.startX
            const dy = event.clientY - drag.startY
            if (Math.hypot(dx, dy) < DRAG_THRESHOLD) return // still just a click so far

            drag.started = true
            drag.clone = createClone(drag.cardElement, drag.rect)
            document.body.style.userSelect = 'none'
            setDraggingId(drag.id)
        }

        drag.clone.style.left = (event.clientX - drag.offsetX) + 'px'
        drag.clone.style.top = (event.clientY - drag.offsetY) + 'px'

        const elUnder = document.elementFromPoint(event.clientX, event.clientY)
        const column = elUnder ? elUnder.closest('[data-status]') : null
        setDragOverStatus(column ? column.dataset.status : null)
    }

    function pointerUp(event) {
        const drag = dragState.current

        window.removeEventListener('pointermove', pointerMove)
        window.removeEventListener('pointerup', pointerUp)

        if (drag && drag.started) {
            const elUnder = document.elementFromPoint(event.clientX, event.clientY)
            const column = elUnder ? elUnder.closest('[data-status]') : null
            if (column) dropTask(drag.id, column.dataset.status)

            if (drag.clone) document.body.removeChild(drag.clone)
            document.body.style.userSelect = ''
        }

        setDraggingId(null)
        setDragOverStatus(null)
        dragState.current = null
    }

    return(
        <>
        <Toolbar showModal={() => openModal('todo')} />
                    <div className="columns"> 

                        {columns.map(column =>{
                            return (
                                <Column 
                                    key = {column.id}
                                    showModal={() => openModal(column.id)}
                                    title={column.title}
                                    status={column.id}
                                    tasks={boardTasks}
                                    setStatus={setStatus}
                                    deleteTask={deleteTask}
                                    openEditModal={openEditModal}
                                    completeTask={complete}
                                    pointerDown={pointerDown}
                                    columnPointerDown={columnPointerDown}
                                    draggingId={draggingId}
                                    dragOverStatus={dragOverStatus}
                                />
                            )
                        })}
                        
                    </div>

                    {showModal && <Modal
                        status={status}
                        closeModal={() => setShowModal(false)}
                        setTasks={setTasks}
                        tasks={tasks}
                        editTask={selectedTask}
                    />}
                </>
    )
}