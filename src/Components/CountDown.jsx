import React from 'react'

export default function CountDown({ minutes, seconds, milliSeconds, handleRestart, handleStartStop, isRunning }) {
    return (
        <div className='bg-white p-3 rounded-md shadow-md w-[350px] h-auto'>
            <h1 className='text-4xl mb-3 text-center font-semibold'>Timer</h1>
            <div className='flex justify-center gap-1 items-center text-3xl mb-4 font-[400]'>
                <span>{minutes < 10 ? "0" + minutes : minutes}</span>: <span>{seconds < 10 ? "0" + seconds : seconds}</span>: <span>{milliSeconds < 10 ? "0" + milliSeconds : milliSeconds}</span>
            </div>
            <div className='flex justify-center gap-3'>
                <button onClick={handleRestart} className='text-white bg-sky-500 rounded-md py-2 px-4 hover:bg-sky-600 transition-all duration-200'>Restart</button>
                <button onClick={handleStartStop} className='text-white bg-sky-500 rounded-md py-2 px-4 hover:bg-sky-600 transition-all duration-200'>{isRunning ? "Stop" : "Start"}</button>
            </div>
        </div>
    )
}
