module.exports = {
  'extends': [
    'react-app',
    'airbnb',
    'airbnb/hooks',
    'plugin:jsx-a11y/recommended',
  ],
  'plugins': [
    'jsx-a11y',
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
  },
  "rules": {
    "react/jsx-one-expression-per-line": 0
  }
}
