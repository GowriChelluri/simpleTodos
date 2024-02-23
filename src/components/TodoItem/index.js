import './index.css'

const TodoItem = props => {
  const {todoDetails, onDeleteTodo} = props
  const {title, id} = todoDetails

  const onDeleteTodoItem = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="items-container">
      <p className="title">{title}</p>
      <button type="button" className="btn" onClick={onDeleteTodoItem}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
