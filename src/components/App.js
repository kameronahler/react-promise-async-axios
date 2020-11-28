import React from 'react'
import BasicPromise from './BasicPromise'
import AsyncPromise from './AsyncPromise'
import AsyncTryCatchPromise from './AsyncTryCatchPromise'
import BasicAxiosPromise from './BasicAxiosPromise'

export default function App() {
  return (
    <>
      {/* <BasicPromise /> */}
      {/* <AsyncPromise /> */}
      {/* <AsyncTryCatchPromise /> */}
      <BasicAxiosPromise />
    </>
  )
}
