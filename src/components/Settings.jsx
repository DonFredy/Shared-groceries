import { useState } from 'react'
import './Settings.css'

function Settings({ buyers, setBuyers, onClose }) {
  const [draft, setDraft] = useState([...buyers])
  const [newName, setNewName] = useState('')

  const updateBuyer = (index, value) => {
    setDraft(prev => prev.map((b, i) => (i === index ? value : b)))
  }

  const removeBuyer = (index) => {
    setDraft(prev => prev.filter((_, i) => i !== index))
  }

  const addBuyer = () => {
    const trimmed = newName.trim()
    if (!trimmed || draft.includes(trimmed)) return
    setDraft(prev => [...prev, trimmed])
    setNewName('')
  }

  const handleSave = () => {
    const clean = draft.map(b => b.trim()).filter(Boolean)
    if (clean.length === 0) return
    setBuyers(clean)
    onClose()
  }

  return (
    <div className="settings-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="settings-panel" role="dialog" aria-label="Paramètres">
        <div className="settings-header">
          <h2>Paramètres</h2>
          <button className="settings-close" onClick={onClose} aria-label="Fermer">✕</button>
        </div>

        <div className="settings-body">
          <h3 className="settings-section-title">Acheteurs</h3>

          <ul className="settings-buyers">
            {draft.map((buyer, i) => (
              <li key={i} className="settings-buyer-row">
                <input
                  className="settings-buyer-input"
                  type="text"
                  value={buyer}
                  onChange={e => updateBuyer(i, e.target.value)}
                  aria-label={`Acheteur ${i + 1}`}
                />
                <button
                  className="settings-buyer-remove"
                  onClick={() => removeBuyer(i)}
                  disabled={draft.length <= 1}
                  aria-label={`Supprimer ${buyer}`}
                  title="Supprimer"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <div className="settings-add-buyer">
            <input
              className="settings-buyer-input"
              type="text"
              placeholder="Nouveau prénom…"
              value={newName}
              onChange={e => setNewName(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && addBuyer()}
            />
            <button
              className="settings-add-btn"
              onClick={addBuyer}
              disabled={!newName.trim()}
            >
              Ajouter
            </button>
          </div>
        </div>

        <div className="settings-footer">
          <button className="settings-cancel-btn" onClick={onClose}>Annuler</button>
          <button className="settings-save-btn" onClick={handleSave}>Enregistrer</button>
        </div>
      </div>
    </div>
  )
}

export default Settings
