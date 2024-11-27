import React from 'react'
import { Link } from 'react-router-dom'
import styles from './main.module.css'
const Main = () => {
  return (
    <div className={styles.main}>
        <ul>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/uni">uni</Link>
          </li>
        </ul>

    </div>
  )
}

export default Main