import CountChart from '@/components/CountChart'
import EventCalendar from '@/components/EventCalendar'
import OtherChart from '@/components/OtherChart'
import UserCard from '@/components/UserCard'
import React from 'react'

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* {LEFT} */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
      {/* {USER CARDS} */}
      <div className='flex gap-4 justify-between flex-wrap'>
        <UserCard type='azienda'/>
        <UserCard type='sedi'/>
        <UserCard type='dipendenti'/>
        <UserCard type='documenti'/>
      </div>
      {/* MIDDLE CHART */}
      <div className='flex gap-4 flex-col lg:flex-row'>
        {/* COUNT CHART */}
        <div className='w-full lg:w-1/3 h-[450px]'>
        <CountChart/>
        </div>
        
        {/* OTHER CHART */}
        <div className='w-full lg:w-2/3 h-[450px] bg-red-200'>
        <OtherChart/>
        </div>
      </div>
      {/* BOTTOM CHART */}
        <div className=''></div>
      </div>
      {/* {RIGHT} */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
      <EventCalendar/>
      </div>
    </div>
  )
}

export default AdminPage