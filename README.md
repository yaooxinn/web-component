# web-components

![Vite](https://img.shields.io/badge/Vite-v5-white?labelColor=%23646cff) ![TypeScript](https://img.shields.io/badge/TypeScript-v5-white?labelColor=%232f74c0) ![React](https://img.shields.io/badge/React-v18-white?labelColor=%23087ea4) ![Storybook](https://img.shields.io/badge/Storybook-v7-white?labelColor=%23ff4785)

MDV-AP フロントエンドの共通 Web コンポーネントです。

```bash
# Change directory
cd packages/web-components

# Run Web Components
bun run dev
```

実際の Webコンポーネントを確認するには `packages/web-components/index.html` を編集して確認したい Web コンポーネントを配置してください。

```bash
# Run Storybook 
bun run storybook
```

※ Storybook は Webコンポーネントではなく React コンポーネントで表示されます。

## Available Components

| Component Name   | Custom Element    | Description                              |
|------------------|-------------------|------------------------------------------|
| ログイン認証画面 | mdvap-login       |                                          |
| ナビゲーション   | mdvap-navigations | `mdvap-header` と `mdvap-sidebar` を統合 |
| ヘッダー         | mdvap-header      |                                          |
| サイドメニュー   | mdvap-sidebar     |                                          |
