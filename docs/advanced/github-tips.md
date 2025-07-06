---
sidebar_position: 3
---

# Advanced 3: GitHub活用テクニック

## 🎯 今日の目標
GitHubの便利な機能を活用して、プロジェクトをより効率的に管理し、見栄えの良いリポジトリを作りましょう！

## 📝 学習内容
1. GitHub Actions入門
2. Wiki機能の活用
3. プロジェクトボード
4. バッジとREADME装飾

---

## 1. GitHub Actions入門

### GitHub Actionsとは？
**自動化ツール**で、コードをプッシュしたときやプルリクエストを作成したときに、自動的にタスクを実行できます。

### 基本的な使い方

#### 1. ワークフローファイルの作成
リポジトリに `.github/workflows/` ディレクトリを作成し、YAMLファイルを配置します。

#### 2. 簡単な例：自動挨拶ボット
`.github/workflows/greetings.yml`:
```yaml
name: Greetings

on: [pull_request, issues]

jobs:
  greeting:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/first-interaction@v1
      with:
        repo-token: ${{ secrets.GITHUB_TOKEN }}
        issue-message: 'はじめてのIssue作成ありがとうございます！'
        pr-message: 'はじめてのプルリクエストありがとうございます！'
```

### 実用的な例

#### HTMLの自動チェック
`.github/workflows/html-check.yml`:
```yaml
name: HTML Check

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  html-validation:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: HTML5 Validator
      uses: Cyb3r-Jak3/html5validator-action@v7.2.0
      with:
        root: .
```

#### 自動的にGitHub Pagesにデプロイ
`.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./public
```

### よく使うアクション
- **actions/checkout**: リポジトリのコードを取得
- **actions/setup-node**: Node.js環境をセットアップ
- **actions/upload-artifact**: ビルド結果を保存
- **peaceiris/actions-gh-pages**: GitHub Pagesへデプロイ

---

## 2. Wiki機能の活用

### Wikiとは？
リポジトリに付属する**ドキュメント専用スペース**です。プロジェクトの詳細な説明や使い方を記載できます。

### Wikiの作成方法

1. **Wikiタブを開く**
   - リポジトリの「Wiki」タブをクリック
   - 「Create the first page」をクリック

2. **ページを作成**
   - タイトルを入力
   - 内容をMarkdownで記述
   - 「Save page」で保存

### Wikiの構成例
```
Home（トップページ）
├── Getting Started（はじめに）
├── Installation（インストール方法）
├── Usage（使い方）
│   ├── Basic Usage（基本的な使い方）
│   └── Advanced Usage（高度な使い方）
├── API Reference（API仕様）
└── FAQ（よくある質問）
```

### Wikiの便利な機能

#### サイドバーの作成
`_Sidebar.md`という名前でページを作成すると、全ページに共通のサイドバーが表示されます。

```markdown
## 目次
* [Home](Home)
* [Getting Started](Getting-Started)
* [Installation](Installation)
* [Usage](Usage)
  * [Basic Usage](Basic-Usage)
  * [Advanced Usage](Advanced-Usage)
* [API Reference](API-Reference)
* [FAQ](FAQ)
```

#### フッターの作成
`_Footer.md`を作成すると、全ページに共通のフッターが表示されます。

---

## 3. プロジェクトボード

### プロジェクトボードとは？
タスクを**かんばん方式**で管理できる機能です。To Do、In Progress、Doneなどの列でタスクを整理できます。

### プロジェクトの作成

1. **「Projects」タブを開く**
2. **「New project」をクリック**
3. **テンプレートを選択**
   - Basic kanban：基本的なかんばんボード
   - Automated kanban：自動化機能付き
   - Bug triage：バグ管理用

### 自動化機能
Automated kanbanを選ぶと：
- 新しいIssueは自動的に「To do」列に
- プルリクエストは「In progress」列に
- クローズされたら「Done」列に移動

### カスタムフィールドの追加
- **優先度**：High、Medium、Low
- **担当者**：チームメンバーを割り当て
- **期限**：デッドラインを設定
- **ラベル**：カテゴリ分け

### 効果的な使い方
1. **スプリント管理**：1-2週間の作業を計画
2. **進捗の可視化**：誰が何をしているか一目瞭然
3. **ボトルネックの発見**：滞っているタスクを特定

---

## 4. バッジとREADME装飾

### バッジとは？
リポジトリの状態を視覚的に表示する小さな画像です。

### よく使うバッジ

#### ビルドステータス
```markdown
![Build Status](https://github.com/ユーザー名/リポジトリ名/workflows/CI/badge.svg)
```

#### ライセンス
```markdown
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
```

