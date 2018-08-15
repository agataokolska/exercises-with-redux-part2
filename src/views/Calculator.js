import React from 'react'
import { connect } from 'react-redux'
import { inputAction, addAction } from '../state/calculator';

const styles={
    center:{
        textAlign: 'center'
    }
}
const Calculator = (props) => (
    <div style={styles.center}>
        <div>
            <input
            type="text"
            disabled={true}
            value={props._isResultShown ? props._result : props._input}
            />
        </div>
        <div>
            <button onClick={props._addAction}>+</button>
        </div>
        <div>
            <button onClick={() => props._inputAction(1)}>1</button>
            <button>2</button>
            <button>3</button>
        </div>
        <div>
            <button>4</button>
            <button>5</button>
            <button>6</button>
        </div>
        <div>
            <button>7</button>
            <button>8</button>
            <button>9</button>
        </div>
        <div>
            <button>0</button>
        </div>

    </div>
)

const mapStateToProps = state => ({
    _input: state.calculator.input,
    _result: state.calculator.result,
    _isResultShown: state.calculator.isResultShown
})

const mapDispatchToProps = dispatch => ({
    _inputAction: (number) => dispatch(inputAction(number)),
    _addAction: () => dispatch(addAction())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calculator)