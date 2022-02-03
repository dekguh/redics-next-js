import React from 'react'
import Countdown, { CountdownRendererFn } from 'react-countdown'
import { CountdownTimeDeltaFn } from 'react-countdown/dist/Countdown';

// Random component
const Completionist = () => <div className='text-center mb-2'>waktu berakhir</div>

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

const CustomCountdown : React.FC<{
  dateCreated: any;
  onComplete?: CountdownTimeDeltaFn;
}> = ({ dateCreated, onComplete }) => {
  return (
      <div>
          <Countdown
            date={new Date(dateCreated).getTime() + 7200000} // 7200000 = 2 hour
            renderer={renderer}
            onComplete={onComplete}
          />
      </div>
  )
}

export default CustomCountdown
