import React from 'react'
import LeaderBoard from './LeaderBoard'
import Ranks from './Ranks'

const TheMain = () => {
  return (
    <div className='flex justify-evenly'>
        <LeaderBoard/>
        <Ranks/>
    </div>
  )
}

export default TheMain