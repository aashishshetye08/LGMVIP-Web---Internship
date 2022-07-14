import React from 'react'
import { TaskList } from './components/TaskList'


const App = () => {
   return (
      <>
         <div className="flex flex-wrap mx-auto w-1/2 p-5 justify-center rounded-b-2xl bg-gradient-to-r from-cyan-600 to-emerald-400">
            <p className="text-white font-black tracking-wide font-serif text-5xl">Todo List</p>
         </div>
         <TaskList />
      </>
   )
}

export default App