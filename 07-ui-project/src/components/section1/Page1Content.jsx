import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
const Page1Content = (props) => {
    console.log(props.users);
  return (
    <div className='h-[90vh] flex justify-between gap-10 py-10 px-18'>
     <LeftContent />
     <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content
