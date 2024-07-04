import React, { useEffect, useState} from 'react'

function App() {
  let Datass
  let Datass2
  const [ backendData, setBackendData ] = useState()

  useEffect( () => {
    fetch("/api/assets")
    .then( res => { setBackendData(res) })
    // .then( data => { Datass = data })  
  } , [])

  // console.log(":")
  console.log(backendData)

  return (
    <div>
      {/* { {backendData} } */}
    </div>
  )
}

export default App
