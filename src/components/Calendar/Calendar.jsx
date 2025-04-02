import React from 'react'

const Calendar = () => {
  return (
    <div className='font-customFont'>

      <div className='border'>
        <div className='border w-28'>

          <h1 className='text-md36 font-bold text-blue-700'>01</h1>
          <div className='w-28 h-2 bg-blue-700' />

          <div className='text-sm font-light leading-tight'>
            <p className='text-blue-700 '>Recovery</p>
            <p className='text-font-main'>1:30h</p>
            <p className='text-font-main'>30km</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Calendar