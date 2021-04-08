import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

// Components
import { Home } from './home'
import { ProjectPage } from './projects/[name]'
import { Projects } from './projects'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:year/:name" component={ProjectPage} />
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  )
}

export default App