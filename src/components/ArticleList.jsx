import ArticleItem from './ArticleItem'
import './ArticleList.css'

function ArticleList({ title, articles, buyers, onMark, onDelete, emptyMessage, isBought }) {
  return (
    <section className={`article-list ${isBought ? 'article-list--bought' : ''}`}>
      <h2 className="article-list-title">
        {isBought ? '✅' : '📋'} {title}
        <span className="article-count">{articles.length}</span>
      </h2>

      {articles.length === 0 ? (
        <p className="article-list-empty">{emptyMessage}</p>
      ) : (
        <ul className="article-list-items">
          {articles.map(article => (
            <li key={article.id}>
              <ArticleItem
                article={article}
                buyers={buyers}
                onMark={onMark}
                onDelete={onDelete}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ArticleList
