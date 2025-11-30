import React from 'react'
import { ArrowRight } from 'lucide-react'
const RightCardContent = (props) => {
  return (
   
        <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between ">
                <h2 className="text-2xl font-bold bg-white rounded-full h-12 w-12 flex justify-center items-center p-8">{props.id+1}</h2>
                <div>
                    <p className="text-lg leading-normal text-white mb-14">{props.intro}</p>
                    <div className="flex justify-between">
                        <button className="bg-blue-600 font-semibold text-white px-7 rounded-full px-8 py-3">{props.tag}</button>
                        <button className="bg-blue-600 font-semibold text-white px-7 rounded-full py-2 px-4"> <ArrowRight size={20} /></button>
                    </div>
                </div>
            </div>
   
  )
}

export default RightCardContent
