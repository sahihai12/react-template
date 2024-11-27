import React , {useContext} from 'react'
import { Apidata } from './ContextWrapper'

const Child2 = () => {
  const apidata = useContext(Apidata);
  return (
    <div>
        Show Data {apidata}
    </div>
  )
}

export default Child2
