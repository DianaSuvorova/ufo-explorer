module.exports = {
  extends: ["airbnb", "airbnb/hooks"],
  rules: {
    "react/jsx-filename-extension": [0],
    "react/react-in-jsx-scope": [0],
    quotes: [2, "double"],
    "react/jsx-indent": [2, 2],
  },
  env: {
    browser: true,
    node: true,
  },
};
