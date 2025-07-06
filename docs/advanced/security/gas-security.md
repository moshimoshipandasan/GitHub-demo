# Google Apps Script セキュリティベストプラクティス

## 🔒 はじめに

Google Apps Script（GAS）は強力なツールですが、学校で扱う生徒の個人情報を守るため、セキュリティには特に注意が必要です。このガイドでは、安全にGASを使用するための実践的な方法を解説します。

## 🎯 このガイドの対象者

- 学校でGASを使い始める先生
- 生徒の成績や個人情報を扱う管理者
- 校務の自動化を検討している方

## ⚠️ なぜセキュリティが重要なのか

学校では以下のような重要な情報を扱います：
- 生徒の氏名、住所、電話番号
- 成績、出欠記録
- 保護者の連絡先
- 健康情報

これらの情報が漏洩すると、生徒や保護者に大きな被害を与える可能性があります。

## 🛡️ 1. 実行権限の適切な設定方法

### スクリプトの実行権限レベル

GASには以下の実行権限レベルがあります：

#### 1. 自分のみ（最も安全）
```javascript
// 個人的な作業用スクリプト
function myPersonalScript() {
  // 自分のドライブ内のファイルのみアクセス
  const file = DriveApp.getFileById('自分のファイルID');
}
```

#### 2. 同じドメイン内のユーザー（学校内限定）
```javascript
// 学校内で共有するスクリプト
function schoolInternalScript() {
  // @school.ed.jp ドメインのユーザーのみ実行可能
  const userEmail = Session.getActiveUser().getEmail();
  if (!userEmail.endsWith('@school.ed.jp')) {
    throw new Error('学校関係者のみ使用できます');
  }
}
```

#### 3. 誰でも実行可能（要注意！）
```javascript
// 公開フォームなど（個人情報は扱わない）
function publicFormHandler(e) {
  // 匿名アクセスを想定した処理
  // 個人情報は絶対に含めない
}
```

### 権限設定のベストプラクティス

1. **最小権限の原則**
   ```javascript
   // 良い例：必要最小限の権限
   function readOnlyReport() {
     const sheet = SpreadsheetApp.openById('ID').getSheets()[0];
     const data = sheet.getDataRange().getValues();
     // 読み取りのみ、書き込みはしない
   }
   ```

2. **実行者の確認**
   ```javascript
   function secureFunction() {
     const email = Session.getActiveUser().getEmail();
     const allowedUsers = [
       'principal@school.ed.jp',
       'admin@school.ed.jp'
     ];
     
     if (!allowedUsers.includes(email)) {
       throw new Error('アクセス権限がありません');
     }
     
     // 権限確認後の処理
   }
   ```

## 🔑 2. APIキーの安全な管理

### してはいけないこと ❌

```javascript
// 危険：APIキーをコードに直接記述
function badExample() {
  const API_KEY = 'abc123xyz789'; // 絶対にダメ！
  // ...
}
```

### 安全な管理方法 ✅

#### 方法1: スクリプトプロパティを使用
```javascript
// 1. スクリプトエディタで設定
// ファイル → プロジェクトのプロパティ → スクリプトプロパティ

// 2. コードでの使用
function goodExample() {
  const scriptProperties = PropertiesService.getScriptProperties();
  const apiKey = scriptProperties.getProperty('API_KEY');
  
  if (!apiKey) {
    throw new Error('APIキーが設定されていません');
  }
  
  // APIキーを使用した処理
}
```

#### 方法2: 環境別の設定
```javascript
function getConfig() {
  const env = getEnvironment(); // 'development' or 'production'
  
  const configs = {
    development: {
      spreadsheetId: 'テスト用スプレッドシートID',
      folderName: 'テストフォルダ'
    },
    production: {
      spreadsheetId: '本番用スプレッドシートID',
      folderName: '本番フォルダ'
    }
  };
  
  return configs[env];
}
```

## 👥 3. 生徒データの取り扱い注意点

### 個人情報の定義

学校で特に注意すべき個人情報：
- 氏名、生年月日、住所
- 保護者の連絡先
- 成績、評価
- 健康情報、アレルギー情報
- 写真、動画

### データ取り扱いの原則

#### 1. データの最小化
```javascript
// 良い例：必要な情報のみ取得
function getStudentListForAttendance() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getRange('A2:C').getValues(); // 学年、クラス、氏名のみ
  
  return data.map(row => ({
    grade: row[0],
    class: row[1],
    name: row[2]
    // 住所や電話番号は含めない
  }));
}
```

#### 2. データの匿名化
```javascript
// 統計処理では個人を特定できないようにする
function getGradeStatistics() {
  const scores = getScores(); // 点数のみ取得
  
  return {
    average: calculateAverage(scores),
    median: calculateMedian(scores),
    // 個人名は含めない
  };
}
```

#### 3. ログの管理
```javascript
// セキュアなログ記録
function secureLog(action, userId) {
  const logSheet = SpreadsheetApp.openById('ログ専用シートID');
  const timestamp = new Date();
  
  // 個人情報は記録しない
  logSheet.appendRow([
    timestamp,
    userId, // IDのみ、氏名は記録しない
    action,
    Session.getActiveUser().getEmail()
  ]);
}
```

### データ保存のベストプラクティス

#### 1. アクセス制限
```javascript
function protectSensitiveData() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const protection = sheet.protect();
  
  // 編集権限を制限
  protection.setDescription('生徒個人情報保護');
  protection.removeEditors(protection.getEditors());
  protection.addEditors(['admin@school.ed.jp']);
}
```

