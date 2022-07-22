import React from 'react'

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'

import supportImg from '../assets/support.jpeg'

const Support = () => {
  return (
    <div className='w-full mt-24'>

      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
      </div>

        <div className='max-w-[1240p] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
                <p className='py-4 text-3xl text-slate-300 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div>
                        <PhoneIcon />
                        <h3>Sales</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                    </div>
                    <div>
                        <p>Contact Us <ArrowSmRightIcon /></p>
                    </div>
                </div>

            </div>

        </div>

        
        
    </div>
  )
}

export default Support