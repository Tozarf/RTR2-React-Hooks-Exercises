import React, { useLayoutEffect, useRef, useState} from 'react'
import {  useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import "./Layout.css"
export const Layout = () => {
    
    const {counter, increment}=useCounter(1)

    const {data}=useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    
    const {quote}=!!data && data[0];

    const pTag= useRef();

    const [layout, setLayout] = useState({})
    useLayoutEffect(() => {
        setLayout(pTag.current.getBoundingClientRect())
    }, [quote])

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr/>

                <blockquote className="blockquote text-end">
                    <p 
                    className="mb-0"
                    ref={pTag}
                    >{quote}</p>
                    <hr/>
                </blockquote>
                
            
            <button className="btn btn-primary"
            onClick={increment} 
            >Next Quote
            </button>

            <pre>{JSON.stringify(layout, null,3)}</pre>
        </div>
    )
}
