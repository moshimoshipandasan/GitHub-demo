/**
 * 簡単な出席確認システム
 * Google フォームからの送信を記録します
 */

// フォーム送信時に自動実行される関数
function onFormSubmit(e) {
  // 送信されたデータを取得
  var timestamp = e.values[0];  // 送信時刻
  var name = e.values[1];       // 生徒の名前
  var status = e.values[2];     // 出席状況（出席/欠席）
  
  // アクティブなスプレッドシートを取得
  var sheet = SpreadsheetApp.getActiveSheet();
  
  // データを新しい行に追加
  sheet.appendRow([timestamp, name, status]);
  
  // ログに記録（デバッグ用）
  console.log(name + "さんの出席状況を記録しました: " + status);
}

// 手動で出席を記録する関数
function recordAttendance(name, status) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var now = new Date();
  
  sheet.appendRow([now, name, status]);
  
  return "記録完了: " + name + " - " + status;
}

// 今日の出席状況を集計する関数
function getTodayAttendance() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var today = new Date().toDateString();
  
  var present = 0;
  var absent = 0;
  
  for (var i = 1; i < data.length; i++) {
    var recordDate = new Date(data[i][0]).toDateString();
    
    if (recordDate === today) {
      if (data[i][2] === "出席") {
        present++;
      } else if (data[i][2] === "欠席") {
        absent++;
      }
    }
  }
  
  console.log("本日の出席状況: 出席 " + present + "名, 欠席 " + absent + "名");
  return { present: present, absent: absent };
}