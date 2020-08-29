import React, { useState } from 'react';
import Counter from './Counter'
import CounterHooks from './CounterHooks'
import { prettyDOM } from '@testing-library/react';

export const ThemeContext = React.createContext()

function App() {
  console.log('Render App')
  const [theme, setTheme] = useState('red')
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <Counter initialCount={0} />
    Counter Hooks
      <CounterHooks initialCount={0} />
      <button onClick={() => setTheme(prevTheme => {
        return prevTheme === 'red' ? 'blue' : 'red'
      })}>Theme</button>
    </ThemeContext.Provider>
  )
}

export default App;
