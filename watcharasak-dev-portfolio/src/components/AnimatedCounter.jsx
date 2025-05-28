import React from 'react'
import { counterItems } from '../constants'
import CountUp from 'react-countup'

const AnimatedCounter = () => {
  return (
    <div id='counter' className='padding-x-lg xl:mt-0 mt-32'>
        <div className='mx-auto grid-3-cols'>
            {counterItems.map((item) => (
                <div className='bg-zinc-900 rounded-lg p-10 flex flex-col justtify-center'>
                    <div key={counterItems.label} className='counter-number text-white text-5xl font-bold mb-2'>
                    <CountUp 
                        end={item.value} 
                        suffix={item.suffix}
                        duration={5}
                    /> 
                    </div>
                    <div>{item.label}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AnimatedCounter