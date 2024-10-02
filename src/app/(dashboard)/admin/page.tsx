import UserCard from '@/components/UserCard'
import React from 'react'

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* {LEFT} */}
      <div className='w-full lg:w-2/3'>
      {/* {USER CARDS} */}
      <div className='flex gap-4 justify-between flex-wrap'>
        <UserCard type='azienda'/>
        <UserCard type='sedi'/>
        <UserCard type='dipendenti'/>
        <UserCard type='documenti'/>
      </div>
      </div>
      {/* {RIGH} */}
      <div className='w-full lg:w-1/3'>r</div>
    </div>
  )
}

export default AdminPage