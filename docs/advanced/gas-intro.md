---
sidebar_position: 1
---

# Advanced 1: Google Apps Script入門 🚀

## 🎯 今日の目標

Google Apps Script（GAS）をGitHubで管理できるようになり、バージョン管理の恩恵を受けられるようになります！

## 📚 Google Apps Scriptとは？

Google Apps Script（GAS）は、Googleのサービスを自動化できるプログラミング環境です。

### GASでできること
- **メール送信** - 自動メール送信、HTMLメール作成
- **Webアプリ作成** - 簡単なWebサービス、ゲーム
- **自動化処理** - 定期実行、データ処理
- **API連携** - 外部サービスとの連携

### なぜGitHubで管理するの？
- ✅ **バージョン管理** - 変更履歴を追跡
- ✅ **バックアップ** - コードの消失を防ぐ
- ✅ **共同作業** - チームでの開発が容易
- ✅ **コードレビュー** - 品質向上

## 🛠️ 事前準備

### 1. Googleアカウント
- Gmailアドレスがあれば大丈夫！

### 2. Node.jsのインストール
```bash
# Windowsの場合
# https://nodejs.org/ からLTS版をダウンロード

# Macの場合（Homebrewを使用）
brew install node

# インストール確認
node --version  # v18.0.0以上推奨
npm --version   # v9.0.0以上推奨
```

### 3. claspのインストール
```bash
# claspをグローバルインストール
npm install -g @google/clasp

# インストール確認
clasp --version
```

:::tip 開発環境別の詳細設定
VSCode、GitHub Codespaces、Cursorなど、各開発環境での詳しい設定方法は[claspガイド](./clasp-guide.md)をご覧ください。
:::

## 📝 実践：2つの簡単なプロジェクト

### プロジェクト1: HTMLメールを送信しよう！

#### Step 1: Google Apps Scriptプロジェクト作成

1. [Google Apps Script](https://script.google.com) にアクセス
2. 「新しいプロジェクト」をクリック
3. プロジェクト名を「HTML Mail Sender」に変更
4. 以下のコードを入力：

```javascript
// コード.gs
function sendBeautifulEmail() {
  const recipient = Session.getActiveUser().getEmail();
  const subject = "🎉 GASから送信したHTMLメール！";
  
  // HTMLメールの内容
  const htmlBody = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            padding: 20px;
          }
          .container {
            background-color: white;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin: 0 auto;
          }
          h1 {
            color: #4285f4;
            text-align: center;
          }
          .button {
            display: inline-block;
            padding: 12px 24px;
            background-color: #4285f4;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            margin: 20px auto;
            display: block;
            width: 200px;
            text-align: center;
          }
          .footer {
            text-align: center;
            color: #666;
            margin-top: 30px;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>こんにちは！</h1>
          <p>これは<strong>Google Apps Script</strong>から送信されたHTMLメールです。</p>
          <p>きれいなデザインのメールを簡単に送ることができます！</p>
          <a href="https://github.com" class="button">GitHubを見る</a>
          <div class="footer">
            <p>送信日時: ${new Date().toLocaleString('ja-JP')}</p>
            <p>Powered by Google Apps Script</p>
          </div>
        </div>
      </body>
    </html>
  `;
  
  // メールを送信
  GmailApp.sendEmail(recipient, subject, "HTMLメールです", {
    htmlBody: htmlBody
  });
  
  console.log(`メールを送信しました: ${recipient}`);
}

