# 🛒 Shared Grocery Manager

Gestionnaire de courses partagées pour colocataires et familles. Remplacer le post-it sur le frigo !

## 🚀 Fonctionnalités

- ✅ **Liste de courses commune** : Gérez une liste de courses partagée en temps réel
- 👥 **Suivi des acheteurs** : Voyez qui achète quoi
- 📝 **Deux sections** : Articles à acheter et articles achetés
- 🔄 **Réinitialisation hebdomadaire** : Nettoyez la liste pour la nouvelle semaine
- 💾 **Persistance LocalStorage** : Aucune base de données requise
- 📱 **Responsive** : Fonctionne sur mobile et desktop
- ⚙️ **Paramètres personnalisables** : Modifiez les noms des acheteurs

## 🛠️ Stack technique

- **React 18** - Framework UI
- **Vite** - Build tool ultra-rapide
- **CSS pur** - Design simple et responsive
- **LocalStorage** - Persistance des données
- **Node.js + npm** - Gestion des dépendances

## 📥 Installation

### Prérequis
- Node.js 14+ et npm

### Étapes

1. **Clonez ou accédez au dossier du projet**
```bash
cd shared-grocery-manager
```

2. **Installez les dépendances**
```bash
npm install
```

3. **Lancez le serveur de développement**
```bash
npm run dev
```

Le navigateur devrait s'ouvrir automatiquement sur `http://localhost:5173/`

## 💻 Commandes disponibles

### Développement
```bash
npm run dev
```
Lance le serveur Vite avec hot module replacement (HMR).

### Production
```bash
npm run build
```
Crée une version optimisée dans le dossier `dist/`.

### Aperçu de production
```bash
npm run preview
```
Lance un serveur pour tester la version de production localement.

## 📚 Utilisation

1. **Ajouter un article** : Tapez le nom d'une course et cliquez "Ajouter"
2. **Marquer comme acheté** : Sélectionnez un acheteur dans la liste déroulante
3. **Supprimer** : Cliquez sur le bouton ✕ pour supprimer un article
4. **Réinitialiser** : Cliquez "Nouvelle semaine" pour vider la liste complète
5. **Paramètres** : Cliquez ⚙️ pour modifier les noms des acheteurs

## 🗂️ Structure du projet

```
shared-grocery-manager/
├── src/
│   ├── components/
│   │   ├── ArticleItem.jsx       # Élément individual de course
│   │   ├── ArticleItem.css
│   │   ├── ArticleList.jsx       # Conteneur de liste
│   │   ├── ArticleList.css
│   │   ├── AddArticle.jsx        # Formulaire d'ajout
│   │   ├── AddArticle.css
│   │   ├── ResetButton.jsx       # Bouton réinitialisation
│   │   ├── ResetButton.css
│   │   ├── Settings.jsx          # Paramètres
│   │   └── Settings.css
│   ├── App.jsx                   # Composant principal
│   ├── App.css
│   ├── main.jsx                  # Point d'entrée React
│   └── index.css                 # Styles globaux
├── index.html                    # Page HTML
├── vite.config.js                # Config Vite
├── package.json                  # Dépendances
├── .gitignore                    # Git ignore
├── netlify.toml                  # Config Netlify
├── vercel.json                   # Config Vercel
└── README.md                     # Ce fichier
```

## 🌐 Déploiement

### Sur Netlify

1. Connectez-vous à [Netlify](https://netlify.com)
2. Cliquez "New site from Git"
3. Sélectionnez votre repository GitHub
4. Vérifiez que la config est correcte :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
5. Cliquez "Deploy site"

Netlify lira automatiquement `netlify.toml` et déploiera votre site.

### Sur Vercel

1. Connectez-vous à [Vercel](https://vercel.com)
2. Cliquez "New Project"
3. Importez votre repository GitHub
4. Vérifiez que la config est correcte :
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
5. Cliquez "Deploy"

Vercel lira automatiquement `vercel.json` et déploiera votre site.

### Déploiement local statique

Après avoir exécuté `npm run build`, le dossier `dist/` contient tous les fichiers nécessaires pour servir l'application. Vous pouvez l'héberger sur n'importe quel serveur web statique (AWS S3, GitHub Pages, etc.).

## 💾 Données stockées

Les données sont sauvegardées automatiquement dans le LocalStorage de votre navigateur :
- **Clé articles** : `grocery_list` → Liste de toutes les courses
- **Clé acheteurs** : `grocery_buyers` → Liste des noms d'acheteurs

Vous pouvez voir/modifier ces données via les DevTools du navigateur (F12 → Application → LocalStorage).

## 🎨 Personnalisation

### Changer les acheteurs par défaut

Ouvrez `src/App.jsx` et modifiez la ligne :
```javascript
const DEFAULT_BUYERS = ['Alice', 'Bob', 'Charlie']
```

Vous pouvez aussi modifier directement dans l'app via le bouton ⚙️ (Paramètres).

### Changer les couleurs

Tous les styles se trouvent dans les fichiers `.css`. Modifiez les variables de couleur au besoin.

## 🐛 Dépannage

### L'application ne se lance pas
- Vérifiez que Node.js est installé : `node --version`
- Supprimez `node_modules/` et réinstallez : `rm -rf node_modules && npm install`

### Les changements ne s'affichent pas
- Rafraîchissez la page (Ctrl+Shift+R ou Cmd+Shift+R)
- Videz le cache du navigateur

### Les données disparaissent
- Les données sont stockées dans le LocalStorage de votre navigateur
- Si vous effacez le cache du navigateur, les données seront perdues
- Sauvegardez vos données en exportant le LocalStorage si nécessaire

## 📝 Licence

MIT - Libre d'utilisation et de modification

## 🤝 Contribution

Ce projet est disponible pour modification et amélioration personnelle. N'hésitez pas à l'adapter selon vos besoins !

---

**Bon shopping ! 🛍️**
