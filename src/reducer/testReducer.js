import { DO_INCREMENT, DO_DECREMENT } from '../actionTypes';

const initialState = {
    count: 1
};

function testReducer(state = initialState, actions) {
    switch(actions.type){
        case DO_INCREMENT:
            console.log(actions);
            return {
                ...state,
                count: state.count + actions.payload
            }
        case DO_DECREMENT:
           return {
                ...state,
                count: state.count -1
            }
        default:
            return state;
    }
}

export default testReducer;
