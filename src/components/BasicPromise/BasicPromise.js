import React, { useState, useEffect } from 'react'

export default function BasicPromise() {
  const [users, setUsers] = useState([])

  const endpointRandom =
    Math.random() > 0.5 ? '' : 'http://jsonplaceholder.typicode.com/users'

  const catchError = rej => {
    console.log(rej)
  }

  const apiRequest = endpoint => {
    fetch(endpoint)
      .then(res => {
        if (!res.ok) {
          console.error(res.status)
          return
        }
        console.log(res.status)

        res.json().then(json => {
          setUsers(json)
        })
      })
      .catch(rej => catchError(rej))
  }

  useEffect(() => {
    apiRequest(endpointRandom)
  }, [])

  return (
    <>
      <h1>Fetch, promise</h1>
      <ul>
        {users.map(user => {
          return <li key={user.id}>{user.name}</li>
        })}
      </ul>
    </>
  )
}
