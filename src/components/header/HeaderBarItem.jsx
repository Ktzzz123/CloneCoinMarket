import React from 'react'

export default function HeaderBarItem({value, content, isShow2Content, value2, isIncre}) {
  return (
    <div className='text-lg font-semibold mr-10'>
     {content}{' '}
      <span className='text-blue-600 font-bold text-lg'>{value}</span>
      {isShow2Content ? (
        isIncre ?? <HeaderBarItem content={value2} />
      ) : null}
    </div>
  )
}
