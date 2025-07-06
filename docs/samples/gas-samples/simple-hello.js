// Google Apps Script の簡単なサンプル

// スプレッドシートに「こんにちは」と書く関数
function sayHello() {
  // アクティブなスプレッドシートを取得
  const sheet = SpreadsheetApp.getActiveSheet();
  
  // A1セルに「こんにちは、GAS！」と書く
  sheet.getRange('A1').setValue('こんにちは、GAS！');
  
  // 現在の日時をA2セルに書く
  sheet.getRange('A2').setValue(new Date());
  
  // ポップアップで完了メッセージを表示
  SpreadsheetApp.getUi().alert('書き込みが完了しました！');
}

// メニューに関数を追加
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('カスタムメニュー')
    .addItem('こんにちはを実行', 'sayHello')
    .addToUi();
}