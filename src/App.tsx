import React from 'react'
import ErrorBoundaries from './ErrorBoundaries'
import ComponentContainer from './ComponentContainer'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Strict app</h1>
      </header>

      <main>
        <ErrorBoundaries>
          <ComponentContainer />
        </ErrorBoundaries>
      </main>

      <footer>
        <p>2022</p>
      </footer>
    </div>
  )
}

export default App
