---
sidebar_position: 1
---

# Advanced 1: Google Apps Script入門 🚀

## 🎯 今日の目標

Google Apps Script（GAS）をGitHubで管理できるようになり、バージョン管理の恩恵を受けられるようになります！

## 📚 Google Apps Scriptとは？

Google Apps Script（GAS）は、Googleのサービスを自動化できるプログラミング環境です。

### GASでできること
- 📊 **スプレッドシートの自動化** - 成績集計、データ処理
- 📧 **Gmail連携** - 自動メール送信、フィルタリング
- 📅 **カレンダー連携** - イベント自動作成、リマインダー
- 📝 **フォーム連携** - 回答の自動処理、通知
- 🌐 **Webアプリ作成** - 簡単なWebサービス

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
# https://nodejs.org/ からダウンロード

# Macの場合（Homebrewを使用）
brew install node

# インストール確認
node --version
npm --version
```

### 3. claspのインストール
```bash
# claspをグローバルインストール
npm install -g @google/clasp

# インストール確認
clasp --version
```

## 📝 実践：初めてのGASプロジェクト

### Step 1: Google Apps Scriptプロジェクト作成

1. [Google Apps Script](https://script.google.com) にアクセス
2. 「新しいプロジェクト」をクリック
3. プロジェクト名を「My First GAS Project」に変更
4. 以下のコードを入力：

```javascript
// コード.gs
function myFunction() {
  console.log('Hello from Google Apps Script!');
  
  // スプレッドシートを作成
  const spreadsheet = SpreadsheetApp.create('GASで作ったスプレッドシート');
  const sheet = spreadsheet.getActiveSheet();
  
  // データを書き込み
  sheet.getRange('A1').setValue('こんにちは！');
  sheet.getRange('A2').setValue('GASから書き込みました');
  sheet.getRange('A3').setValue(new Date());
  
  // URLをログに出力
  console.log('スプレッドシートURL: ' + spreadsheet.getUrl());
}

// 毎日実行する関数の例
function dailyTask() {
  const today = new Date();
  const message = `今日は${today.getMonth() + 1}月${today.getDate()}日です`;
  
  // 自分にメールを送信
  GmailApp.sendEmail(
    Session.getActiveUser().getEmail(),
    '今日の日付',
    message
  );
}
```

5. 「保存」（Ctrl+S または Cmd+S）
6. 「実行」ボタンをクリック
7. 権限を承認（初回のみ）

### Step 2: claspでローカル環境と連携

#### 2-1. Google Apps Script APIを有効化
1. [Google Apps Script API設定](https://script.google.com/home/usersettings)
2. 「Google Apps Script API」をONに切り替え

#### 2-2. claspでログイン
```bash
# Googleアカウントでログイン
clasp login

# ブラウザが開いて認証画面が表示される
# 「許可」をクリック
```

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

2. 新しい関数を追加（`コード.js`を編集）
```javascript
// スプレッドシートに成績を記録する関数
function recordGrades() {
  const spreadsheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID');
  const sheet = spreadsheet.getSheetByName('成績');
  
  // ヘッダーを設定
  const headers = ['名前', '国語', '数学', '英語', '合計', '平均'];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // サンプルデータ
  const students = [
    ['田中太郎', 85, 90, 78],
    ['鈴木花子', 92, 88, 95],
    ['佐藤次郎', 78, 85, 82]
  ];
  
  // データを書き込み
  students.forEach((student, index) => {
    const row = index + 2;
    const total = student[1] + student[2] + student[3];
    const average = total / 3;
    
    sheet.getRange(row, 1, 1, 6).setValues([[
      student[0], student[1], student[2], student[3], 
      total, Math.round(average * 10) / 10
    ]]);
  });
  
  console.log('成績を記録しました');
}
```

3. GASにアップロード
```bash
# 変更をGASにプッシュ
clasp push

# ブラウザでGASエディタを開く
clasp open
```

4. GitHubにコミット
```bash
git add .
git commit -m "成績記録機能を追加"
git push
```

## 🎓 学校での活用例

### 1. 出欠管理システム
```javascript
function takeAttendance() {
  const form = FormApp.create('本日の出欠確認');
  
  // 質問を追加
  form.addTextItem()
    .setTitle('学籍番号')
    .setRequired(true);
    
  form.addMultipleChoiceItem()
    .setTitle('出欠')
    .setChoices([
      form.createChoice('出席'),
      form.createChoice('欠席'),
      form.createChoice('遅刻')
    ])
    .setRequired(true);
    
  // フォームのURLを取得
  console.log('出欠フォームURL: ' + form.getPublishedUrl());
}
```

### 2. 自動リマインダー
```javascript
function setReminder() {
  // 明日の予定をメールで通知
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const events = CalendarApp.getDefaultCalendar()
    .getEventsForDay(tomorrow);
    
  if (events.length > 0) {
    let message = '明日の予定：\n\n';
    events.forEach(event => {
      message += `・${event.getTitle()} (${event.getStartTime().toLocaleTimeString()})\n`;
    });
    
    GmailApp.sendEmail(
      Session.getActiveUser().getEmail(),
      '明日の予定リマインダー',
      message
    );
  }
}
```

## 💡 ベストプラクティス

### 1. 設定値は別ファイルに
```javascript
// config.js
const CONFIG = {
  SPREADSHEET_ID: 'YOUR_SPREADSHEET_ID',
  EMAIL_TO: 'teacher@school.edu',
  TIMEZONE: 'Asia/Tokyo'
};

// main.js
function main() {
  const spreadsheet = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
  // ...
}
```

### 2. エラーハンドリング
```javascript
function safeExecute() {
  try {
    // メイン処理
    processData();
  } catch (error) {
    console.error('エラーが発生しました:', error);
    // 管理者に通知
    GmailApp.sendEmail(
      'admin@example.com',
      'GASエラー通知',
      `エラー: ${error.message}\n\nスタックトレース: ${error.stack}`
    );
  }
}
```

### 3. 定期実行の設定
```javascript
// トリガーを設定する関数
function setTriggers() {
  // 既存のトリガーを削除
  ScriptApp.getProjectTriggers().forEach(trigger => {
    ScriptApp.deleteTrigger(trigger);
  });
  
  // 毎日朝9時に実行
  ScriptApp.newTrigger('dailyTask')
    .timeBased()
    .everyDays(1)
    .atHour(9)
    .create();
    
  // 毎週月曜日に実行
  ScriptApp.newTrigger('weeklyReport')
    .timeBased()
    .onWeekDay(ScriptApp.WeekDay.MONDAY)
    .atHour(8)
    .create();
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
- ✅ GASの基本的な使い方
- ✅ claspを使ったローカル開発環境の構築
- ✅ GitHubでのバージョン管理
- ✅ 実用的なスクリプトの作成

これで、学校業務の自動化をGitHubで管理できるようになりました！

---

:::tip 次のステップ
[Advanced 2 - GitHub Classroom講師体験](classroom-teacher.md)で、課題の作成と管理を学びましょう！
:::

:::note トラブル？
うまくいかない場合は[トラブルシューティング](../resources/troubleshooting.md)を確認してください。
:::