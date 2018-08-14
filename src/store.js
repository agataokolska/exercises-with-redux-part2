import { createStore, combineReducers } from 'redux'
import counter, { incAction, decAction } from './state/counter'
import add from './state/add'
import calculator, {inputAction} from './state/calculator'

const reducer = combineReducers({
    counter,
    add,
    calculator
})

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


//automatic testing
const getDiplayedVal = () => {
    const state = store.getState().calculator
  
    return state.isResultShown ? state.result : state.input
  }
  
  store.dispatch(inputAction(6))
  if (getDiplayedVal() !== 6) {
    throw new Error('Input not works! Should be 6')
  }
  store.dispatch(inputAction(7))
  if (getDiplayedVal() !== 67) {
    throw new Error('Input not works! Should be 67')
  }

//function in window are only for manual  testing

window.inputAction = number => store.dispatch(inputAction(number))

window.state = () => {
    const state = store.getState().calculator

    console.log({
    ...state,
    display: state.isResultShown ? state.result : state.input
    })
}
