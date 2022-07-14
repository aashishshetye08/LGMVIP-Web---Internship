import React from 'react'

export const Card = ({ data }) => {


   return (
      <div className="flex flex-wrap mx-auto justify-center">
         {
            data.length > 0 &&
            data.map((data, i) => {
               return (
                  < div key={i} className="m-8 mt-10 p-4 w-3/12 h-auto border-2 rounded-tr-3xl divide-y" >
                     <img className="w-2/3 h-2/3 p-4 m-2 rounded-full mx-auto" src={data.avatar} alt={'https://www.google.com/imgres?imgurl=https%3A%2F%2Fapi-private.atlassian.com%2Fusers%2F5b255414e7ade84b7c44a1b0a4c12cd9%2Favatar&imgrefurl=https%3A%2F%2Fcommunity.atlassian.com%2Ft5%2FTrello-questions%2FCard-Repeater-unavailable%2Fqaq-p%2F763557&tbnid=rwxrJ41h22qTIM&vet=12ahUKEwimopPRveL4AhVCKbcAHcshAtkQMyg2egQIARBN..i&docid=0-pyp4d_NhERIM&w=256&h=256&q=unavailable%20avatar&ved=2ahUKEwimopPRveL4AhVCKbcAHcshAtkQMyg2egQIARBN'} />
                     <p className="p-2 m-1 text-center">{data.id}</p>
                     <p className="p-2 m-1 text-center">{`${data.first_name} ${data.last_name}`}</p>
                     <p className="p-2 m-1 mb-10 text-center">{`${data.email}`}</p>
                  </div >
               )
            })

         }
      </div>


   )
}
