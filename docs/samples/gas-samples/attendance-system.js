/**
 * 出欠管理システム
 * 学校での出欠確認を自動化するGoogle Apps Scriptサンプル
 */

// 設定値
const CONFIG = {
  SPREADSHEET_NAME: '2025年度 出欠記録',
  FORM_TITLE: '本日の出欠確認',
  CLASS_LIST: [
    { id: '001', name: '田中太郎' },
    { id: '002', name: '鈴木花子' },
    { id: '003', name: '佐藤次郎' },
    { id: '004', name: '高橋三郎' },
    { id: '005', name: '渡辺四郎' }
  ]
};

/**
 * 出欠記録用スプレッドシートを作成
 */
function createAttendanceSpreadsheet() {
  // スプレッドシートを作成
  const spreadsheet = SpreadsheetApp.create(CONFIG.SPREADSHEET_NAME);
  const sheet = spreadsheet.getActiveSheet();
  sheet.setName('出欠記録');
  
  // ヘッダーを設定
  const headers = ['日付', '学籍番号', '氏名', '出欠', '備考', '記録時刻'];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // ヘッダーのスタイルを設定
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#4285f4');
  headerRange.setFontColor('#ffffff');
  headerRange.setFontWeight('bold');
  
  // 列幅を調整
  sheet.setColumnWidth(1, 100); // 日付
  sheet.setColumnWidth(2, 80);  // 学籍番号
  sheet.setColumnWidth(3, 100); // 氏名
  sheet.setColumnWidth(4, 60);  // 出欠
  sheet.setColumnWidth(5, 200); // 備考
  sheet.setColumnWidth(6, 150); // 記録時刻
  
  console.log('出欠記録スプレッドシートを作成しました');
  console.log('URL: ' + spreadsheet.getUrl());
  
  return spreadsheet.getId();
}

/**
 * 日次の出欠フォームを作成
 */
function createDailyAttendanceForm() {
  const today = new Date();
  const dateString = Utilities.formatDate(today, 'Asia/Tokyo', 'yyyy年MM月dd日');
  
  // フォームを作成
  const form = FormApp.create(`${dateString} ${CONFIG.FORM_TITLE}`);
  
  // 説明を追加
  form.setDescription('本日の出欠を記録してください。');
  
  // 学籍番号の入力
  const idItem = form.addTextItem()
    .setTitle('学籍番号')
    .setHelpText('3桁の学籍番号を入力してください（例：001）')
    .setRequired(true);
    
  // バリデーションを追加（3桁の数字）
  const idValidation = FormApp.createTextValidation()
    .requireTextMatchesPattern('^[0-9]{3}$')
    .setHelpText('3桁の数字を入力してください')
    .build();
  idItem.setValidation(idValidation);
  
  // 氏名の選択
  const nameChoices = CONFIG.CLASS_LIST.map(student => 
    form.createChoice(student.name)
  );
  form.addMultipleChoiceItem()
    .setTitle('氏名')
    .setChoices(nameChoices)
    .setRequired(true);
  
  // 出欠の選択
  form.addMultipleChoiceItem()
    .setTitle('出欠')
    .setChoices([
      form.createChoice('出席'),
      form.createChoice('欠席'),
      form.createChoice('遅刻'),
      form.createChoice('早退'),
      form.createChoice('公欠')
    ])
    .setRequired(true);
    
  // 備考（任意）
  form.addParagraphTextItem()
    .setTitle('備考')
    .setHelpText('遅刻・欠席の理由など（任意）');
    
  // 送信後のメッセージ
  form.setConfirmationMessage('出欠を記録しました。ありがとうございました。');
  
  console.log('出欠フォームを作成しました');
  console.log('URL: ' + form.getPublishedUrl());
  
  return form;
}

/**
 * フォームの回答をスプレッドシートに記録
 */
