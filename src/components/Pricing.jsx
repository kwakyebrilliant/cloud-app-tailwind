import React from 'react'

import { CheckIcon } from '@heroicons/react/solid';

const Pricing = () => {
  return (
    <div>
        <div>

            <div>Absolute</div>

            <div>
                <div>
                    <h2>Pricing</h2>
                    <h3>The right price for your research.</h3>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
                        laudantium odio ullam inventore aliquid ipsum quasi tenetur velit
                        voluptatum iste.
                    </p>
                </div>


                <div>
                    <div>
                       <span>Standard</span>
                       <div>
                        <p>$49<span>/mo</span></p>
                       </div>
                       <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                       <div>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-700'  />Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-700'  />Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-700'  />Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-700'  />Lorem, ipsum dolor.</p>
                            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-700'  />Lorem, ipsum dolor.</p>
                        <button>Get Started</button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing