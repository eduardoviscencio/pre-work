import React, { useState } from 'react'

import styles from './Counter.module.css'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prevValue => prevValue + 1)

  const decrement = () => setCount(prevValue => prevValue - 1)

  return (
    <>
      <p className={styles.value}>Count: {count}</p>
      {count < 0 && (
        <span className={styles.errorMessage}>
          ❌ The count value is negative!
        </span>
      )}
      <div className={styles.buttonsContainer}>
        <button className={styles.incrementBtn} onClick={increment}>
          Increment
        </button>
        <button className={styles.decrementBtn} onClick={decrement}>
          Decrement
        </button>
      </div>
    </>
  )
}

export default Counter
