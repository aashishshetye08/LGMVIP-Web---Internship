import React, { useState } from 'react'
import { Print } from './Print'

export const Info = () => {

  const [name, setName] = useState([])
  const [email, setEmail] = useState([])
  const [web, setWeb] = useState([])
  const [image, setImage] = useState([])
  const [gender, setGender] = useState([])
  const [skill, setSkill] = useState([])
  const [datas, setDatas] = useState([])
  console.log(datas)

  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)
  const [check3, setCheck3] = useState(false)
  const [radio1, setRadio1] = useState(false)
  const [radio2, setRadio2] = useState(false)
  const [radio3, setRadio3] = useState(false)

  const handleEnroll = () => {
    if(name.length !== 0 & email.length !== 0 & web.length !== 0 & image.length !== 0 & gender.length !== 0 & skill.length !== 0){
      setDatas([
        ...datas,
        { name, email, web, image, gender, skill }
      ])
      handleClear()  
    }
    else{
      alert("Kindly fill all Fields")
    }
  }

  const handleClear = () => {
    setCheck1(false)
    setCheck2(false)
    setCheck3(false)
    setRadio1(false)
    setRadio2(false)
    setRadio3(false)
    setName([])
    setEmail([])
    setWeb([])
    setImage([])
    setGender([])
    setSkill([])
  }

  const handleCheck1 = (e) => {
    setGender(e.target.value)
    setCheck1((c) => !c)
  }

  const handleCheck2 = (e) => {
    setGender(e.target.value)
    setCheck2((c) => !c)
  }

  const handleCheck3 = (e) => {
    setGender(e.target.value)
    setCheck3((c) => !c)
  }

  const handleRadio1 = (e) => {
    setSkill(e.target.value)
    setRadio1((c) => !c)
  }

  const handleRadio2 = (e) => {
    setSkill(e.target.value)
    setRadio2((c) => !c)
  }

  const handleRadio3 = (e) => {
    setSkill(e.target.value)
    setRadio3((c) => !c)
  }

  return (
    <div className="flex flex-wrap mt-4 p-2 h-max justify-center space-x-20">

      <div className=" w-5/12 h-min">
        <form className="flex flex-wrap" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-wrap p-5 w-full">
            <div className="font-semibold tracking-wide px-3 py-3 text-xl w-3/12 mx-5 space-y-10">
              <p>Name :</p>
              <p>Email :</p>
              <p>Website :</p>
              <p>Image URL :</p>
              <p className="relative top-2">Gender :</p>
              <p className="relative bottom-1">Skills :</p>
            </div>
            <div className=" w-8/12 space-y-5">
              <input onChange={(e) => setName(e.target.value)} value={name} type="text" class="form-input px-4 py-3 w-full rounded-full" />
              <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" class="form-input px-4 py-3 w-full rounded-full" />
              <input onChange={(e) => setWeb(e.target.value)} value={web} type="url" class="form-input px-4 py-3 w-full rounded-full" />
              <input onChange={(e) => setImage(e.target.value)} value={image} type="url" class="form-input px-4 py-3 w-full rounded-full" />
              <p></p>
              <input type="radio" onClick={handleCheck1} value="Male" checked={check1} class="form-radio rounded-full text-blue-500 mr-1" /><span className="relative top-2.5 mr-5">Male</span>
              <input type="radio" onClick={handleCheck2} value="Female" checked={check2} class="form-radio rounded-full text-blue-500 mr-1" /><span className="relative top-2.5 mr-5">Female</span>
              <input type="radio" onClick={handleCheck3} value="Other" checked={check3} class="form-radio rounded-full text-blue-500 mr-1" /><span className="relative top-2.5 mr-5">Other</span><br />
              <p></p>
              <input type="checkbox" onClick={handleRadio1} value="Angular" checked={radio1} class="form-checkbox rounded-full text-blue-500 mr-1" /><span className="relative top-2.5 mr-5">Angular</span>
              <input type="checkbox" onClick={handleRadio2} value="React" checked={radio2} class="form-checkbox rounded-full text-blue-500 mr-1" /><span className="relative top-2.5 mr-5">React</span>
              <input type="checkbox" onClick={handleRadio3} value="Vue" checked={radio3} class="form-checkbox rounded-full text-blue-500 mr-1" /><span className="relative top-2.5 mr-5">Vue</span><br />
            </div>
          </div>
          <span className="mx-auto space-x-12">
            <button onClick={handleEnroll} className="text-white bg-green-500 px-4 py-2 text-xl rounded-xl hover:bg-white hover:border-2 hover:border-green-500 hover:text-green-500 hover:font-semibold">Enroll Student</button>
            <button onClick={handleClear} className="text-white bg-red-500 px-4 py-2 text-xl rounded-xl hover:bg-white hover:border-2 hover:border-red-500 hover:text-red-500 hover:font-semibold">Clear All</button>
          </span>
        </form>
      </div >

      <div className="p-0.5 m-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-200"></div>

      <div className="w-5/12">
        <Print datas={datas} />
      </div>

    </div >
  )
}
