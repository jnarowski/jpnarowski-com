module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    // Ignore camelcase for now
    camelcase: 'off',
    'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off',
    'comma-dangle': 'off',
    // Only allow; debugger in development
    'no-debugger': process.env.PRE_COMMIT ? 'error' : 'off',
    // Only allow `console.log` in development
    'no-console': process.env.PRE_COMMIT ? ['error', {
      allow: ['warn', 'error']
    }] : 'off',
  },
}
