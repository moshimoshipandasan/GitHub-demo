---
sidebar_position: 2
---

# Day 2: GitHub基本操作マスター 📝

## 今日のゴール

**ファイル管理のプロになって、構造化されたWebサイトを作る！**

## 📋 今日やること

1. README.mdでマークダウンを学ぶ（10分）
2. CSSファイルを追加してデザイン改善（10分）
3. JavaScriptファイルで動きを追加（5分）
4. フォルダ構造を整理（3分）
5. コミット履歴を確認（2分）

## 1️⃣ README.mdでマークダウン学習

### マークダウンって何？
HTMLより簡単に文書を書ける記法。GitHubでよく使います！

### README.mdを編集

1. リポジトリのトップページで`README.md`をクリック
2. 鉛筆アイコン（Edit）をクリック
3. 以下の内容に書き換え：

```markdown
# 🌟 My First Website

## 概要
GitHubで作った初めてのWebサイトです！
HTML、CSS、JavaScriptを使って、どんどん改良していきます。

## 🔗 サイトURL
`https://[あなたのユーザー名].github.io/my-first-website/`

## 📁 ファイル構成
- `index.html` - メインページ
- `style.css` - デザイン（これから追加）
- `script.js` - 動き（これから追加）

## 🚀 使用技術
- HTML5
- CSS3
- JavaScript
- GitHub Pages

## 📝 更新履歴
- 2025/07/06 - サイト公開
- 2025/07/06 - README作成

## 👤 作者
- 名前: [あなたの名前]
- GitHub: [@[あなたのユーザー名]](https://github.com/[あなたのユーザー名])

---
⭐ このプロジェクトが気に入ったら、スターをお願いします！
```

### マークダウンの基本記法

| 記法 | 表示 | 使い方 |
|------|------|--------|
| `# 見出し1` | # 見出し1 | 大見出し |
| `## 見出し2` | ## 見出し2 | 中見出し |
| `**太字**` | **太字** | 強調 |
| `*斜体*` | *斜体* | やや強調 |
| `- リスト` | - リスト | 箇条書き |
| `[リンク](URL)` | [リンク](URL) | リンク |
| `` `コード` `` | `コード` | インラインコード |

## 2️⃣ CSSファイルを追加

### style.cssを作成

1. 「Add file」→「Create new file」
2. ファイル名: `style.css`
3. 以下のコードを入力：

```css
/* リセットCSS */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* 基本スタイル */
body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
}

/* コンテナ */
.container {
    max-width: 800px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.95);
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    animation: fadeIn 1s ease-in;
}

/* アニメーション */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* 見出し */
h1 {
    color: #764ba2;
    text-align: center;
    margin-bottom: 30px;
    font-size: 2.5em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
    color: #667eea;
    margin: 20px 0 15px;
    border-bottom: 2px solid #667eea;
    padding-bottom: 5px;
}

/* プロフィール */
.profile {
    text-align: center;
    margin: 30px 0;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 10px;
}

/* リスト */
.hobby-list {
    background-color: #f0f4f8;
    padding: 25px;
    border-radius: 10px;
    margin: 20px 0;
}

.hobby-list ul {
    list-style: none;
}

.hobby-list li {
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;
    transition: transform 0.3s ease;
}

.hobby-list li:hover {
    transform: translateX(10px);
    color: #667eea;
}

.hobby-list li:last-child {
    border-bottom: none;
}

/* リンク */
a {
    color: #667eea;
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: #764ba2;
    text-decoration: underline;
}

/* フッター */
.github-link {
    text-align: center;
    margin-top: 40px;
    padding-top: 20px;
    border-top: 1px solid #e0e0e0;
}

/* ボタン */
.btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #667eea;
    color: white;
    border-radius: 25px;
    transition: all 0.3s ease;
    margin: 10px;
}

.btn:hover {
    background-color: #764ba2;
    transform: scale(1.05);
    text-decoration: none;
}
```

### index.htmlを更新

1. `index.html`を開いて編集
2. `<head>`タグ内の`<style>`タグを削除
3. 代わりに以下を追加：

```html
<link rel="stylesheet" href="style.css">
```

## 3️⃣ JavaScriptファイルを追加

### script.jsを作成

1. 「Add file」→「Create new file」
2. ファイル名: `script.js`
3. 以下のコードを入力：

```javascript
// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', function() {
    // 現在の日付を表示
    const dateElement = document.getElementById('date');
    if (dateElement) {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = now.toLocaleDateString('ja-JP', options);
    }

    // 訪問回数をカウント
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem('visitCount', visitCount);
    
    // 訪問回数を表示
    const visitElement = document.createElement('p');
    visitElement.textContent = `あなたの訪問回数: ${visitCount}回`;
    visitElement.style.textAlign = 'center';
    visitElement.style.color = '#667eea';
    visitElement.style.marginTop = '20px';
    
    const container = document.querySelector('.container');
    if (container) {
        container.appendChild(visitElement);
    }

    // ランダムメッセージ
    const messages = [
        "今日もいい一日を！ 😊",
        "プログラミングは楽しい！ 💻",
        "GitHubマスターへの道！ 🚀",
        "コードを書こう！ ⌨️",
        "創造力は無限大！ ✨"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const messageElement = document.createElement('div');
    messageElement.textContent = randomMessage;
    messageElement.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #667eea;
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        animation: slideIn 0.5s ease-out;
    `;
    
    // アニメーションを追加
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(messageElement);
    
    // 5秒後にメッセージを消す
    setTimeout(() => {
        messageElement.style.opacity = '0';
        messageElement.style.transform = 'translateX(100%)';
        messageElement.style.transition = 'all 0.5s ease-in';
        setTimeout(() => messageElement.remove(), 500);
    }, 5000);
});

