import React from 'react'

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'

import supportImg from '../assets/support.jpeg'

const Support = () => {
  return (
    <div>
        
        <div>
            <img src={supportImg} alt="/"/>
        </div>

        <div>
            <div>
                <h2>Support</h2>
                <h3>Finding the right team</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</p>
            </div>
        </div>

        <div>
            <div>
                <div>
                    <PhoneIcon />
                    <h3>Sales</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Support