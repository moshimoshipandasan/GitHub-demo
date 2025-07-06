/**
 * Google Apps Script 入門サンプル
 * GitHubで管理するための簡単な例
 */

// 基本的な関数
function myFunction() {
  console.log("Hello, Google Apps Script!");
}

// スプレッドシートに「Hello World」を書き込む
function writeHelloWorld() {
  // アクティブなスプレッドシートを取得
  var sheet = SpreadsheetApp.getActiveSheet();
  
  // A1セルに書き込み
  sheet.getRange("A1").setValue("Hello World!");
  
  // B1セルに現在時刻を書き込み
  sheet.getRange("B1").setValue(new Date());
}

// 簡単なメニューを追加
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('カスタムメニュー')
    .addItem('Hello Worldを書く', 'writeHelloWorld')
    .addItem('アラートを表示', 'showAlert')
    .addToUi();
}

// アラートを表示する関数
function showAlert() {
  SpreadsheetApp.getUi().alert('こんにちは！GASの世界へようこそ！');
}