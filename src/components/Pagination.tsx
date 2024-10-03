import React from 'react'

const Pagination = () => {
  return (
    <div className='p-4 flex items-center justify-between text-gray-500'>
        <button disabled className='py-2 rounded-md px-4 bg-slate-200 text-xs font-semibold disabled:opacity-50 cursor-not-allowed'>Precedente</button>
        <div className='flex items-center gap-2 text-sm'>
            <button className='px-2 rounded-sm bg-orange-100'>1</button>
            <button className='px-2 rounded-sm'>2</button>
            <button className='px-2 rounded-sm'>3</button>
            ...
            <button className='px-2 rounded-sm'>10</button>
        </div>
        <button className='py-2 rounded-md px-4 bg-slate-200 text-xs font-semibold disabled:opacity-50'>Successiva</button>
    </div>
  )
}

export default Pagination