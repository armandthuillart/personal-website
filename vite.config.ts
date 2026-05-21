import { defineConfig } from 'vite-plus';

export default defineConfig({
  fmt: {
    ignorePatterns: ['**/.agents/**', '**/_generated/**'],
    singleQuote: true,
    sortImports: true,
    sortPackageJson: { sortScripts: true },
    sortTailwindcss: true,
  },
  lint: {
    ignorePatterns: ['**/.agents/**', '**/_generated/**'],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  staged: {
    '*': 'vp check --fix',
  },
});
