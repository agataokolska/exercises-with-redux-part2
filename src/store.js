import { createStore, combineReducers } from 'redux'
import counterReducer, {incAction, decAction, addAction, substractAction} from './state/counter'

const reducer = combineReducers({
    counter: counterReducer
}) 

const store = createStore(
    reducer, 
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  
  store.dispatch(addAction(6))
  store.dispatch(addAction(10))

  window.counterInc = () => store.dispatch(incAction())
  window.counterDec = () => store.dispatch(decAction())
 