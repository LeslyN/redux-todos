import React from 'react'

const todos = [
  { id: 1, text: '', completed: false },
  { id: 2, text: '', completed: true },
  { id: 3, text: '', completed: false },
  { id: 4, text: '', completed: false },
  { id: 5, text: '', completed: true },
  { id: 6, text: '', completed: true },
  { id: 7, text: '', completed: true },
  { id: 8, text: '', completed: true },
  { id: 9, text: '', completed: true },
]

const App = () => (
  <div>
    <table>
      {todos.map(({ id, text, completed }) =>
        <tr
          key={id}
          style={{
            textDecoration: completed ? 'line-through' : 'none',
            marginBottom: 5
          }}
        >
          <span style={{ width: 200, display: 'inline-grid' }}>{text}</span>
          <button
            style={{ marginLeft: 10 }}
          >
            <b>x</b>
          </button>
        </tr>
      )}
    </table>
  </div>
)

export default App
