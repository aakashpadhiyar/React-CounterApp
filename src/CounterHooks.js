import React, { useState, useContext } from 'react'
import { ThemeContext } from './App'

export default function CounterHooks({ initialCount }) {
    console.log('Render Counter Hooks')
    const [count, setCount] = useState(initialCount)
    const theme = useContext(ThemeContext)
    return (
        <div>
            <button style={theme} onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <span>{count}</span>
            <button style={theme} onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </div>
    )
}