function onFormSubmit(e) {
  const response = e.response;
  const itemResponses = response.getItemResponses();
  
  // 回答を取得
  const studentId = itemResponses[0].getResponse();
  const studentName = itemResponses[1].getResponse();
  const attendance = itemResponses[2].getResponse();
  const remarks = itemResponses.length > 3 ? itemResponses[3].getResponse() : '';
  
  // スプレッドシートに記録
  const spreadsheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID'); // IDを設定
  const sheet = spreadsheet.getSheetByName('出欠記録');
  
  const today = new Date();
  const dateString = Utilities.formatDate(today, 'Asia/Tokyo', 'yyyy/MM/dd');
  const timestamp = Utilities.formatDate(today, 'Asia/Tokyo', 'yyyy/MM/dd HH:mm:ss');
  
  // 新しい行に記録
  sheet.appendRow([
    dateString,
    studentId,
    studentName,
    attendance,
    remarks,
    timestamp
  ]);
  
  // 欠席の場合は通知メールを送信
  if (attendance === '欠席') {
    sendAbsenceNotification(studentName, dateString, remarks);
  }
}

/**
 * 欠席通知メールを送信
 */
function sendAbsenceNotification(studentName, date, reason) {
  const subject = `【欠席連絡】${studentName} - ${date}`;
  const body = `
${studentName}さんが本日欠席です。

日付: ${date}
理由: ${reason || '理由の記載なし'}

自動送信メール
  `.trim();
  
  // 担当教員にメール送信
  GmailApp.sendEmail(
    'teacher@school.edu', // 送信先メールアドレス
    subject,
    body
  );
}

/**
 * 月次の出欠集計レポートを作成
 */
function createMonthlyReport() {
  const spreadsheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID');
  const sourceSheet = spreadsheet.getSheetByName('出欠記録');
  
  // 新しいシートを作成
  const today = new Date();
  const monthString = Utilities.formatDate(today, 'Asia/Tokyo', 'yyyy年MM月');
  const reportSheet = spreadsheet.insertSheet(`${monthString}集計`);
  
  // ヘッダーを作成
  const headers = ['学籍番号', '氏名', '出席', '欠席', '遅刻', '早退', '公欠', '出席率'];
  reportSheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // 学生ごとに集計
  const summaryData = [];
  CONFIG.CLASS_LIST.forEach(student => {
    const attendance = countAttendance(sourceSheet, student.id, today);
    const attendanceRate = calculateAttendanceRate(attendance);
    
    summaryData.push([
      student.id,
      student.name,
      attendance['出席'] || 0,
      attendance['欠席'] || 0,
      attendance['遅刻'] || 0,
      attendance['早退'] || 0,
      attendance['公欠'] || 0,
      attendanceRate + '%'
    ]);
  });
  
  // データを書き込み
  if (summaryData.length > 0) {
    reportSheet.getRange(2, 1, summaryData.length, headers.length)
      .setValues(summaryData);
  }
  
  // スタイルを設定
  const headerRange = reportSheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#34a853');
  headerRange.setFontColor('#ffffff');
  headerRange.setFontWeight('bold');
  
  console.log('月次レポートを作成しました');
}

/**
 * 出欠をカウント
 */
function countAttendance(sheet, studentId, targetMonth) {
  const data = sheet.getDataRange().getValues();
  const counts = {};
  
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const date = new Date(row[0]);
    const id = row[1];
    const status = row[3];
    
    // 対象月かつ対象学生のデータのみカウント
    if (date.getMonth() === targetMonth.getMonth() && 
        date.getFullYear() === targetMonth.getFullYear() &&
        id === studentId) {
      counts[status] = (counts[status] || 0) + 1;
    }
  }
  
  return counts;
}

/**
 * 出席率を計算
 */
function calculateAttendanceRate(attendance) {
  const present = (attendance['出席'] || 0) + (attendance['遅刻'] || 0) * 0.5;
  const total = Object.values(attendance).reduce((sum, count) => sum + count, 0);
  
  if (total === 0) return 0;
  return Math.round((present / total) * 100);
}

/**
 * トリガーを設定
 */
function setupTriggers() {
  // 既存のトリガーを削除
  ScriptApp.getProjectTriggers().forEach(trigger => {
    ScriptApp.deleteTrigger(trigger);
  });
  
  // 毎朝7時にフォームを作成
  ScriptApp.newTrigger('createDailyAttendanceForm')
    .timeBased()
    .everyDays(1)
    .atHour(7)
    .create();
    
  // 毎月1日にレポートを作成
  ScriptApp.newTrigger('createMonthlyReport')
    .timeBased()
    .onMonthDay(1)
    .atHour(9)
    .create();
    
  console.log('トリガーを設定しました');
}