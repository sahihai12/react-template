import React, { useState } from 'react';
import styles from './Calculator.module.css';

const Calculator = () => {
    const [answer, setanswer] = useState('null')

    const calculate = (e) => {
        setanswer(eval(e.target.value));
    }

    

    
    return (
        <div className={styles.wrapper}>
            <h2>Calculate <span>expressions</span> </h2>
            <div className={styles.evaluate}>
                <input type="text" className={styles.evalinput} placeholder="enter an expression" name='evalinput' onBlur={calculate}/>
                <div className={styles.evalcalculate}>
                    <i className='fa-solid fa-calculator' ></i>
                </div>
            </div>
            {(answer != null) ? <div className='evaluatsucess'>Answer : {answer}</div> : <div className='evaluateerror'>*<span>please enter some expression</span></div>}
        </div>
    )
}

export default Calculator