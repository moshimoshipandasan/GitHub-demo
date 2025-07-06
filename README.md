# GitHub実践ワークショップ Wiki 🚀

GitHub/Gitの基本操作を実践的に学ぶワークショップのドキュメントサイトです。

## 🎯 概要

このプロジェクトは、中学生以上を対象としたGitHub実践ワークショップのWikiサイトです。Docusaurus（Pteranodon）を使用して構築されています。

## 📚 コンテンツ

- **基礎編（Day 1-6）**: GitHubの基本から始めて、段階的にスキルアップ
- **応用編**: Google Apps Script 連携、GitHub Classroom、高度な活用法
- **リソース**: トラブルシューティング、用語集

## 🚀 ローカルでの起動方法

### 前提条件
- Node.js 18.0以上
- npm または yarn

### セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm start
```

開発サーバーが起動したら、ブラウザで `http://localhost:3000` にアクセスしてください。

### ビルド

```bash
# 本番用ビルド
npm run build

# ビルドしたサイトのプレビュー
npm run serve
```

## 📁 ディレクトリ構造

```
.
├── docs/                # ドキュメントファイル
│   ├── intro.md        # トップページ
│   ├── basics/         # 基礎編（Day 1-6）
│   ├── advanced/       # 応用編
│   ├── resources/      # リソース
│   └── samples/        # サンプルコード
├── blog/               # ブログ記事
├── src/                # カスタムコンポーネント
├── static/             # 静的ファイル
├── docusaurus.config.js # Docusaurus設定
└── sidebars.js         # サイドバー設定
```

## 🌐 デプロイ

GitHub Pagesへのデプロイ:

```bash
# GitHub Pagesへデプロイ
npm run deploy
```

## 📝 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🤝 貢献

プルリクエストを歓迎します！

1. このリポジトリをフォーク
2. 新しいブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📧 お問い合わせ

質問や提案がある場合は、[Issues](https://github.com/itoksk/GitHub-demo/issues)でお知らせください。