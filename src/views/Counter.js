import React from 'react'
import { connect } from 'react-redux'

const Counter = (props) => (
    <div>
        <h1>{props.number}</h1>
            <button
                onClick={props.incHandler}
            >
            +
            </button>
            <button
                onClick={props.decHandler}
            >
            -
            </button>
    </div>
)

const mapStateToProps = state => ({
    number: state.counter.number
})

export default connect(mapStateToProps)(Counter)