// テスト用の簡単なメール
function sendSimpleEmail() {
  const email = Session.getActiveUser().getEmail();
  GmailApp.sendEmail(
    email,
    "テストメール",
    "これはGASから送信したテストメールです！\n\n送信成功！"
  );
}
```

5. 「保存」（Ctrl+S または Cmd+S）
6. `sendBeautifulEmail`関数を選択して「実行」ボタンをクリック
7. 権限を承認（初回のみ）
8. メールが届いたか確認しよう！

### プロジェクト2: シンプルなオセロゲームを作ろう！

#### オセロゲームのWebアプリ作成

1. 新しいプロジェクトを作成（プロジェクト名: "Othello Game"）
2. 以下の2つのファイルを作成：

**コード.gs:**
```javascript
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('オセロゲーム')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
```

**index.html:** (新規作成: ファイル → 新規作成 → HTML)
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      background-color: #2c3e50;
    }
    .game-container {
      text-align: center;
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }
    h1 {
      color: #27ae60;
      margin-bottom: 20px;
    }
    .board {
      display: inline-block;
      background-color: #27ae60;
      padding: 10px;
      border-radius: 5px;
    }
    .row {
      display: flex;
    }
    .cell {
      width: 50px;
      height: 50px;
      background-color: #27ae60;
      border: 1px solid #229954;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.3s;
    }
    .cell:hover {
      background-color: #229954;
    }
    .piece {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      transition: all 0.3s;
    }
    .black {
      background-color: #2c3e50;
    }
    .white {
      background-color: #ecf0f1;
      border: 2px solid #bdc3c7;
    }
    .info {
      margin-top: 20px;
      font-size: 18px;
    }
    .reset-btn {
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 16px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    .reset-btn:hover {
      background-color: #2980b9;
    }
  </style>
</head>
<body>
  <div class="game-container">
    <h1>🎮 シンプルオセロ</h1>
    <div class="board" id="board"></div>
    <div class="info">
      <p>現在のターン: <span id="current-player">⚫ 黒</span></p>
      <p>黒: <span id="black-count">2</span> | 白: <span id="white-count">2</span></p>
    </div>
    <button class="reset-btn" onclick="initGame()">ゲームをリセット</button>
  </div>
  
  <script>
    let board = [];
    let currentPlayer = 'black';
    const BOARD_SIZE = 8;
    
    function initGame() {
      board = Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(null));
      // 初期配置
      board[3][3] = 'white';
      board[3][4] = 'black';
      board[4][3] = 'black';
      board[4][4] = 'white';
      currentPlayer = 'black';
      renderBoard();
      updateInfo();
    }
    
    function renderBoard() {
      const boardElement = document.getElementById('board');
      boardElement.innerHTML = '';
      
      for (let i = 0; i < BOARD_SIZE; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        
        for (let j = 0; j < BOARD_SIZE; j++) {
          const cell = document.createElement('div');
          cell.className = 'cell';
          cell.onclick = () => placePiece(i, j);
          
          if (board[i][j]) {
            const piece = document.createElement('div');
            piece.className = `piece ${board[i][j]}`;
            cell.appendChild(piece);
          }
          
          row.appendChild(cell);
        }
        boardElement.appendChild(row);
      }
    }
    
    function placePiece(row, col) {
      if (board[row][col]) return;
      
      const flipped = getFlippedPieces(row, col, currentPlayer);
      if (flipped.length === 0) return;
      
      board[row][col] = currentPlayer;
      flipped.forEach(([r, c]) => {
        board[r][c] = currentPlayer;
      });
      
      currentPlayer = currentPlayer === 'black' ? 'white' : 'black';
      renderBoard();
      updateInfo();
    }
    
    function getFlippedPieces(row, col, player) {
      const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],           [0, 1],
        [1, -1],  [1, 0],  [1, 1]
      ];
      
      const flipped = [];
      const opponent = player === 'black' ? 'white' : 'black';
      
      for (const [dx, dy] of directions) {
        const temp = [];
        let x = row + dx;
        let y = col + dy;
        
        while (x >= 0 && x < BOARD_SIZE && y >= 0 && y < BOARD_SIZE && board[x][y] === opponent) {
          temp.push([x, y]);
          x += dx;
          y += dy;
        }
        
        if (x >= 0 && x < BOARD_SIZE && y >= 0 && y < BOARD_SIZE && board[x][y] === player && temp.length > 0) {
          flipped.push(...temp);
        }
      }
      
      return flipped;
    }
    
    function updateInfo() {
      let blackCount = 0;
      let whiteCount = 0;
      
      for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
          if (board[i][j] === 'black') blackCount++;
          else if (board[i][j] === 'white') whiteCount++;
        }
      }
      
      document.getElementById('black-count').textContent = blackCount;
      document.getElementById('white-count').textContent = whiteCount;
      document.getElementById('current-player').textContent = 
        currentPlayer === 'black' ? '⚫ 黒' : '⚪ 白';
    }
    
    // ゲーム開始
    initGame();
  </script>
</body>
</html>
```

3. ファイルを保存
4. デプロイ → 新しいデプロイ
5. 種類: 「ウェブアプリ」を選択
6. 説明: 「オセロゲーム v1」
7. 実行者: 「自分」
8. アクセス権: 「全員」
9. 「デプロイ」をクリック
10. 表示されたURLにアクセスして遊んでみよう！

### Step 2: claspでローカル環境と連携

