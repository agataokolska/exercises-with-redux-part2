import React from 'react'
import Counter from './views/Counter'
import Calculator from './views/Calculator'
class App extends React.Component {
  render() {
    return (
      <div>
        <Counter />
        <Calculator />
      </div>
    )
  }
}

export default App;
