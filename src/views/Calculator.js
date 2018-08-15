import React from 'react'
import { connect } from 'react-redux'

const Calculator = (props) => (
    <div>
        <div>
            <button>+</button>
        </div>
        <div>
            <button>1</button>
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

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calculator)