import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'

export const Loading = () => {
   return (
      <div style={{"position": 'fixed', "left": "50%", "top": "40%"}}>
         <ThreeCircles
            color="red"
            outerCircleColor="blue"
            middleCircleColor="yellow"
            innerCircleColor="red"
         />
      </div>

   )
}
