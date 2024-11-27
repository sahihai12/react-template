import React , {useReducer} from 'react'


const UseStateandUseReducer = () => {
    // const [count, setcount] = useState(0);
    // return (
    //     <div>
    //         <button onClick={() => setcount(count+1)}>+</button>
    //         {count}
    //         <button onClick={() => setcount(count-1)}>-</button>
    //     </div>
    // )

    const initialstate = {
        count: 0
    }
    const reducer = (state , action) => {
        console.log(state, action);
        switch (action.type) {
            case 'inc':
                return ({count: state.count+1})
            case 'desc':
                return ({count: state.count-1})
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer , initialstate);
    return (
        <div>
            <button onClick={() => dispatch({type:'inc'})}>+</button>
            {state.count}
            <button onClick={() => dispatch({type:'desc'})}>-</button>
        </div>
    )
}

export default UseStateandUseReducer