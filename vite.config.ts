import { defineConfig } from 'vite-plus';

export default defineConfig({
  fmt: {
    ignorePatterns: ['**/.agents/**'],
    singleQuote: true,
    sortImports: true,
    sortPackageJson: { sortScripts: true },
    sortTailwindcss: true,
  },
  lint: {
    ignorePatterns: ['**/.agents/**'],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  staged: {
    '*': 'vp check --fix',
  },
});
