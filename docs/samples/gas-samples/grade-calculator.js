/**
 * 成績集計システム
 * テストの点数を自動集計し、成績表を作成するGoogle Apps Script
 */

// 設定
const GRADE_CONFIG = {
  SPREADSHEET_NAME: '2025年度 成績管理',
  SUBJECTS: ['国語', '数学', '英語', '理科', '社会'],
  GRADE_BOUNDARIES: {
    'S': 90,  // 90点以上
    'A': 80,  // 80点以上
    'B': 70,  // 70点以上
    'C': 60,  // 60点以上
    'D': 0    // 60点未満
  }
};

/**
 * 成績管理用スプレッドシートを初期化
 */
function initializeGradeSpreadsheet() {
  // スプレッドシートを作成
  const spreadsheet = SpreadsheetApp.create(GRADE_CONFIG.SPREADSHEET_NAME);
  
  // 学生リストシート
  const studentSheet = spreadsheet.getActiveSheet();
  studentSheet.setName('学生リスト');
  studentSheet.getRange('A1:C1').setValues([['学籍番号', '氏名', 'メールアドレス']]);
  
  // サンプルデータ
  const sampleStudents = [
    ['001', '田中太郎', 'tanaka@example.com'],
    ['002', '鈴木花子', 'suzuki@example.com'],
    ['003', '佐藤次郎', 'sato@example.com']
  ];
  studentSheet.getRange(2, 1, sampleStudents.length, 3).setValues(sampleStudents);
  
  // 成績入力シート
  const gradeSheet = spreadsheet.insertSheet('成績入力');
  createGradeInputSheet(gradeSheet);
  
  // 成績集計シート
  const summarySheet = spreadsheet.insertSheet('成績集計');
  createSummarySheet(summarySheet);
  
  console.log('成績管理スプレッドシートを作成しました');
  console.log('URL: ' + spreadsheet.getUrl());
  
  return spreadsheet.getId();
}

/**
 * 成績入力シートを作成
 */
function createGradeInputSheet(sheet) {
  // ヘッダーを作成
  const headers = ['学籍番号', '氏名', ...GRADE_CONFIG.SUBJECTS, '合計', '平均', '評価'];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // ヘッダーのスタイル
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#1a73e8');
  headerRange.setFontColor('#ffffff');
  headerRange.setFontWeight('bold');
  headerRange.setHorizontalAlignment('center');
  
  // 数式を設定（2行目から）
  for (let row = 2; row <= 30; row++) {
    // 合計
    const sumFormula = `=SUM(C${row}:G${row})`;
    sheet.getRange(row, 8).setFormula(sumFormula);
    
    // 平均
    const avgFormula = `=AVERAGE(C${row}:G${row})`;
    sheet.getRange(row, 9).setFormula(avgFormula);
    
    // 評価
    const gradeFormula = `=IF(I${row}="","",IF(I${row}>=90,"S",IF(I${row}>=80,"A",IF(I${row}>=70,"B",IF(I${row}>=60,"C","D")))))`;
    sheet.getRange(row, 10).setFormula(gradeFormula);
  }
  
  // 条件付き書式（評価列）
  const gradeColumn = sheet.getRange(2, 10, 29, 1);
  
  // S評価（金色）
  const sRule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo('S')
    .setBackground('#ffd700')
    .setFontColor('#000000')
    .setRanges([gradeColumn])
    .build();
    
  // A評価（緑色）
  const aRule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo('A')
    .setBackground('#34a853')
    .setFontColor('#ffffff')
    .setRanges([gradeColumn])
    .build();
    
  // D評価（赤色）
  const dRule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo('D')
    .setBackground('#ea4335')
    .setFontColor('#ffffff')
    .setRanges([gradeColumn])
    .build();
    
  sheet.setConditionalFormatRules([sRule, aRule, dRule]);
}

/**
 * 成績集計シートを作成
 */
function createSummarySheet(sheet) {
  // クラス全体の統計
  sheet.getRange('A1').setValue('クラス統計');
  sheet.getRange('A1').setFontSize(16).setFontWeight('bold');
  
  const statsHeaders = ['項目', '国語', '数学', '英語', '理科', '社会', '全科目'];
  sheet.getRange('A3:G3').setValues([statsHeaders]);
  
  const statsItems = [
    ['平均点'],
    ['最高点'],
    ['最低点'],
    ['標準偏差']
  ];
  sheet.getRange('A4:A7').setValues(statsItems);
  
  // 評価分布
  sheet.getRange('A10').setValue('評価分布');
  sheet.getRange('A10').setFontSize(16).setFontWeight('bold');
  
  const gradeHeaders = ['評価', 'S', 'A', 'B', 'C', 'D'];
  sheet.getRange('A12:F12').setValues([gradeHeaders]);
  sheet.getRange('A13').setValue('人数');
}

/**
 * テスト結果を一括入力
 */
function inputTestScores(testName, scoresData) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const gradeSheet = spreadsheet.getSheetByName('成績入力');
  
  // テスト名を記録
  gradeSheet.getRange('A1').setNote(`最終更新: ${testName} - ${new Date()}`);
  
  // スコアを入力
  scoresData.forEach((studentData, index) => {
    const row = index + 2;
    const [id, name, ...scores] = studentData;
    
    // 学生情報
    gradeSheet.getRange(row, 1).setValue(id);
    gradeSheet.getRange(row, 2).setValue(name);
    
    // 各科目の点数
    scores.forEach((score, subjectIndex) => {
      gradeSheet.getRange(row, subjectIndex + 3).setValue(score);
    });
  });
  
  // 集計を更新
  updateSummaryStatistics();
  
  console.log(`${testName}の成績を入力しました`);
}

