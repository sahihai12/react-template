import React , {useContext} from 'react'
import { Apidata } from './ContextWrapper'

const Child1 = () => {
  const apidata = useContext(Apidata);
  return (
    <div>
        Show Data {apidata}
    </div>
  )
}

export default Child1