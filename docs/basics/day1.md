---
sidebar_position: 1
---

# Day 1: GitHubデビュー 🚀

## 今日のゴール

**30分後、あなたのWebサイトが世界中から見られるようになります！**

## 📋 今日やること

1. GitHubアカウントを作る（5分）
2. 最初のリポジトリを作る（5分）
3. HTMLファイルを作る（10分）
4. GitHub Pagesで公開する（5分）
5. 友達に見せて自慢する（5分）

## 1️⃣ GitHubアカウント作成

### 手順

1. [GitHub.com](https://github.com) にアクセス
2. 右上の「Sign up」をクリック
3. 必要事項を入力：
   - **Username**（ユーザー名）: 半角英数字で好きな名前
   - **Email**（メールアドレス）: 受信できるもの
   - **Password**（パスワード）: 15文字以上または8文字以上で数字と小文字を含む

:::tip ユーザー名の決め方
- 短くて覚えやすい
- 本名でもニックネームでもOK
- 後で変更も可能（でも大変）
- 例: tanaka-taro, game-lover, code-ninja
:::

4. 認証パズルを解く
5. メールで届いた認証コードを入力
6. アンケートに答える（スキップもOK）

**🎉 おめでとう！GitHubデビュー完了！**

## 2️⃣ 最初のリポジトリ作成

### リポジトリって何？
プロジェクトを保存する「フォルダ」のようなもの。でもただのフォルダじゃない！
- 変更履歴が全部残る
- いつでも過去に戻れる
- 世界中の人と共有できる

### 作成手順

1. 右上の「+」ボタン → 「New repository」
2. 設定を入力：
   - **Repository name**: `my-first-website`
   - **Description**: 「初めて作ったWebサイトです！」
   - **Public**を選択（みんなに見せよう！）
   - ✅ **Add a README file**にチェック

3. 「Create repository」をクリック

## 3️⃣ HTMLファイルを作成

### index.htmlを作ろう

1. リポジトリページで「Add file」→「Create new file」
2. ファイル名: `index.html`
3. 以下のコードをコピペ（自分の情報に変えてね！）：

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>私の最初のWebサイト</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f0f0f0;
        }
        .container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            text-align: center;
        }
        .profile {
            text-align: center;
            margin: 20px 0;
        }
        .hobby-list {
            background-color: #f8f8f8;
            padding: 20px;
            border-radius: 5px;
        }
        .hobby-list li {
            margin: 10px 0;
        }
        .github-link {
            text-align: center;
            margin-top: 30px;
        }
        a {
            color: #0366d6;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>ようこそ！私のWebサイトへ 🎉</h1>
        
        <div class="profile">
            <h2>自己紹介</h2>
            <p>こんにちは！私は<strong>[あなたの名前]</strong>です。</p>
            <p>GitHubで初めてWebサイトを作りました！</p>
        </div>

        <div class="hobby-list">
            <h3>好きなこと・趣味</h3>
            <ul>
                <li>🎮 ゲーム（特に[好きなゲーム名]）</li>
                <li>📚 読書（[好きなジャンル]が好き）</li>
                <li>🎵 音楽を聴くこと</li>
                <li>💻 プログラミング（今日から！）</li>
            </ul>
        </div>

        <div class="hobby-list">
            <h3>これから挑戦したいこと</h3>
            <ul>
                <li>かっこいいWebサイトを作る</li>
                <li>ゲームを作ってみる</li>
                <li>アプリ開発</li>
            </ul>
        </div>

        <div class="github-link">
            <p>GitHubで作成: <a href="https://github.com/[あなたのユーザー名]">[あなたのユーザー名]</a></p>
            <p>作成日: <span id="date"></span></p>
        </div>
    </div>

    <script>
        // 今日の日付を表示
        document.getElementById('date').textContent = new Date().toLocaleDateString('ja-JP');
    </script>
</body>
</html>
```

4. ページ下部の「Commit new file」をクリック

:::note カスタマイズのヒント
- `[あなたの名前]`を自分の名前に変更
- `[好きなゲーム名]`や`[好きなジャンル]`も変更
- 色を変えたい場合は`color:`の値を変更
- 絵文字を追加してもOK！
:::

## 4️⃣ GitHub Pagesで公開

### 世界に公開する手順

1. リポジトリの「Settings」タブをクリック
2. 左メニューを下にスクロールして「Pages」をクリック
3. 「Source」で「Deploy from a branch」を選択
4. 「Branch」で「main」を選択、「/ (root)」のまま
5. 「Save」をクリック

### 公開を確認

1. 1〜2分待つ（コーヒーでも飲もう☕）
2. ページを更新
3. 上部に緑色のチェックマークと共にURLが表示される：
   ```
   Your site is live at https://[あなたのユーザー名].github.io/my-first-website/
   ```
4. URLをクリックして確認！

## 5️⃣ 完成！みんなに見せよう

### できたこと
- ✅ GitHubアカウントを作った
- ✅ リポジトリを作った
- ✅ HTMLファイルを作った
- ✅ 世界中から見られるWebサイトを公開した

### シェアしよう
- URLを友達に送る
- SNSで共有する
- 家族に見せる
- QRコードを作って配る

## 🎊 今日のまとめ

たった30分で：
1. GitHubアカウントを作成
2. 自分のWebサイトを作成
3. 世界中に公開

これがGitHubの力！明日はもっとかっこよくしていきます！

## 📝 宿題（やりたい人だけ）

1. index.htmlをもっとカスタマイズしてみる
2. 背景色を変える
3. 好きな画像を追加する
4. 友達のサイトを見に行く

---

:::tip 困ったときは
[トラブルシューティング](../resources/troubleshooting.md)を確認！
:::

**次回予告**: [Day 2 - GitHub基本操作マスター](day2.md)でファイル管理のプロになろう！