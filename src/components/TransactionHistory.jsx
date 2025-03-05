import React, { useContext } from 'react'
import { TransactionCard } from './TransactionCard'
import { Appcontext } from '../App.jsx'


export const TransactionHistory = () => {
    let { update, currentValue } = useContext(Appcontext)
    let transactions = currentValue.transactions.map((transaction, index) => {
        return <TransactionCard id={index} key={index} title={transaction.title} amount={transaction.amount} isIncome={transaction.amount > 0} currentValue={currentValue} update={update} />
    })
    return (
        <div>
            <h2>Transaction History</h2>
            {transactions}
        </div>
    )
}
