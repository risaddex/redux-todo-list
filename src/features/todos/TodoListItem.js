import React from 'react'
import { useSelector } from 'react-redux'

import { availableColors, capitalize } from '../filters/colors'

const selectTodoById = (state, todoId) => {
  return state.todos.find((todo) => todo.id === todoId)
}

// Destructure `props.id`, since we just need the ID value
const TodoListItem = ({ id }) => {
  // Call our `selectTodoById` with the state _and_ the ID value
  const todo = useSelector((state) => selectTodoById(state, id))
  const { text, completed, color } = todo

  const handleCompletedChanged = () => {}
  const handleColorChanged = () => {}
  const onDelete = () => {}

  const colorOptions = availableColors.map((c) => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ))

  return (
    <li>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={handleCompletedChanged}
        />
        <div className="todo-text">{text}</div>
        <select
          className="colorPicker"
          value={color}
          style={{ color }}
          onChange={handleColorChanged}
        >
          <option value=""></option>
          {colorOptions}
        </select>
        <button className="destroy" onClick={onDelete}></button>
      </div>
    </li>
  )
}

export default TodoListItem