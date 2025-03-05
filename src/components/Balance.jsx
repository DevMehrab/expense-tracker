import React from 'react'

export const Balance = ({ totalBalance }) => {
  return (
    <div className='balance'>
      <h1>Balance: {totalBalance}</h1>
    </div>
  )
}
