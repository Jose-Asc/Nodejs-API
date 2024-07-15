import React from 'react'
import { useEffect, useState} from 'react'

function App() {
  
  const [ backendData, setBackendData ] = useState()

  useEffect( () => {
    fetch("/api/assets/")
    .then(res => res.json())
    .then(data => setBackendData(data))  
    .catch(error => console.log(error))
  } , [])

  return (
    <div>
      <ul>
        {backendData?.map((list, index)=> (
          <li key={index}>{list.title} | {list.description} | {list.rating}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
