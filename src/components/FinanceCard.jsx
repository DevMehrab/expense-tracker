import React from 'react'

export const FinanceCard = ({ className, title, amount }) => {
    return (
        <div className={className}>
            <h3>{title}</h3>
            <h3 >{amount}</h3>
        </div>
    )
}