// コンソールにメッセージ
console.log('🎉 Welcome to My First Website! 🎉');
console.log('このサイトはGitHubで作られています。');
console.log('開発者ツールを開いてくれてありがとう！');
```

### index.htmlにJavaScriptを追加

1. `index.html`の`</body>`タグの直前に追加：

```html
<script src="script.js"></script>
```

## 4️⃣ フォルダ構造を整理

現在のファイル構成：
```
my-first-website/
├── README.md
├── index.html
├── style.css
└── script.js
```

### 画像フォルダを作る（オプション）

もし画像を使いたい場合：
1. 「Create new file」
2. ファイル名: `images/.gitkeep`（フォルダを作るテクニック）
3. 空のままコミット

## 5️⃣ コミット履歴を確認

### 履歴の見方

1. リポジトリのトップページ
2. 「◯ commits」をクリック（◯は数字）
3. 各コミットの内容を確認できる

### 良いコミットメッセージの例
- ✅ `Add CSS file for styling`
- ✅ `Update README with project information`
- ✅ `Add JavaScript for interactive features`
- ❌ `更新`（何を更新したか不明）
- ❌ `aaa`（意味不明）

## 🎊 今日の成果

- ✅ マークダウンでREADMEを作成
- ✅ CSSファイルでデザイン改善
- ✅ JavaScriptで動きを追加
- ✅ ファイル構造を整理
- ✅ コミット履歴の確認方法を学習

## 💡 レベルアップのヒント

1. **CSSを編集してオリジナルデザインに**
   - 色を変える（`color`や`background-color`）
   - フォントを変える
   - アニメーションを追加

2. **JavaScriptで機能追加**
   - 現在時刻を表示
   - ダークモード切り替え
   - クリックイベント

3. **画像を追加**
   - プロフィール写真
   - 背景画像
   - アイコン

## 📝 宿題（チャレンジ）

1. 好きな色にデザインを変更
2. 新しいページ（about.html）を作成
3. JavaScriptで時計を表示

---

:::tip 次回予告
[Day 3 - プロフィールREADMEで自己表現](day3.md)で、GitHubプロフィールをかっこよくしよう！
:::

**質問があれば**: [トラブルシューティング](../resources/troubleshooting.md)をチェック！