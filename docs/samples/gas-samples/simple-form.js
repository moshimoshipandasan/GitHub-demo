// 簡単なGoogleフォーム作成スクリプト

function createSimpleForm() {
  // 新しいフォームを作成
  const form = FormApp.create('アンケートフォーム');
  
  // タイトルと説明を設定
  form.setTitle('簡単なアンケート')
      .setDescription('GitHubワークショップの感想を教えてください');
  
  // 名前を入力する質問
  form.addTextItem()
      .setTitle('お名前')
      .setRequired(true);
  
  // 評価を選ぶ質問
  form.addMultipleChoiceItem()
      .setTitle('ワークショップはどうでしたか？')
      .setChoiceValues(['とても良かった', '良かった', '普通', '改善が必要'])
      .setRequired(true);
  
  // 感想を書く質問
  form.addParagraphTextItem()
      .setTitle('感想や意見があれば教えてください')
      .setRequired(false);
  
  // フォームのURLをログに出力
  Logger.log('フォームURL: ' + form.getPublishedUrl());
}