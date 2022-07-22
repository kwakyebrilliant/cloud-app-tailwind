import React from 'react'
import { CheckIcon } from '@heroicons/react/outline';

const AllInOne = () => {
  return (
    <div className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto px-2'>
            <h2 className='text-5xl font-bold text-center'>All-In-One Platform</h2>
            <p className='text-2xl py-8 text-gray-500 text-center'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
                ab. Officia sunt nulla aspernatur culpa, eaque tenetur excepturi
                nostrum tempore.
            </p>


            <div>
                <div>
                    <div>
                        <CheckIcon className='w-7 mr-4 text-green-700 ' />
                        <div>
                            <h3>Notifications</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Asperiores maxime deserunt voluptatibus consequatur similique
                                voluptates!
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default AllInOne