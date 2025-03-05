import React, { useEffect, useRef, useContext } from 'react'
import { Appcontext } from '../App.jsx'

export const Form = () => {
    const { currentValue, update } = useContext(Appcontext)
    const expenceRef = useRef(null)
    const amountRef = useRef(null)
    useEffect(() => {
        amountRef.current.value = ''
        expenceRef.current.value = ''
    }, [currentValue.transactions])

    function handleClick() {
        if (amountRef.current.value !== '' && expenceRef.current.value !== '') {
            let amount = parseInt(amountRef.current.value);

            if (amount < 0) {
                update.expense(prev => prev + Math.abs(amount))
            } else {
                update.income(prev => prev + amount)
            }

            update.netBalance(prev => prev + amount);
            update.transactions(prev => [...prev, { title: expenceRef.current.value, amount: amountRef.current.value }])
        }


    }
    return (
        <div className='form'>
            <h2>New Transaction</h2>
            <input ref={expenceRef} type="text" placeholder='Enter expense' />
            <input ref={amountRef} type="number" placeholder='Enter amount' />
            <button className='add-btn' onClick={handleClick}>Add Transaction</button>
        </div>
    )
}
