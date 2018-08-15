import React from 'react'
import Counter from './views/Counter'
import Calculator from './views/Calculator'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <Link to={'/calculator'}> Calculator </Link>
        <Link to={'/counter'}> Counter </Link>
        <Route path={'/'} exact component={Calculator} />
        <Route path={'/calculator'} exact component={Calculator} />
        <Route path={'/counter'} exact component={Counter} />
      </div>
      </Router>
    )
  }
}

export default App;
