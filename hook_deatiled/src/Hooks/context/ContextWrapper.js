// to overcome of problem of prop drilling we use context
import React , {createContext } from 'react'
import Child1 from './Child1';
import Child2 from './Child2';

const Apidata = createContext();
const ContextWrapper = () => {
  
  return (
    <div>
        <Apidata.Provider value={'test data api'}>
            <Child1 />
            <Child2 />
        </Apidata.Provider>
    </div>
  )
}

export default ContextWrapper
export {Apidata}