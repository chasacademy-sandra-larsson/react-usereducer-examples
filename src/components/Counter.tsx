//@ts-nocheck

import { useReducer } from "react"


const inititalState = {
    count: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            }
        case "DECREMENT":
            return {
                count: state.count - 1
            }

        default:
            return state;

    }
}


function Counter() {

const [state, dispatch] = useReducer(reducer, inititalState)


    const handleIncrement = () => {
        dispatch({type: "INCREMENT"})
    }

    const handleDecrement= () => {
        dispatch({type: "DECREMENT"})
    }

    return(
        <div>
            <h1>Counter</h1>
            <h2>{state.count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Increment</button>
        </div>
    )
}

export default Counter