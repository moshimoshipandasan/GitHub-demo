---
sidebar_position: 3
---

# Day 3: プロフィールREADMEで自己表現 🎨

## 🎯 今日の目標
GitHubプロフィールを魅力的にカスタマイズして、あなたらしさを表現しよう！

## 📚 学習内容

### 1. GitHubプロフィールREADMEとは？

GitHubには、あなたのプロフィールページをカスタマイズできる特別な機能があります。
**ユーザー名と同じ名前のリポジトリ**を作成し、そこにREADME.mdを置くと、プロフィールページに表示されます！

#### 仕組み
```
あなたのユーザー名: yamada-taro
↓
リポジトリ名: yamada-taro
↓
README.mdがプロフィールに表示される！
```

### 2. プロフィールREADMEの作成手順

#### Step 1: 特別なリポジトリを作成
1. GitHubにログイン
2. 右上の「+」→「New repository」をクリック
3. Repository nameに**自分のユーザー名と同じ名前**を入力
4. 「Public」を選択（必須！）
5. 「Add a README file」にチェック
6. 「Create repository」をクリック

> 💡 **ポイント**: 「✨ special ✨」という表示が出たら成功！

#### Step 2: README.mdを編集
1. 作成されたREADME.mdの編集ボタン（鉛筆アイコン）をクリック
2. 自己紹介を書く
3. 「Commit changes」で保存

### 3. 魅力的なプロフィールの要素

#### 基本構成
```markdown
# こんにちは！👋 山田太郎です

## 🌱 現在学習中
- Python
- Web開発（HTML/CSS/JavaScript）
- Git/GitHub

## 📫 連絡先
- Twitter: [@example](https://twitter.com/example)
- Email: example@email.com

## 📊 GitHub Stats
![GitHub stats](https://github-readme-stats.vercel.app/api?username=あなたのユーザー名&show_icons=true)
```

#### 絵文字の効果的な使い方
- 👋 挨拶
- 💻 プログラミング
- 🌱 学習中
- 🎯 目標
- 📫 連絡先
- ⚡ 趣味
- 🏫 学校
- 🎮 ゲーム

### 4. 便利なバッジとツール

#### スキルバッジ
```markdown
![Python](https://img.shields.io/badge/-Python-3776AB?style=flat&logo=Python&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=black)
![HTML5](https://img.shields.io/badge/-HTML5-E34C26?style=flat&logo=HTML5&logoColor=white)
```

#### GitHub統計
```markdown
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=あなたのユーザー名&layout=compact)
```

#### 訪問者カウンター
```markdown
![Visitor Count](https://komarev.com/ghpvc/?username=あなたのユーザー名)
```

### 5. 個人情報保護の注意点 ⚠️

#### 公開してはいけない情報
- ❌ 本名（公開したくない場合）
- ❌ 詳細な住所
- ❌ 電話番号
- ❌ 学校名・クラス（状況による）
- ❌ プライベートなメールアドレス

#### 安全な情報
- ✅ ニックネーム
- ✅ 興味のある分野
- ✅ 学習中の技術
- ✅ 作品やプロジェクト
- ✅ SNSアカウント（公開用）

### 6. サンプルテンプレート

#### シンプル版
```markdown
# Hi there 👋

I'm learning programming!

- 🌱 Currently learning: Python, HTML/CSS
- 🎯 Goal: Create my own web application
- ⚡ Fun fact: I love playing games!
```

#### 詳細版
```markdown
<div align="center">
  
# Welcome to My GitHub! 🌟
  
</div>

## About Me 👨‍💻
高校生プログラマーです。プログラミングの楽しさを日々発見中！

## Skills 🛠️
- **Languages**: Python, JavaScript, HTML/CSS
- **Tools**: Git, GitHub, VSCode
- **Learning**: React, Node.js

## Projects 🚀
- [My Portfolio Site](リンク) - 初めて作ったポートフォリオサイト
- [Python Game](リンク) - Pythonで作った簡単なゲーム

## GitHub Stats 📊
<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=あなたのユーザー名&show_icons=true&theme=radical" />
</div>

## Connect with Me 🤝
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/あなたのアカウント)
```

## 🎯 実践課題

### 課題1: プロフィールREADMEの作成
1. 自分のユーザー名と同じ名前のリポジトリを作成
2. 以下の要素を含むREADME.mdを作成
   - 自己紹介（2-3文）
   - 現在学習中の技術（3つ以上）
   - 興味のある分野
   - 絵文字を5つ以上使用

### 課題2: バッジの追加
1. スキルバッジを3つ以上追加
2. GitHub Statsを表示
3. 好きなカラーテーマを選択

### 課題3: 個性的な要素の追加
以下から1つ以上選んで追加：
- GIFアニメーション
- 好きな言葉や座右の銘
- 今年の目標
- お気に入りのプロジェクト紹介

## 💡 Tips & Tricks

### マークダウンの装飾技
```markdown
**太字** で強調
*斜体* でニュアンス
~~取り消し線~~ で修正
`コード` でハイライト
```

### センタリング
```markdown
<div align="center">
  中央寄せしたい内容
</div>
```

### 画像のサイズ調整
```markdown
<img src="画像URL" width="200" />
```

## 🚨 よくあるミス

1. **リポジトリ名の間違い**
   - ユーザー名と完全に一致させる（大文字小文字も）
   
2. **Privateリポジトリ**
   - 必ずPublicにする

3. **README.mdのファイル名**
   - 大文字で「README.md」にする

## 📝 チェックリスト

- [ ] ユーザー名と同じ名前のリポジトリを作成した
- [ ] リポジトリはPublicに設定した
- [ ] README.mdを作成・編集した
- [ ] 自己紹介を書いた
- [ ] 絵文字を使った
- [ ] 個人情報の確認をした
- [ ] プロフィールページで表示を確認した

## 🎉 まとめ

プロフィールREADMEは、あなたのGitHubの「顔」です。
定期的に更新して、成長の記録としても活用しましょう！

次回は、github.devを使った本格的な開発に挑戦します！