import React, {useEffect, useState} from 'react'


function App()
{
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        console.log(data);
        setBackendData(data)
        console.log(backendData)
      }
    )
  }, [])

  
  

  return (
    <div>

      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
        ) : (
          backendData.users.map((user, i) => (
            <p key={i}>{user}</p>
          ))
      )}

    </div>
   
  )
}
export default App