#### 言語
```markdown
![Language](https://img.shields.io/github/languages/top/ユーザー名/リポジトリ名)
```

#### スター数
```markdown
![Stars](https://img.shields.io/github/stars/ユーザー名/リポジトリ名?style=social)
```

### Shields.ioを使ったカスタムバッジ

基本形式：
```markdown
![バッジ名](https://img.shields.io/badge/ラベル-メッセージ-色)
```

例：
```markdown
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Status](https://img.shields.io/badge/status-active-success)
![Contributions](https://img.shields.io/badge/contributions-welcome-brightgreen)
```

### README装飾テクニック

#### 1. 画像の中央寄せ
```markdown
<p align="center">
  <img src="logo.png" width="200">
</p>
```

#### 2. カラフルなヘッダー
```markdown
<h1 align="center">
  <br>
  <img src="logo.png" alt="プロジェクト名" width="200">
  <br>
  プロジェクト名
  <br>
</h1>

<h4 align="center">プロジェクトの簡単な説明</h4>

<p align="center">
  <a href="#key-features">主な機能</a> •
  <a href="#how-to-use">使い方</a> •
  <a href="#download">ダウンロード</a> •
  <a href="#credits">クレジット</a> •
  <a href="#license">ライセンス</a>
</p>
```

#### 3. 機能一覧をアイコン付きで
```markdown
## ✨ 主な機能

* 🎯 機能1の説明
* 🚀 機能2の説明
* 💡 機能3の説明
* 🔧 機能4の説明
```

#### 4. インストール手順を見やすく
```markdown
## 📦 インストール

```bash
# リポジトリをクローン
$ git clone https://github.com/ユーザー名/リポジトリ名

# ディレクトリに移動
$ cd リポジトリ名

# 依存関係をインストール
$ npm install

# アプリを起動
$ npm start
```
```

### プロフェッショナルなREADMEの構成

```markdown
<p align="center">
  <img src="assets/logo.png" width="200">
</p>

<h1 align="center">プロジェクト名</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue">
  <img src="https://img.shields.io/badge/license-MIT-green">
  <img src="https://img.shields.io/badge/build-passing-brightgreen">
</p>

<p align="center">
  プロジェクトの簡潔な説明をここに記載
</p>

## 📋 目次
- [概要](#概要)
- [デモ](#デモ)
- [機能](#機能)
- [インストール](#インストール)
- [使い方](#使い方)
- [開発](#開発)
- [貢献](#貢献)
- [ライセンス](#ライセンス)

## 🚀 概要
詳細な説明...

## 🎥 デモ
![デモ](assets/demo.gif)

## ✨ 機能
- 🎯 機能1
- 🚀 機能2
- 💡 機能3

## 📦 インストール
```bash
npm install project-name
```

## 🔧 使い方
```javascript
const project = require('project-name');
project.doSomething();
```

## 👥 貢献
プルリクエストを歓迎します！

## 📄 ライセンス
MIT
```

---

## 5. 演習問題

### 演習1: GitHub Actionsを設定
1. `.github/workflows/greetings.yml`を作成
2. 上記の挨拶ボットの設定をコピー
3. コミット＆プッシュ
4. 新しいIssueを作成して動作確認

### 演習2: Wikiページを作成
1. Wikiタブから新しいページを作成
2. プロジェクトの使い方を説明
3. サイドバーを追加

### 演習3: プロジェクトボードを使う
1. 新しいプロジェクトを作成（Automated kanban）
2. 3つ以上のIssueを作成
3. ドラッグ＆ドロップで整理

### 演習4: READMEを装飾
1. バッジを3つ以上追加
2. ロゴや画像を中央寄せ
3. 絵文字を使って見やすく

---

## 6. トラブルシューティング

### GitHub Actionsが動かない
- YAMLの構文エラーをチェック（インデントに注意）
- ブランチ名が正しいか確認
- Actions タブでエラーログを確認

### Wikiが表示されない
- リポジトリの設定でWikiが有効になっているか確認
- プライベートリポジトリの場合、権限を確認

### バッジが表示されない
- URLが正しいか確認
- ユーザー名/リポジトリ名のスペルミス
- プライベートリポジトリの場合は表示されない場合がある

---

## 7. まとめ

✅ GitHub Actionsで作業を自動化  
✅ Wikiで詳細なドキュメントを管理  
✅ プロジェクトボードでタスクを可視化  
✅ バッジとREADME装飾でプロフェッショナルな印象に  

これらの機能を活用することで、より効率的で見栄えの良いプロジェクト管理ができます！

---

## 🎉 応用編完了おめでとうございます！

GitHubの高度な機能を学びました。これらのテクニックを使って、あなたのプロジェクトをさらに魅力的にしましょう！