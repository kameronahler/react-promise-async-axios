import React, { useState, useEffect } from 'react'

export default function AsyncPromise() {
  const [users, setUsers] = useState(null)
  const [error, setError] = useState(null)
  const endpointRandom =
    Math.random() > 0.5
      ? 'http://jsonplaceholder.typicode.com/userss'
      : 'http://jsonplaceholder.typicode.com/users'

  const apiRequest = async endpoint => {
    let res = await fetch(endpoint)
    if (!res.ok) {
      setError(res.statusText)
      return
    }
    let json = await res.json()
    setUsers(json)
  }

  useEffect(() => {
    apiRequest(endpointRandom)
  }, [])

  if (users) {
    return (
      <>
        <h1>Async fetch promise</h1>
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
