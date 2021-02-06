import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ReactComponent as TimesSolid } from './times-solid.svg'

import { availableColors, capitalize } from '../filters/colors'

const selectTodoById = (state, todoId) => {
  return state.todos.find(todo => todo.id === todoId)
}
// destructure no Id apenas
const TodoListItem = ({ id }) => {
  // chama o `selectedById` com o STATE e o ID
  const todo = useSelector(state => selectTodoById(state, id))
  const { text, completed, color } = todo

  const dispatch = useDispatch()
  
  const handleCompletedChanged = () => {  
    dispatch({ type: 'todo/todoToggled', payload: todo.id })
  }

  const handleColorChanged = (e) => {
    dispatch({
      type: 'todos/colorSelected',
      payload: { color: e.target.value, todoId: todo.id}
    })
  }

  const onDelete = () => {
    dispatch({ type: 'todos/todoDeleted', payload: todo.color})
  }

  const colorOptions = availableColors.map((c) => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ))

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={handleCompletedChanged}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select
            className="colorPicker"
            value={color}
            style={{ color }}
            onChange={handleColorChanged}
          >
            <option value=""></option>
            {colorOptions}
          </select>
          <button className="destroy" onClick={onDelete}>
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoListItem
