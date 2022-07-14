import React, { useState } from 'react'
import axios from 'axios'
import { Card } from './components/Card'
import { Loading } from './components/Loading'
import Logo from './components/Logo.jpg'

const App = () => {

  const baseURL1 = 'https://reqres.in/api/users?page=1'
  const baseURL2 = 'https://reqres.in/api/users?page=2'

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => console.log(data))

  const getData1 = async () => {
    try {
      const data = await axios.get(baseURL1)
      setTimeout(() => setIsLoading(false), 500)
      return data.data.data
    } catch (err) {
      console.log(err)
    }
  }

  const getData2 = async () => {
    try {
      const data = await axios.get(baseURL2)
      setTimeout(() => setIsLoading(false), 500)
      return data.data.data
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className="flex justify-center mb-10 p-2 w-full bg-emerald-400 space-x-24 shadow-md shadow-emerald-400">
        <img src={Logo} alt="Logo" className="absolute w-20 h-20 mt-4 rounded-full shadow-xl" style={{"left": "8%"}} 
          onClick={() => setData([])}/>
        <button onClick={() => { setIsLoading(true); getData1().then(data => setData(data)) }}
          className=" px-7 py-3.5 m-7 text-xl font-bold borber-2 border-gray-500 rounded-xl shadow-xl outline outline-offset-2 outline-2 hover:text-white hover:bg-black hover:outline-none hover:shadow-2xl "
        >Get Data 1</button>
        <button onClick={() => { setIsLoading(true); getData2().then(data => setData(data)) }}
          className="px-7 py-3.5 m-7 text-xl font-bold borber-2 border-gray-500 rounded-xl shadow-xl outline outline-offset-2 outline-2 hover:text-white hover:bg-black hover:outline-none hover:shadow-2xl "
        >Get Data 2</button>
      </div>
      {isLoading === true ? <Loading /> : <Card data={data} />}
    </>
  )
}

export default App