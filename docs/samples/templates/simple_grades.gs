/**
 * シンプルな成績集計システム
 * 3教科の平均点を自動計算します
 */

// 平均点を計算する関数
function calculateAverage() {
  // スプレッドシートを取得
  var sheet = SpreadsheetApp.getActiveSheet();
  
  // データ範囲を取得（2行目から、B列から3列分）
  // B列: 国語, C列: 算数, D列: 理科
  var lastRow = sheet.getLastRow();
  var dataRange = sheet.getRange(2, 2, lastRow - 1, 3);
  var scores = dataRange.getValues();
  
  // 各生徒の平均点を計算
  for (var i = 0; i < scores.length; i++) {
    var kokugo = scores[i][0];  // 国語
    var sansu = scores[i][1];   // 算数
    var rika = scores[i][2];    // 理科
    
    // 合計と平均を計算
    var total = kokugo + sansu + rika;
    var average = total / 3;
    
    // E列に平均点を記入（小数点1位まで）
    sheet.getRange(i + 2, 5).setValue(average.toFixed(1));
    
    // F列に評価を記入
    var grade = getGrade(average);
    sheet.getRange(i + 2, 6).setValue(grade);
  }
  
  // 完了メッセージ
  SpreadsheetApp.getUi().alert('成績集計が完了しました！');
}

// 点数から評価を判定する関数
function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "E";
}

// クラス平均を計算する関数
function calculateClassAverage() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var lastRow = sheet.getLastRow();
  
  // 各教科の平均を計算
  var kokugoAvg = sheet.getRange(2, 2, lastRow - 1, 1).getValues();
  var sansuAvg = sheet.getRange(2, 3, lastRow - 1, 1).getValues();
  var rikaAvg = sheet.getRange(2, 4, lastRow - 1, 1).getValues();
  
  var kokugoSum = 0, sansuSum = 0, rikaSum = 0;
  var count = kokugoAvg.length;
  
  for (var i = 0; i < count; i++) {
    kokugoSum += kokugoAvg[i][0];
    sansuSum += sansuAvg[i][0];
    rikaSum += rikaAvg[i][0];
  }
  
  // 結果を表示
  var message = "クラス平均\n";
  message += "国語: " + (kokugoSum / count).toFixed(1) + "点\n";
  message += "算数: " + (sansuSum / count).toFixed(1) + "点\n";
  message += "理科: " + (rikaSum / count).toFixed(1) + "点";
  
  SpreadsheetApp.getUi().alert(message);
}