import React, { useState, useEffect } from 'react'

export default function BasicPromise() {
  const [users, setUsers] = useState(null)
  const [error, setError] = useState(null)
  const endpointRandom =
    Math.random() > 0.5
      ? 'http://jsonplaceholder.typicode.com/userss'
      : 'http://jsonplaceholder.typicode.com/users'

  const apiRequest = endpoint => {
    fetch(endpoint)
      .then(res => {
        if (!res.ok) {
          setError(res.statusText)
          return
        } else {
          res.json().then(json => {
            setUsers(json)
          })
        }
      })
      .catch(rej => {
        console.error(JSON.stringify(rej.toString()))
      })
  }

  useEffect(() => {
    apiRequest(endpointRandom)
  }, [])

  if (users) {
    return (
      <>
        <h1>Fetch promise</h1>
        <ul>
          {users.map(user => {
            return <li key={user.id}>{user.name}</li>
          })}
        </ul>
      </>
    )
  } else {
    return (
      <>
        <h1>Fetch, promise</h1>
        <p>{error}</p>
      </>
    )
  }
}
