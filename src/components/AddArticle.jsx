import { useState } from 'react'
import './AddArticle.css'

function AddArticle({ onAdd }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setValue('')
  }

  return (
    <form className="add-article" onSubmit={handleSubmit}>
      <input
        className="add-article-input"
        type="text"
        placeholder="Ajouter un article…"
        value={value}
        onChange={e => setValue(e.target.value)}
        aria-label="Nom de l'article"
        autoComplete="off"
      />
      <button
        className="add-article-btn"
        type="submit"
        disabled={!value.trim()}
      >
        Ajouter
      </button>
    </form>
  )
}

export default AddArticle
