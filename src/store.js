import { createStore, combineReducers } from 'redux'
import counterReducer, { incAction, decAction, addAction as addActionCounter, substractAction } from './state/counter'
import add, {addAction} from './state/add'

const reducer = combineReducers({
    counter: counterReducer,
    add
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


store.dispatch(addAction(3))
store.dispatch(addActionCounter(10))


window.counterInc = () => store.dispatch(incAction())
window.counterDec = () => store.dispatch(decAction())
