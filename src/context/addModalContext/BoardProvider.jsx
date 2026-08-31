import { useState } from "react";
import BoardContext from "./BoardContext";


export default function BoardProvider({children}){
    const [showAddModal , setShowAddModal] = useState(false)  

    return(
        <BoardContext.Provider 
            value={{showAddModal , setShowAddModal}}>
            {children}
        </BoardContext.Provider>
    )

}