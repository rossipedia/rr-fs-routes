import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite-plus'

export default defineConfig({
  fmt: {
    semi: false,
    arrowParens: 'always',
    insertFinalNewline: true,
    printWidth: 80,
    singleQuote: true,
    sortImports: true,
    sortPackageJson: true,
    sortTailwindcss: true,
  },
  lint: {
    jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
    rules: { 'vite-plus/prefer-vite-plus-imports': 'error' },
    options: { typeAware: true, typeCheck: true },
  },
  plugins: [tailwindcss(), reactRouter()],
})
