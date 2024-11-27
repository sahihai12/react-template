import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../main.module.css'
const Uni = () => {
    return (
    <div className={styles.main}>
        <ul>
          <li>
            <Link to='/ma'>ma</Link>
          </li>
          <li>
            <Link to='/ma2'>ma2</Link>
          </li>
        </ul>
    </div>
  )
}

export default Uni