#### 2-1. Google Apps Script APIを有効化
1. [Google Apps Script API設定](https://script.google.com/home/usersettings)
2. 「Google Apps Script API」をONに切り替え

:::warning 重要
この設定を忘れると、claspでエラーが発生します。必ずONにしてください。
:::

#### 2-2. claspでログイン
```bash
# Googleアカウントでログイン
clasp login

# ブラウザが開いて認証画面が表示される
# 「許可」をクリック
```

:::tip リモート環境でのログイン
GitHub Codespacesや SSH接続の場合：
```bash
clasp login --no-localhost
```
:::

#### 2-3. プロジェクトをクローン
1. GASエディタでプロジェクトIDを確認
   - 「プロジェクトの設定」→「スクリプト ID」をコピー

2. ローカルにクローン
```bash
# プロジェクト用フォルダを作成
mkdir my-gas-project
cd my-gas-project

# GASプロジェクトをクローン
clasp clone [スクリプトID]
```

### Step 3: GitHubリポジトリの作成

1. GitHubで新しいリポジトリ作成
   - リポジトリ名: `my-gas-project`
   - Public/Privateどちらでも可
   - READMEは追加しない

2. ローカルでGit初期化
```bash
# Git初期化
git init

# .gitignoreを作成
echo "node_modules/" > .gitignore
echo ".clasp.json" >> .gitignore

# ファイルを追加
git add .
git commit -m "初めてのGASプロジェクト"

# GitHubリポジトリと連携
git remote add origin https://github.com/[あなたのユーザー名]/my-gas-project.git
git branch -M main
git push -u origin main
```

### Step 4: ローカルで編集してデプロイ

1. VSCodeでプロジェクトを開く
```bash
code .
```

2. 編集した内容をGASにアップロード
```bash
# 変更をGASにプッシュ
clasp push

# ブラウザでGASエディタを開く
clasp open
```

:::info ターミナルからの実行
これらのコマンドは、どのエディタのターミナルからでも実行できます：
- VSCode: 統合ターミナル (Cmd/Ctrl + `)
- Cursor: 統合ターミナル
- GitHub Codespaces: ブラウザ内ターミナル
:::

3. GitHubにコミット
```bash
git add .
git commit -m "HTMLメール送信機能を追加"
git push
```

## 🎯 練習問題

### 練習1: カスタムメールを送ってみよう
上記のHTMLメール送信コードを改造して：
- 自分の好きな色に変更
- 画像を追加（`<img src="URL">`）
- ボタンのリンク先を変更

### 練習2: オセロゲームを改良しよう
- 背景色やピースの色を変更
- 勝敗判定を追加
- サウンドエフェクトを追加（HTML5 Audio）
- スコアの保存機能

## 💡 開発のコツ

### 1. デバッグ方法
```javascript
// console.logを活用
function debug() {
  console.log('処理開始');
  const data = getData();
  console.log('取得したデータ:', data);
}
```

### 2. 実行時間の計測
```javascript
function measureTime() {
  const start = new Date();
  
  // 処理
  heavyProcess();
  
  const end = new Date();
  console.log(`実行時間: ${end - start}ms`);
}
```

## 🚨 注意事項

1. **APIの実行制限**
   - 1日あたりの実行時間: 6時間
   - 同時実行数: 30
   - メール送信数: 100通/日（一般ユーザー）

2. **セキュリティ**
   - 個人情報は慎重に扱う
   - APIキーやパスワードはコードに直接書かない
   - 適切な権限設定を行う

3. **バージョン管理**
   - `.clasp.json`はGitHubにプッシュしない（スクリプトIDが含まれる）
   - 機密情報は環境変数やプロパティサービスを使用

## 📚 さらに学ぶには

1. **公式ドキュメント**
   - [Google Apps Script公式](https://developers.google.com/apps-script)
   - [clasp公式](https://github.com/google/clasp)

2. **実践的なプロジェクト**
   - 定期レポート生成
   - フォーム回答の自動集計
   - Slackとの連携

3. **コミュニティ**
   - Stack Overflow
   - Google Apps Scriptコミュニティ

## 🎊 まとめ

今日学んだこと：
- ✅ HTMLメールの送信方法を学んだ
- ✅ Webアプリ（オセロゲーム）の作成方法を学んだ
- ✅ claspを使ったローカル開発環境の構築
- ✅ GitHubでのバージョン管理
- ✅ ターミナルからのGAS操作

これで、GASで楽しいプロジェクトを作成し、お気に入りのエディタとGitHubで管理できるようになりました！

### 🚀 次のステップ

より高度な開発を目指す方は：
- [claspを使ったGAS開発環境構築ガイド](./clasp-guide.md)で詳細な設定方法を学ぶ
- TypeScriptでの開発に挑戦
- CI/CDパイプラインの構築

---

:::tip 次のステップ
[Advanced 2 - GitHub Classroom講師体験](classroom-teacher.md)で、課題の作成と管理を学びましょう！
:::

:::note トラブル？
うまくいかない場合は[トラブルシューティング](../resources/troubleshooting.md)を確認してください。
:::