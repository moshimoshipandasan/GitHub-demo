// 基本的なJavaScript

// 色を変える関数
function changeColor() {
    // 色のリスト
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57'];
    
    // ランダムに色を選ぶ
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // メッセージ要素を取得
    const messageElement = document.getElementById('message');
    
    // 背景色を変更
    messageElement.style.backgroundColor = randomColor;
    
    // メッセージを更新
    messageElement.textContent = '色が変わりました！';
}