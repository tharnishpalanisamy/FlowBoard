import { useState } from "react"

export default function Trash(){
    const [deletedTasks , setDeletedTasks] = useState(JSON.parse(localStorage.getItem('deletedTasks') ) || [] ) 
    return(
        <>
            {deletedTasks.length > 0 && 
            <section className="deletedTasks">
                <h1>Iruku</h1>
            </section>
            }
        </>
    )
}