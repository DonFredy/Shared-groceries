import { useState, useEffect } from 'react'
import ArticleList from './components/ArticleList'
import AddArticle from './components/AddArticle'
import ResetButton from './components/ResetButton'
import Settings from './components/Settings'
import './App.css'

const DEFAULT_BUYERS = ['Alice', 'Bob', 'Charlie']

function App() {
  const [articles, setArticles] = useState(() => {
    try {
      const saved = localStorage.getItem('grocery_list')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const [buyers, setBuyers] = useState(() => {
    try {
      const saved = localStorage.getItem('grocery_buyers')
      return saved ? JSON.parse(saved) : DEFAULT_BUYERS
    } catch {
      return DEFAULT_BUYERS
    }
  })

  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => {
    localStorage.setItem('grocery_list', JSON.stringify(articles))
  }, [articles])

  useEffect(() => {
    localStorage.setItem('grocery_buyers', JSON.stringify(buyers))
  }, [buyers])

  const addArticle = (name) => {
    setArticles(prev => [
      ...prev,
      { id: Date.now(), name, buyer: null, bought: false },
    ])
  }

  const markAsBought = (id, buyer) => {
    setArticles(prev =>
      prev.map(a =>
        a.id === id ? { ...a, buyer: buyer || null, bought: buyer !== '' } : a,
      ),
    )
  }

  const deleteArticle = (id) => {
    setArticles(prev => prev.filter(a => a.id !== id))
  }

  const resetList = () => {
    if (window.confirm('Vider toute la liste pour la nouvelle semaine ?')) {
      setArticles([])
    }
  }

  const toBuy = articles.filter(a => !a.bought)
  const bought = articles.filter(a => a.bought)

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-content">
          <h1 className="app-title">
            <span className="app-icon">🛒</span>
            Courses partagées
          </h1>
          <button
            className="settings-btn"
            onClick={() => setShowSettings(v => !v)}
            aria-label="Paramètres"
            title="Paramètres"
          >
            ⚙️
          </button>
        </div>
      </header>

      {showSettings && (
        <Settings
          buyers={buyers}
          setBuyers={setBuyers}
          onClose={() => setShowSettings(false)}
        />
      )}

      <main className="app-main">
        <AddArticle onAdd={addArticle} />

        <ArticleList
          title="À acheter"
          articles={toBuy}
          buyers={buyers}
          onMark={markAsBought}
          onDelete={deleteArticle}
          emptyMessage="Aucun article à acheter"
        />

        <ArticleList
          title="Achetés"
          articles={bought}
          buyers={buyers}
          onMark={markAsBought}
          onDelete={deleteArticle}
          emptyMessage="Aucun article acheté"
          isBought
        />

        <ResetButton onReset={resetList} disabled={articles.length === 0} />
      </main>
    </div>
  )
}

export default App
