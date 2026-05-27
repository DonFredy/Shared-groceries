import './ArticleItem.css'

function ArticleItem({ article, buyers, onMark, onDelete }) {
  return (
    <div className={`article-item ${article.bought ? 'article-item--bought' : ''}`}>
      <span className="article-name">{article.name}</span>

      <div className="article-actions">
        <select
          className="buyer-select"
          value={article.buyer || ''}
          onChange={e => onMark(article.id, e.target.value)}
          aria-label="Acheteur"
        >
          <option value="">— Acheteur —</option>
          {buyers.map(b => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>

        <button
          className="delete-btn"
          onClick={() => onDelete(article.id)}
          aria-label={`Supprimer ${article.name}`}
          title="Supprimer"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

export default ArticleItem
