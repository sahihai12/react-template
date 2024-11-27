import React from 'react'
import './App.css'
import { useDispatch , useSelector } from "react-redux";
import { desc, inc } from './action';

const App = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.reducer)

  return (
    <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>
        <div className="quantity">
          <button className="quantity__minus" title="Decrement" onClick={()=>dispatch(desc())}><span>-</span></button>
          <input name="quantity" type="text" className="quantity__input" value={state}/>
          <button className="quantity__plus" title="Increment" onClick={()=>dispatch(inc())}><span>+</span></button>
        </div>
      </div>
  )
}

export default App