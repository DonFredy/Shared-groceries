import './ResetButton.css'

function ResetButton({ onReset, disabled }) {
  return (
    <div className="reset-wrapper">
      <button
        className="reset-btn"
        onClick={onReset}
        disabled={disabled}
        title="Vider la liste pour la nouvelle semaine"
      >
        🔄 Nouvelle semaine
      </button>
    </div>
  )
}

export default ResetButton
