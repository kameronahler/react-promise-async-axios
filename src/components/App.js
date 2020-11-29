import React from 'react'
import VanillaFetchPromise from './VanillaFetchPromise'
import VanillaAsyncFetchPromise from './VanillaAsyncFetchPromise'
import VanillaAsyncTryCatchFetchPromise from './VanillaAsyncTryCatchFetchPromise'
import AxiosPromise from './AxiosPromise'
import AxiosAsyncPromise from './AxiosAsyncPromise'

export default function App() {
  return (
    <>
      <VanillaFetchPromise />
      <VanillaAsyncFetchPromise />
      <VanillaAsyncTryCatchFetchPromise />
      <AxiosPromise />
      <AxiosAsyncPromise />
    </>
  )
}
