import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import { defineConfig, globalIgnores } from 'eslint/config'

// カスタムフック（use + 大文字）。react-hooks の規則がこの名前でフックを見分けるので、snake_case の例外にする
const hook_name = { regex: '^use[A-Z]', match: true }
const not_hook_name = { regex: '^use[A-Z]', match: false }

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // CLAUDE.md のコード規約
      '@typescript-eslint/naming-convention': [
        'error',
        // 変数・引数・メソッドなど: snake_case
        {
          selector: 'default',
          format: ['snake_case'],
          leadingUnderscore: 'allow',
        },
        // 変数: 定数の UPPER_CASE と、const で定義する React コンポーネントの PascalCase も可
        // （types で関数だけに絞ると型情報付きの lint が要るので、変数全体で許す）
        {
          selector: 'variable',
          filter: not_hook_name,
          format: ['snake_case', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        // 関数: React コンポーネントは PascalCase も可
        {
          selector: 'function',
          filter: not_hook_name,
          format: ['snake_case', 'PascalCase'],
        },
        // カスタムフック: useXxx
        {
          selector: ['function', 'variable'],
          filter: hook_name,
          format: ['camelCase'],
        },
        // 型: PascalCase
        { selector: 'typeLike', format: ['PascalCase'] },
        { selector: 'enumMember', format: ['PascalCase'] },
        // 外から来る名前は縛らない（import、ライブラリのオブジェクトのキーや分割代入）
        { selector: 'import', format: null },
        {
          selector: ['objectLiteralProperty', 'objectLiteralMethod'],
          format: null,
        },
        {
          selector: ['variable', 'parameter'],
          modifiers: ['destructured'],
          format: null,
        },
        {
          selector: 'typeProperty',
          modifiers: ['requiresQuotes'],
          format: null,
        },
      ],
    },
  },
  // 整形は Prettier に任せ、ぶつかる ESLint のルールを切る（最後に置く）
  eslintConfigPrettier,
])
