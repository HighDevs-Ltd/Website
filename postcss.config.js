module.exports = {
  plugins: [
    'tailwindcss',
    'postcss-preset-env',
    [
      '@fullhuman/postcss-purgecss',
      {
        content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      },
    ],
    'autoprefixer',
  ],
}
