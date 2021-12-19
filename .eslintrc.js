module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "commonjs": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      quotes: [2, "double", "avoid-escape"],
      semi: [2, "never"],
    }
}
