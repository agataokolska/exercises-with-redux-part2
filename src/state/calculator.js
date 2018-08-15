const INPUT = 'calculator/INPUT'
const ADD = 'calculator/ADD'
const SUBSTRACT = 'calculator/SUBSTRACT'

export const addAction = () => ({type: ADD})

export const substractAction = () => ({type: SUBSTRACT})

export const inputAction = number => ({type:INPUT, number})

const initialState = {
    result: 0,
    input: 0,
    isResultShown: false,
    lastOperation: null
}

export default (state = initialState, action) =>{
    switch(action.type){
        case INPUT:
        return {
            ...state,
            input: state.input * 10 + action.number,       //parseInt(String(state.input)) + String(action.number),
            isResultShown: false
        }
        case ADD:
        return{
            ...state,
            result: state.result + state.input,
            input: 0,
            isResultShown: true,
            lastOperation: action.type,
        }
        case SUBSTRACT:
        return{
            ...state,
            result: state.result - state.input,
            input:0,
            isResultShown: true,
            lastOperation: action.type
        }
        default:
        return state
    }
}