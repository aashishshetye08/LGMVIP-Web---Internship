import React, { useState, useEffect } from 'react'
import { Operations } from './Operations'

export const Layout = () => {

   const [toPrint, setToPrint] = useState([])
   const [num1, setNum1] = useState(0)
   const [num2, setNum2] = useState()
   const [opt, setOpt] = useState()

   useEffect(() => {
      if (num1 !== null && num2 !== undefined && opt !== undefined) {
         setToPrint(Operations(num1, num2, opt))
         setNum1(0)
         setNum2()
         setOpt()
      }
   }, [num1, num2, opt])

   const popToPrint = () => {
      toPrint.splice(-1)
      setToPrint([...toPrint])
   }

   const NosClicksHandler = (e) => {
      setToPrint([
         ...toPrint,
         e.target.value])
   }

   const handleOperator = (e) => {
      let num = 0
      const temp = toPrint.map((x) => {
         return parseInt(x, 10);
      });

      for (let i = 0; i < temp.length; i++)
         num = num * 10 + temp[i]

      setNum1(num)
      setOpt(e.target.value)
      setToPrint([])
   }

   const handleEnter = () => {
      let num = 0
      const temp = toPrint.map((x) => {
         return parseInt(x, 10);
      });

      for (let i = 0; i < temp.length; i++)
         num = num * 10 + temp[i]

      setNum2(num)
   }


   return (
      <div className="flex flex-wrap justify-center mx-auto mt-5 p-3 w-4/12 h-max bg-white rounded-3xl">
         <div className="m-2 p-1 w-11/12 h-28 border-4 rounded-t-2xl ">
            <p className="flex justify-end text-xl m-0 p-0 pr-2 font-semibold opacity-40">{num1}{opt}</p>
            <p className="flex justify-end text-7xl m-0 pr-1 font-bold">{toPrint}</p>
         </div>

         <div className="grid grid-cols-4 gap-5 text-2xl py-4 mb-2 rounded-xl">
            <button onClick={() => setToPrint([])} className="bg-red-500 px-6 py-4 font-semibold rounded-full">C</button>
            <button onClick={popToPrint} className="bg-red-500 px-6 py-4 font-semibold rounded-full">DEL</button>
            <button onClick={handleOperator} value="%" className="bg-cyan-300 px-6 py-4 font-semibold rounded-full">%</button>
            <button onClick={handleOperator} value="/" className="bg-cyan-300 px-6 py-4 font-semibold rounded-full">/</button>

            <button onClick={NosClicksHandler} value="7" className="bg-black text-white px-6 py-4 font-semibold rounded-xl">7</button>
            <button onClick={NosClicksHandler} value="8" className="bg-black text-white px-6 py-4 font-semibold rounded-xl">8</button>
            <button onClick={NosClicksHandler} value="9" className="bg-black text-white px-6 py-4 font-semibold rounded-xl">9</button>
            <button onClick={handleOperator} value="*" className="bg-cyan-300 px-6 py-4 font-semibold rounded-full">*</button>

            <button onClick={NosClicksHandler} value="4" className="bg-black text-white px-6 py-4 font-semibold rounded-xl">4</button>
            <button onClick={NosClicksHandler} value="5" className="bg-black text-white px-6 py-4 font-semibold rounded-xl">5</button>
            <button onClick={NosClicksHandler} value="6" className="bg-black text-white px-6 py-4 font-semibold rounded-xl">6</button>
            <button onClick={handleOperator} value="-" className="bg-cyan-300 px-6 py-4 font-semibold rounded-full">-</button>

            <button onClick={NosClicksHandler} value="1" className="bg-black text-white px-6 py-4 font-semibold rounded-xl">1</button>
            <button onClick={NosClicksHandler} value="2" className="bg-black text-white px-6 py-4 font-semibold rounded-xl">2</button>
            <button onClick={NosClicksHandler} value="3" className="bg-black text-white px-6 py-4 font-semibold rounded-xl">3</button>
            <button onClick={handleOperator} value="+" className="bg-cyan-300 px-6 py-4 font-semibold rounded-full">+</button>

            <button onClick={NosClicksHandler} value="00" className="bg-black text-white px-6 py-4 font-semibold rounded-xl">00</button>
            <button onClick={NosClicksHandler} value="0" className="bg-black text-white px-6 py-4 font-semibold rounded-xl">0</button>
            <button onClick={NosClicksHandler} value="." className="bg-black text-white px-6 py-4 font-semibold rounded-xl">.</button>
            <button onClick={handleEnter} className="bg-emerald-300 px-6 py-4 rounded-full">=</button>

         </div>
      </div>
   )
}
