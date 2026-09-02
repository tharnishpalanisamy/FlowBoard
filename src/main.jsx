import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' 
import BoardProvider from './context/addModalContext/BoardProvider.jsx'
import TaskProvider from './context/taskContext/TaskProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <TaskProvider>
        <BoardProvider> 
            <App />
        </BoardProvider>
      </TaskProvider>
  </StrictMode>,
)
