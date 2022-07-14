import React, { useState } from 'react'

export const TaskList = () => {

   const [task, setTask] = useState([])
   const [titles, setTitles] = useState([]);

   const handleClick = () => {
      task.length > 0 ?
         setTitles([
            ...titles,
            { task, id: Math.random() }
         ]) : alert('Enter Valid Task')
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      task.length > 0 ?
         setTask([]) : console.log('Enter Valid Task')
   }

   const onMouseUp = (id) => {
      id.target.style.setProperty('text-decoration', 'line-through')
      id.target.style.setProperty('background-color', '#06b6d4')
   }

   return (
      <>
         <form onSubmit={handleSubmit} className="flex flex-wrap mx-auto my-auto w-1/2 rounded-xl justify-center items-center border-0 mt-5 shadow-emerald-100 shadow-md">
            <input className="flex w-8/12 text-3xl tracking-normal outline-none border-2 p-3 m-1 mt-8 mb-5 rounded-t-lg text-black hover:shadow-md hover:border-0"
               placeholder="Title..."
               value={task}
               onChange={(e) => {
                  setTask(e.target.value)
               }}
            />
            <button className="flex bg-cyan-100 font-bold text-xl justify-center border-2 border-gray-200 p-3 m-1 mt-8 mb-5 w-20 rounded-xl hover:outline-none hover:border-0 hover:text-white hover:bg-emerald-600 hover:shadow-lg"
               onClick={handleClick} >Add</button>

            {titles.map((title) => {
               return (
                  <ul className="flex w-full m-2 mt-0">
                     <div key={title.id} onMouseUp={onMouseUp} className="w-9/12 flex p-3 pl-6 m-2 ml-24 bg-emerald-500 text-white text-3xl font-semibold rounded-xl">
                        {title.task}
                     </div>
                     <div className="flex">
                        <button key={title.id} onClick={() => setTitles(titles.filter((titles) => titles.id !== title.id))}
                           className="flex flex-wrap relative text-rose-500 right-14 mt-5 font-bold text-white text-3xl">✘</button>
                     </div>
                  </ul>
               )
            })}
         </form>
      </>
   )
}
