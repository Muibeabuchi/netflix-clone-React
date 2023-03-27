import React from 'react'
import SavedShows from '../components/savedShows'

function AccountPage() {
  return (
    <div className='w-full text-white'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8f12b4f0-a894-4d5b-9c36-5ba391c63fbe/6d18e1d5-258b-4181-82e8-75d9b241d7ea/NG-en-20230320-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="netflix signup page image" className=' w-full h-[400px] object-cover' />
      <div className="fixed top-0 left-0 w-full h-[550px] bg-black/60"></div>
      <div className="absolute p-4 md:p-8 top-[20%]">
        <h1 className='text-3xl md:text-5xl  font-bold'>My Shows</h1>
      </div>
      <SavedShows />

    </div>
  )
}

export default AccountPage