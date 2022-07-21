import React from 'react'

export const Print = ({ datas }) => {

   return (
      <div>
         <p className="flex justify-center mb-5 text-3xl font-bold tracking-normal ">Enrolled Students</p>

         <table class="table-auto w-full border-collapse border-spacing-2 border border-slate-400">
            <thead>
               <tr>
                  <th className="w-8/12 border text-lg bg-gray-100 border-slate-300">Description</th>
                  <th className="w-1/2 border text-lg bg-gray-100 border-slate-300">Image</th>
               </tr>
            </thead>
            <tbody>
               {datas.map((data) => (
                  <tr className="border text-md border-slate-300">
                     <td className="p-2.5 space-y-0.5 border border-slate-300">
                        <span className="font-medium">Name:</span><span> {data.name}</span><br />
                        <span className="font-medium">Gender:</span><span> {data.gender}</span><br />
                        <span className="font-medium">Email:</span><span> {data.email}</span><br />
                        <span className="font-medium">Website:</span><a href="/" className="text-blue-700 underline"> {data.web}</a><br />
                        <span className="font-medium">Skills:</span><span> {data.skill}</span><br />
                     </td>
                     <td className="p-2 flex mx-auto justify-center">
                        <img src={data.image} alt="Invalid url" className="w-28" />
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>

      </div>
   )
}
