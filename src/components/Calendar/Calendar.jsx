import React, { useState } from 'react'
import EmptyForm from '../EmptyForm/EmptyForm'

const Calendar = () => {

  const dataArray = [
    {
      key: '0101',
      day: '01',
      type: 'Recovery',
      time: 120,
      distance: 30,
    },

    {
      key: '0102',
      day: '02',
      type: 'Intervals',
      time: 160,
      distance: 41,
    },
    {
      key: '0103',
      day: '03',
      type: 'Empty',
      time: 0,
      distance: 0,
    }
  ]

  const [day, setDay]= useState(null)

  const showDay = (data) => {
    console.log(data.key);
    setDay(day.key) 
  }

  return (
    <div className='font-customFont cursor-pointer'>

      {/* <div className='border'>
        <div className='border w-28'>

          <h1 className='text-md36 font-bold text-blue-700'>{dataArray[0].day}</h1>
          <div className='w-28 h-2 bg-blue-700' />

          <div className='text-sm font-light leading-tight'>
            <p className='text-blue-700 '>Recovery</p>
            <p className='text-font-main'>1:30h</p>
            <p className='text-font-main'>30km</p>
          </div>

        </div>
      </div> */}
      <div className='size-fit'>
        <div className='grid grid-cols-7 gap-2'>
        {dataArray.map((data) => {
          return <>    
          <div 
          className='font-customFont cursor-pointer' 
          key={data.key} >
            <div className='border' onClick={ () => showDay(data)}>
              <div className='border w-28'>

                <h1 className='text-md36 font-bold text-blue-700'>{data.day}</h1>
                <div className='w-28 h-2 bg-blue-700' />

                <div className='text-sm font-light leading-tight'>
                  <p className='text-blue-700 '>{data.type}</p>
                  <p className='text-font-main'>{data.time}</p>
                  <p className='text-font-main'>{data.distance}</p>
                </div>
              </div>
            </div>
          </div>
        </>

        })}
        </div>
      </div>
    </div>
  )
}

export default Calendar