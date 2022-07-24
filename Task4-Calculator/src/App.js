import React from 'react'
import { Layout } from './components/Layout'

export const App = () => {
  return (
    <div className="bg-black w-screen h-screen">
      <p className="flex justify-center text-8xl font-bold text-white">Calculator</p>
      <Layout />
    </div>
  )
}
