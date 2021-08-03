import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import { useCounter} from "../../hooks/useCounter" 

import "../02-useEffect/effects.css"

export const MemoHook = () => {
    
    const {counter, increment}=useCounter(3000)
    const [show, setShow] = useState(true)
    

    const memoPesado= useMemo(() =>{ procesoPesado(counter)}, [counter])
    return (
        <div>
            <h1>Memo Hook</h1>
        <h3>Memorize  <small> value={counter}</small></h3> 
        <hr/>

        <p>{memoPesado}</p>

        <button
            className="btn btn-primary"
            onClick={increment}
        
        >+1</button>

        <button
            className="btn btn-primary ml-3"
            onClick={()=>{
            setShow(!show);
            }}
        >Show/Hide  {JSON.stringify(show)}</button>
        </div>
    )
}
