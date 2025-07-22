---
sidebar_position: 2
---

# claspを使ったGAS開発環境構築ガイド

## 🎯 このページで学べること

- **clasp**を使ったローカル開発環境の構築方法
- **VSCode、GitHub Codespaces、Cursor**など各エディタでの設定
- ターミナルからGASを操作する方法
- トラブルシューティング

## 📚 claspとは？

**clasp (Command Line Apps Script Projects)** は、GoogleがオフィシャルにサポートするGAS開発用のCLIツールです。

### claspでできること
- **ローカル開発**: お気に入りのエディタでGASを開発
- **バージョン管理**: GitHubと連携して履歴管理
- **自動デプロイ**: ターミナルから直接GASにアップロード
- **TypeScript対応**: より安全なコード開発

## 🛠️ 環境別セットアップガイド

### 共通の準備

#### 1. Node.jsのインストール確認
```bash
# Node.jsのバージョン確認
node -v

# npmのバージョン確認
npm -v
```

Node.jsがインストールされていない場合は、[公式サイト](https://nodejs.org/)からLTS版をインストールしてください。

#### 2. claspのインストール
```bash
# グローバルインストール
npm install -g @google/clasp

# インストール確認
clasp --version
```

### 🆚 VSCodeでの開発

#### 拡張機能のインストール
1. VSCodeを開く
2. 拡張機能マーケットプレイスで以下をインストール：
   - **Google Apps Script** (公式拡張)
   - **ESLint** (コード品質チェック)
   - **Prettier** (コードフォーマット)

#### ターミナルの使用
```bash
# VSCodeの統合ターミナルを開く
# Mac: Cmd + `
# Windows: Ctrl + `

# claspコマンドを実行
clasp login
```

### 🌐 GitHub Codespacesでの開発

#### Codespacesの準備
1. GitHubリポジトリでCodespacesを起動
2. `.devcontainer/devcontainer.json`を作成：

```json
{
  "name": "GAS Development",
  "image": "mcr.microsoft.com/devcontainers/javascript-node:18",
  "postCreateCommand": "npm install -g @google/clasp",
  "customizations": {
    "vscode": {
      "extensions": [
        "googlecloudtools.cloudcode",
        "dbaeumer.vscode-eslint"
      ]
    }
  }
}
```

#### Codespacesでのclasp設定
```bash
# Codespacesのターミナルで実行
clasp login --no-localhost

# 表示されたURLをブラウザで開いて認証
# 認証コードをターミナルに貼り付け
```

### 🤖 Cursorでの開発

#### Cursorの特徴
- **AI支援**: コード生成・修正をAIがサポート
- **高度な補完**: より賢いコード補完
- **チャット機能**: エラー解決や質問が可能

#### Cursorでのセットアップ
```bash
# Cursorのターミナルで実行
npm install -g @google/clasp

# ログイン
clasp login

# プロジェクトをクローン
clasp clone <スクリプトID>
```

## 📝 基本的な開発フロー

### 1. Google Apps Script APIを有効化
1. [Google Apps Script設定ページ](https://script.google.com/home/usersettings)にアクセス
2. 「Google Apps Script API」をONにする

### 2. 新規プロジェクトの作成
```bash
# 新規プロジェクトを作成
mkdir my-gas-project
cd my-gas-project

# claspプロジェクトを初期化
clasp create --title "My GAS Project" --type standalone

# 作成されたファイル
# - .clasp.json (プロジェクト設定)
# - appsscript.json (GAS設定)
# - Code.js (メインコード)
```

### 3. 既存プロジェクトのクローン
```bash
# GASエディタでスクリプトIDを確認
# プロジェクトの設定 → スクリプトID

# クローン実行
clasp clone <スクリプトID>
```

### 4. コードの編集とアップロード
```bash
# ローカルで編集後、GASにアップロード
clasp push

# 強制的にアップロード（確認をスキップ）
clasp push --force

# 特定のファイルのみアップロード
clasp push --files Code.js
```

### 5. GASエディタを開く
```bash
# ブラウザでGASエディタを開く
clasp open

# 特定のデプロイメントを開く
clasp open --deploymentId <ID>
```

## 🔧 高度な使い方

### TypeScriptで開発
```bash
# TypeScriptの設定
npm init -y
npm install --save-dev @types/google-apps-script

# tsconfig.jsonを作成
echo '{
  "compilerOptions": {
    "lib": ["ES2019"],
    "target": "ES2019",
    "module": "CommonJS"
  }
}' > tsconfig.json

# .claspignoreを作成
echo '**/**
!*.ts
!appsscript.json' > .claspignore
```

### 環境変数の管理
```javascript
// config.gs
const CONFIG = {
  SPREADSHEET_ID: PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID'),
  API_KEY: PropertiesService.getScriptProperties().getProperty('API_KEY')
};

// プロパティの設定（GASエディタで実行）
function setProperties() {
  PropertiesService.getScriptProperties().setProperties({
    'SPREADSHEET_ID': 'your-spreadsheet-id',
    'API_KEY': 'your-api-key'
  });
}
```

### デプロイメントの管理
```bash
# 新しいデプロイメントを作成
clasp deploy --description "Version 1.0"

# デプロイメント一覧を表示
clasp deployments

# 特定のバージョンにデプロイ
clasp deploy --versionNumber 2 --description "Bug fixes"
```

## ❗ トラブルシューティング

### よくあるエラーと解決方法

#### 1. "User has not enabled the Apps Script API"
```bash
# 解決方法：
# 1. https://script.google.com/home/usersettings にアクセス
# 2. Google Apps Script APIをONにする
# 3. 再度コマンドを実行
```

#### 2. "Error: Permission denied"
```bash
# Mac/Linuxでの解決方法
sudo npm install -g @google/clasp

# Windowsでの解決方法
# 管理者権限でコマンドプロンプトを開いて実行
```

#### 3. "clasp login"でブラウザが開かない
```bash
# GitHub Codespacesやリモート環境での解決方法
clasp login --no-localhost

# 表示されたURLを手動でブラウザで開く
```

#### 4. ファイルが同期されない
```bash
# .claspignoreファイルを確認
cat .claspignore

# 必要に応じて内容を修正
echo '**/**
!*.js
!*.gs
!*.html
!appsscript.json' > .claspignore
```

## 📚 参考リンク

- [clasp公式ドキュメント](https://github.com/google/clasp)
- [Google Apps Script公式](https://developers.google.com/apps-script)
- [VSCode GAS拡張機能](https://marketplace.visualstudio.com/items?itemName=google-cloud-tools.google-cloud-spanner-driver)

## 🎉 まとめ

claspを使うことで、以下のメリットが得られます：

- **快適な開発環境**: お気に入りのエディタで開発
- **バージョン管理**: GitHubと連携して安全に管理
- **チーム開発**: 複数人での開発が容易に
- **自動化**: CI/CDパイプラインの構築も可能

ぜひ、あなたの開発スタイルに合った環境でGAS開発を楽しんでください！