#### 2. データの暗号化（簡易版）
```javascript
// 重要：これは簡易的な例です。実際の個人情報には
// より強力な暗号化が必要です
function simpleObfuscate(text) {
  // Base64エンコード（本格的な暗号化ではありません）
  return Utilities.base64Encode(text);
}

function simpleDeobfuscate(encoded) {
  return Utilities.newBlob(Utilities.base64Decode(encoded)).getDataAsString();
}
```

## 📁 4. 共有設定のベストプラクティス

### ファイル共有の基本原則

#### 1. 共有範囲の制限
```javascript
function setFileSharing(fileId, emails) {
  const file = DriveApp.getFileById(fileId);
  
  // 既存の共有を削除
  const editors = file.getEditors();
  editors.forEach(editor => file.removeEditor(editor));
  
  // 特定のユーザーのみに共有
  emails.forEach(email => {
    file.addEditor(email);
  });
  
  // リンクを知っている人のアクセスを無効化
  file.setSharing(DriveApp.Access.PRIVATE, DriveApp.Permission.NONE);
}
```

#### 2. フォルダ構造での管理
```javascript
function createSecureFolderStructure() {
  const rootFolder = DriveApp.getRootFolder();
  
  // 階層的なフォルダ構造
  const schoolFolder = rootFolder.createFolder('○○学校');
  const year2025 = schoolFolder.createFolder('2025年度');
  const gradesFolder = year2025.createFolder('学年別');
  const adminFolder = year2025.createFolder('管理者専用');
  
  // 管理者専用フォルダのアクセス制限
  adminFolder.addEditor('principal@school.ed.jp');
  adminFolder.setSharing(DriveApp.Access.PRIVATE, DriveApp.Permission.NONE);
}
```

### スプレッドシートの共有設定

#### 1. シート単位の保護
```javascript
function protectGradeSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = ss.getSheets();
  
  sheets.forEach(sheet => {
    if (sheet.getName().includes('成績')) {
      const protection = sheet.protect();
      protection.setDescription('成績データ保護');
      
      // 特定のセル範囲のみ編集可能
      const unprotected = sheet.getRange('A1:A10');
      protection.setUnprotectedRanges([unprotected]);
    }
  });
}
```

#### 2. 期限付き共有
```javascript
function temporaryShare(fileId, email, days) {
  const file = DriveApp.getFileById(fileId);
  file.addEditor(email);
  
  // 指定日数後に共有を削除するトリガーを設定
  const triggerDate = new Date();
  triggerDate.setDate(triggerDate.getDate() + days);
  
  ScriptApp.newTrigger('removeShare')
    .timeBased()
    .at(triggerDate)
    .create();
  
  // プロパティに情報を保存
  const props = PropertiesService.getScriptProperties();
  props.setProperty('tempShare_' + email, fileId);
}

function removeShare() {
  const props = PropertiesService.getScriptProperties();
  const allProps = props.getProperties();
  
  Object.keys(allProps).forEach(key => {
    if (key.startsWith('tempShare_')) {
      const email = key.replace('tempShare_', '');
      const fileId = allProps[key];
      
      try {
        const file = DriveApp.getFileById(fileId);
        file.removeEditor(email);
        props.deleteProperty(key);
      } catch (e) {
        console.error('共有削除エラー:', e);
      }
    }
  });
}
```

## 🚨 5. セキュリティチェックリスト

### 開発前のチェック
- [ ] 扱うデータに個人情報が含まれるか確認
- [ ] 必要最小限の権限で実装可能か検討
- [ ] テスト環境と本番環境を分離

### 開発中のチェック
- [ ] APIキーやパスワードをハードコーディングしていない
- [ ] エラーメッセージに個人情報を含めていない
- [ ] ログに個人情報を記録していない

### リリース前のチェック
- [ ] 共有設定が適切か確認
- [ ] テストデータを削除
- [ ] 不要な権限を削除

### 運用中のチェック
- [ ] 定期的なアクセスログの確認
- [ ] 退職者のアクセス権限削除
- [ ] 年度更新時の権限見直し

## 📚 6. トラブルシューティング

### よくある問題と対策

#### 問題1: 権限エラーが発生する
```javascript
// エラーハンドリングの実装
function safeExecution() {
  try {
    // メイン処理
    processStudentData();
  } catch (error) {
    if (error.message.includes('権限がありません')) {
      // 管理者に通知
      notifyAdmin('権限エラーが発生しました', error);
    } else {
      // その他のエラー
      console.error('処理エラー:', error);
    }
  }
}
```

#### 問題2: 大量データでタイムアウト
```javascript
// バッチ処理の実装
function processBatchData() {
  const props = PropertiesService.getScriptProperties();
  let startRow = parseInt(props.getProperty('lastProcessedRow') || '2');
  const batchSize = 100;
  
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getRange(startRow, 1, batchSize, 5).getValues();
  
  // バッチ処理
  data.forEach((row, index) => {
    if (row[0]) { // 空行チェック
      processRow(row);
    }
  });
  
  // 進捗を保存
  props.setProperty('lastProcessedRow', startRow + batchSize);
}
```

## 🎯 まとめ

### 覚えておくべき3つの原則

1. **最小権限の原則**
   - 必要最小限の権限のみ付与
   - 定期的な権限の見直し

2. **データ最小化の原則**
   - 必要な情報のみ取得・保存
   - 不要になったデータは削除

3. **透明性の原則**
   - 何のデータをどう使うか明確に
   - ログを適切に記録

### 困ったときは

- Google Workspace管理者に相談
- [Google Apps Script公式ドキュメント](https://developers.google.com/apps-script)
- 教育委員会のICT担当者

セキュリティは「面倒」ではなく「生徒を守るため」です。
一緒に安全な学校ICT環境を作っていきましょう！