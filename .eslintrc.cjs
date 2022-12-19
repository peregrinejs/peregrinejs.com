module.exports = {
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  extends: ['next/core-web-vitals', '@imhoff/eslint-config/next'],
}