/**
 * 統計情報を更新
 */
function updateSummaryStatistics() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const gradeSheet = spreadsheet.getSheetByName('成績入力');
  const summarySheet = spreadsheet.getSheetByName('成績集計');
  
  // 科目ごとの統計を計算
  GRADE_CONFIG.SUBJECTS.forEach((subject, index) => {
    const column = index + 3; // C列から開始
    const dataRange = gradeSheet.getRange(2, column, 29, 1);
    
    // 平均
    summarySheet.getRange(4, column - 1).setFormula(`=AVERAGE(成績入力!${dataRange.getA1Notation()})`);
    // 最高点
    summarySheet.getRange(5, column - 1).setFormula(`=MAX(成績入力!${dataRange.getA1Notation()})`);
    // 最低点
    summarySheet.getRange(6, column - 1).setFormula(`=MIN(成績入力!${dataRange.getA1Notation()})`);
    // 標準偏差
    summarySheet.getRange(7, column - 1).setFormula(`=STDEV(成績入力!${dataRange.getA1Notation()})`);
  });
  
  // 全科目の統計
  summarySheet.getRange(4, 7).setFormula('=AVERAGE(成績入力!I2:I30)');
  summarySheet.getRange(5, 7).setFormula('=MAX(成績入力!I2:I30)');
  summarySheet.getRange(6, 7).setFormula('=MIN(成績入力!I2:I30)');
  summarySheet.getRange(7, 7).setFormula('=STDEV(成績入力!I2:I30)');
  
  // 評価分布を更新
  updateGradeDistribution();
}

/**
 * 評価分布を更新
 */
function updateGradeDistribution() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const summarySheet = spreadsheet.getSheetByName('成績集計');
  
  // 各評価の人数をカウント
  ['S', 'A', 'B', 'C', 'D'].forEach((grade, index) => {
    const formula = `=COUNTIF(成績入力!J2:J30,"${grade}")`;
    summarySheet.getRange(13, index + 2).setFormula(formula);
  });
}

/**
 * 個人成績表を作成してメール送信
 */
function sendIndividualReports() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const gradeSheet = spreadsheet.getSheetByName('成績入力');
  const studentSheet = spreadsheet.getSheetByName('学生リスト');
  
  // データを取得
  const gradeData = gradeSheet.getDataRange().getValues();
  const studentData = studentSheet.getDataRange().getValues();
  
  // 学生ごとに成績表を作成
  for (let i = 1; i < gradeData.length; i++) {
    const row = gradeData[i];
    if (!row[0]) continue; // 学籍番号がない場合はスキップ
    
    const studentId = row[0];
    const studentName = row[1];
    
    // メールアドレスを検索
    const studentInfo = studentData.find(s => s[0] === studentId);
    if (!studentInfo || !studentInfo[2]) continue;
    
    const email = studentInfo[2];
    
    // 成績レポートを作成
    const report = createIndividualReport(row);
    
    // メール送信
    sendReportEmail(email, studentName, report);
  }
  
  console.log('個人成績表を送信しました');
}

/**
 * 個人成績レポートを作成
 */
function createIndividualReport(gradeRow) {
  const [id, name, ...scores] = gradeRow;
  const subjects = GRADE_CONFIG.SUBJECTS;
  
  let report = `
成績通知書

学籍番号: ${id}
氏名: ${name}

【各科目の成績】
${'─'.repeat(30)}
`;
  
  // 各科目の成績
  subjects.forEach((subject, index) => {
    const score = scores[index];
    const bar = createScoreBar(score);
    report += `${subject.padEnd(4, '　')}: ${String(score).padStart(3, ' ')}点 ${bar}\n`;
  });
  
  report += `${'─'.repeat(30)}
合計: ${scores[5]}点
平均: ${Math.round(scores[6] * 10) / 10}点
評価: ${scores[7]}

【評価基準】
S: 90点以上（素晴らしい！）
A: 80-89点（よくできました）
B: 70-79点（もう少し頑張りましょう）
C: 60-69点（基礎を固めましょう）
D: 60点未満（補習が必要です）
`;
  
  return report;
}

/**
 * スコアバーを作成
 */
function createScoreBar(score) {
  const maxBar = 20;
  const filledBar = Math.floor(score / 100 * maxBar);
  return '█'.repeat(filledBar) + '░'.repeat(maxBar - filledBar);
}

/**
 * 成績レポートをメール送信
 */
function sendReportEmail(email, name, report) {
  const subject = `【成績通知】${name}さんの成績表`;
  
  try {
    GmailApp.sendEmail(
      email,
      subject,
      report,
      {
        name: '成績管理システム',
        noReply: true
      }
    );
    console.log(`${name}さんに成績表を送信しました`);
  } catch (error) {
    console.error(`${name}さんへの送信に失敗しました: ${error}`);
  }
}

/**
 * テスト用のサンプルデータを生成
 */
function generateSampleData() {
  const students = [
    ['001', '田中太郎'],
    ['002', '鈴木花子'],
    ['003', '佐藤次郎']
  ];
  
  const testData = students.map(([id, name]) => {
    const scores = GRADE_CONFIG.SUBJECTS.map(() => 
      Math.floor(Math.random() * 41) + 60 // 60-100点のランダム
    );
    return [id, name, ...scores];
  });
  
  inputTestScores('期末テスト', testData);
}