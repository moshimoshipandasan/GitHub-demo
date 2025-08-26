---
id: intro
title: ハンドトラッキング・テトリスで学ぶGitHub実践
sidebar_label: 概要
description: MediaPipeを使った手の動きでテトリスを操作しながら、GitHubの実践的な使い方を学習します
---

# ハンドトラッキング・テトリスで学ぶGitHub実践

## 🎮 このワークショップについて

このワークショップでは、手の動きで操作するテトリスゲームを題材に、GitHubの実践的な使い方を学びます。リポジトリのフォーク、クローン、GitHub Codespacesの活用など、実際の開発で使われる技術を体験できます。

### 学習できること
- GitHubリポジトリのフォークとクローン
- GitHub Codespacesを使った開発環境構築
- JavaScriptとMediaPipeを使った最新技術の体験
- プルリクエストを通じた共同開発の基礎

### 前提条件
- Webカメラ（手の動きを認識するため）
- Chromeブラウザ（推奨）
- GitHubアカウント
- JavaScript・Web開発の基礎知識

## 🚀 はじめ方

### 方法1: GitHub Codespacesを使う（推奨）

OSに関係なく、ブラウザだけで開発環境を構築できます。

1. **リポジトリをフォーク**
   - [元のリポジトリ](https://github.com/itoksk/tetris-hand)にアクセス
   - 右上の「Fork」ボタンをクリック
   - 自分のアカウントにコピーが作成されます

2. **Codespacesを起動**
   - フォークしたリポジトリで緑の「Code」ボタンをクリック
   - 「Codespaces」タブを選択
   - 「Create codespace on main」をクリック
   - 推奨スペック：2コア、4GB RAM

3. **プロジェクトのセットアップ**
   ```bash
   # 依存関係をインストール（Codespacesは既にコードが用意されています）
   npm install
   ```

4. **開発サーバーを起動**
   ```bash
   npm run dev
   # または
   npx vite --host 0.0.0.0
   ```

5. **ブラウザでアクセス**
   - Codespacesが自動的にポートフォワーディングを設定
   - 表示されるURLをクリックしてアプリケーションにアクセス
   - カメラへのアクセスを許可

### 方法2: ローカル環境で実行（フォーク済みの場合）

自分のフォークしたリポジトリをクローンして実行する方法です。

1. **リポジトリをクローン**
   ```bash
   git clone https://github.com/[あなたのユーザー名]/tetris-hand.git
   cd tetris-hand
   ```

2. **依存関係をインストール**
   ```bash
   npm install
   ```

3. **開発サーバーを起動**
   ```bash
   npm run dev
   ```

4. **ブラウザでアクセス**
   - http://localhost:3000 にアクセス
   - Webカメラへのアクセスを許可

### 方法3: フォークせずに直接クローン（試してみたいだけの場合）

フォークせずに元のリポジトリを直接クローンして試す方法です。

1. **プロジェクトフォルダを作成してクローン**
   ```bash
   # プロジェクトフォルダを作成
   mkdir my-tetris-project
   cd my-tetris-project
   
   # 元のリポジトリをクローン
   git clone https://github.com/itoksk/tetris-hand.git .
   ```

2. **依存関係をインストール**
   ```bash
   npm install
   ```

3. **開発サーバーを起動**
   ```bash
   npm run dev
   ```

4. **ブラウザでアクセス**
   - http://localhost:3000 にアクセス
   - Webカメラへのアクセスを許可

:::tip
フォークせずに直接クローンした場合は、変更をGitHubにプッシュすることはできません。自分で改造したい場合は、先にフォークすることをおすすめします。
:::

## 🎮 ゲームの操作方法

手の動きでテトリスを操作します：

| 動作 | 効果 |
|------|------|
| 手を左に傾ける | ブロックを左に移動 |
| 手を右に傾ける | ブロックを右に移動 |
| 手を下に動かす | ブロックの落下速度アップ |
| 人差し指を立てる | ブロックを回転 |

### 操作のコツ
- 明るい場所で使用すると認識精度が向上します
- カメラから適度な距離（30-100cm）を保ちましょう
- ゆっくりとした動きの方が認識されやすいです
- 手と背景のコントラストがはっきりしている場所で使用しましょう

### MediaPipeの手のランドマーク
MediaPipeは手の21個のランドマーク（0-20）を追跡します：
- 0: 手首
- 4: 親指の先端
- 8: 人差し指の先端
- 12: 中指の先端
- 16: 薬指の先端
- 20: 小指の先端

## 🤝 共同開発の練習

### プルリクエストを作成
1. 新しいブランチを作成
   ```bash
   git checkout -b feature/my-improvement
   ```

2. 変更をコミット
   ```bash
   git add .
   git commit -m "Add: 新機能の説明"
   ```

3. GitHubにプッシュ
   ```bash
   git push origin feature/my-improvement
   ```

4. GitHubでプルリクエストを作成

## 🎯 発展的な学習

### MediaPipeについて学ぶ
- [MediaPipe公式ドキュメント](https://developers.google.com/mediapipe)
- 手以外の認識（顔、ポーズ）も試してみる
- 他のゲームへの応用を考える

### GitHubの高度な機能
- GitHub Actionsでテストを自動化
- GitHub Pagesでゲームを公開
- 他の人のフォークから良いアイデアを取り入れる

## 🆘 トラブルシューティング

### カメラが認識されない
- ブラウザの設定でカメラへのアクセスを許可
- HTTPSでアクセスしているか確認
- 別のブラウザ（Chrome推奨）で試す

### 手の動きが認識されない
- 明るい場所に移動
- カメラとの距離を調整
- 背景が複雑でない場所で試す

### Codespacesが起動しない
- GitHubアカウントの無料枠を確認
- 既存のCodespacesを削除して再作成
- ローカル環境での実行に切り替える

### npmインストールエラー
```bash
# node_modulesを削除して再インストール
rm -rf node_modules package-lock.json
npm install
```

### Viteが起動しない
```bash
# 代替コマンドを使用
npx vite --host 0.0.0.0
```

## 📚 関連リソース

- [GitHub Skills](https://skills.github.com/)
- [JavaScript MDN Web Docs](https://developer.mozilla.org/ja/docs/Web/JavaScript)
- [MediaPipe Hands解説記事](https://google.github.io/mediapipe/solutions/hands.html)

## 🎉 まとめ

このワークショップを通じて、GitHubの基本的な使い方から実践的な共同開発まで体験できました。手の動きで操作するという新しい技術に触れながら、楽しくプログラミングを学ぶことができたと思います。

ぜひ自分なりのカスタマイズを加えて、オリジナルのゲームを作ってみてください！