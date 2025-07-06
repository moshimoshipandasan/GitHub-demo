# Google Apps Script サンプル集

このディレクトリには、学校業務を効率化するためのGoogle Apps Scriptサンプルが含まれています。

## 📁 ファイル一覧

### attendance-system.js
出欠管理システムのサンプルコードです。
- 毎日の出欠フォーム自動作成
- 出欠データのスプレッドシート記録
- 欠席通知の自動送信
- 月次出欠レポートの生成

### grade-calculator.js
成績集計システムのサンプルコードです。
- 成績データの一括入力
- 自動集計と統計計算
- 評価の自動判定
- 個人成績表の作成とメール送信

### .clasp.json.example
claspの設定ファイルテンプレートです。
使用方法：
1. このファイルを`.clasp.json`にコピー
2. `YOUR_SCRIPT_ID_HERE`を実際のスクリプトIDに置き換え
3. `.gitignore`に`.clasp.json`を追加（重要！）

## 🚀 使い方

### 1. Google Apps Scriptエディタで使用
1. [script.google.com](https://script.google.com)で新規プロジェクト作成
2. 必要なコードをコピー＆ペースト
3. 関数を実行して動作確認

### 2. claspで使用
```bash
# プロジェクトフォルダを作成
mkdir my-gas-project
cd my-gas-project

# 必要なファイルをコピー
cp /path/to/samples/*.js ./
cp /path/to/samples/.clasp.json.example ./.clasp.json

# .clasp.jsonを編集してスクリプトIDを設定
# その後、GASにプッシュ
clasp push
```

## ⚠️ 注意事項

1. **個人情報の取り扱い**
   - 実際の学生データを扱う場合は慎重に
   - テスト時はダミーデータを使用

2. **API制限**
   - メール送信は1日100通まで（無料アカウント）
   - スクリプト実行時間は6分まで

3. **セキュリティ**
   - `.clasp.json`はGitにコミットしない
   - APIキーやパスワードは直接コードに書かない

## 📚 カスタマイズのヒント

各サンプルコードの`CONFIG`オブジェクトを編集することで、簡単にカスタマイズできます：

```javascript
const CONFIG = {
  SPREADSHEET_NAME: 'あなたのスプレッドシート名',
  // その他の設定...
};
```

## 🔗 参考リンク

- [Google Apps Script公式ドキュメント](https://developers.google.com/apps-script)
- [clasp公式リポジトリ](https://github.com/google/clasp)
- [GAS活用事例集](https://developers.google.com/apps-script/samples)