import React, { useRef, useContext } from 'react'
import { Appcontext } from '../App.jsx';

export const TransactionCard = ({ title, amount, id, isIncome }) => {
    const cardRef = useRef(null)
    const { update } = useContext(Appcontext)
    function handleClick() {

        update.transactions(prev => prev.filter((_, index) => index !== id))
        update.netBalance(prev => prev - amount)

        if (amount > 0) {
            update.income(prev => prev - amount)
        } else {
            update.expense(prev => prev - Math.abs(amount))
        }

    }
    return (
        <div ref={cardRef} className={isIncome ? 'transaction-card green-card' : 'transaction-card red-card'} id={id}>
            <p>{title}</p>
            <p>{amount}</p>
            <button onClick={handleClick}>X</button>
        </div>
    )
}
