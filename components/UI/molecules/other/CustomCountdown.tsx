import React from 'react'
import Countdown, { CountdownRendererFn } from 'react-countdown'

// Random component
const Completionist = () => <span>You are good to go!</span>

// Renderer callback with condition
const renderer : CountdownRendererFn | undefined = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return (<Completionist />)
  } else {
    return (
        <ul className='flex flex-row flex-nowrap justify-center'>
            <li className='px-2'>
                <span className='block text-center font-bold text-black'>{hours}</span>
                <span className='block text-center text-xs'>jam</span>
            </li>
            <li className='px-2'>
                <span className='block text-center font-bold text-black'>{minutes}</span>
                <span className='block text-center text-xs'>menit</span>
            </li>
            <li className='px-2'>
                <span className='block text-center font-bold text-black'>{seconds}</span>
                <span className='block text-center text-xs'>detik</span>
            </li>
        </ul>
    )
  }
};

const CustomCountdown : React.FC = () => {
  return (
      <div>
          <Countdown
          date={Date.now() + 500000}
            renderer={renderer}
          />
      </div>
  )
}

export default CustomCountdown
