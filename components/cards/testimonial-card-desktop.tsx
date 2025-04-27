

import React from 'react'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import { Testimonial } from '../../constants/types'

type Props = {
    testimonial: Testimonial
    onRightButtonClick: () => void
    onLeftButtonClick: () => void
}
function TestimonialCardDesktop({ testimonial, onLeftButtonClick, onRightButtonClick }: Props) {

  return (
    <div className="grid grid-cols-3">
        <div className="col-span-1 flex flex-col justify-between">
            <p className="font-bold">{testimonial.text}</p>
            <div className="flex items-center">
                <div 
                onClick={() => onLeftButtonClick()}
                className="border-[1px] border-black rounded-full max-w-fit p-2"
                >
                    <ArrowIcon />
                </div>
                <div 
                onClick={() => onRightButtonClick()}
                className="border-[1px] border-black rounded-full max-w-fit p-2"
                >
                    <ArrowIcon alignment="right"/>
                </div>
            </div>
        </div>
        <div className="flex col-span-2 ">
           
            <img src={testimonial.image.src} />
            <div className="flex flex-col justify-center">
                <div className="bg-purple-light rounded-md bottom-0 px-4 py-2 shadow-lg m-[-1rem] flex items-center">
                    <div className="p-2 bg-white rounded-lg mr-2">
                        <img 
                        className="h-8"
                        src={testimonial.companyImage.src}
                        />
                    </div>
                    <div className="flex flex-col">
                        <p>{ testimonial.customerName }</p>
                        <p><span>{ testimonial.customerOccupation },</span> { testimonial.customerCompany }</p>
                    </div>
                    
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default TestimonialCardDesktop