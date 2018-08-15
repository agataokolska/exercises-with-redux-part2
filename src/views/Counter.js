import React from 'react'
import { connect } from 'react-redux'
import {incAction, decAction} from '../state/counter'

const Counter = (props) => (
    <div>
        <h1>{props.number}</h1>
            <button
                onClick={props._incHandler}
            >
            +
            </button>
            <button
                onClick={props._decHandler}
            >
            -
            </button>
    </div>
)

const mapStateToProps = state => ({   //function that creates props to Counter when sth change in state
    number: state.counter.number
})
const mapDispatchToProps = dispatch => ({
    _incHandler: () => dispatch(incAction()),
    _decHandler: () => dispatch(decAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(Counter)