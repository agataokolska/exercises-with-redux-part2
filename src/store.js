import { createStore, combineReducers } from 'redux'
import counter, { incAction, decAction } from './state/counter'
import add from './state/add'
import calculator from './state/calculator'

const reducer = combineReducers({
    counter,
    add,
    calculator
})

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)



window.counterInc = () => store.dispatch(incAction())
window.counterDec = () => store.dispatch(decAction())
