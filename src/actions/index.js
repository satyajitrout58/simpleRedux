import { DO_INCREMENT, DO_DECREMENT } from '../actionTypes'

export const doIncrement = (payload) => {
    return{
        type: DO_INCREMENT,
        payload
    }
}

export const doDecrement = () => {
    return{
        type: DO_DECREMENT
    }
}