# Google Apps Script 入門サンプル

このフォルダには、GASの基本的な使い方を学ぶためのサンプルコードが含まれています。

## 📁 ファイル構成

- `hello.gs` - 基本的なGASの関数サンプル
- `.clasp.json.example` - claspの設定ファイルの例

## 🚀 使い方

### 方法1: スプレッドシートで直接使う

1. Google スプレッドシートを新規作成
2. 「拡張機能」→「Apps Script」を開く
3. `hello.gs`の内容をコピー＆ペースト
4. 保存して実行

### 方法2: claspを使ってGitHubと連携

1. claspをインストール
```bash
npm install -g @google/clasp
```

2. Googleアカウントでログイン
```bash
clasp login
```

3. `.clasp.json.example`を`.clasp.json`にコピーして、スクリプトIDを設定

4. コードをプッシュ
```bash
clasp push
```

## 📝 サンプルの内容

- `myFunction()` - コンソールにメッセージを出力
- `writeHelloWorld()` - スプレッドシートに文字を書き込み
- `onOpen()` - カスタムメニューを追加
- `showAlert()` - アラートダイアログを表示

## 🎯 学習のポイント

1. 基本的な関数の書き方
2. スプレッドシートとの連携
3. UIの操作（メニュー、アラート）
4. GitHubでのコード管理

## ⚠️ 注意

- 初回実行時は権限の承認が必要です
- スクリプトIDは公開しないように注意してください