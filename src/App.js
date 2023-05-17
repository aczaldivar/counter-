import React, { useState } from 'react'

function App() {
  let [counter, changeCounter ] = useState(1)
 return (
    <div>
      <h1>
        Counter
      </h1>
      <p>
        {counter}
      </p>
      <p>
        {counter}
      </p>
    </div>
  )
}
export default App 