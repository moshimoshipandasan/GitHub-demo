---
id: programming-exercises
title: プログラミング課題
sidebar_label: プログラミング課題
description: 段階的にテトリスゲームをカスタマイズしながらプログラミングスキルを向上させる課題集
---

# 🔧 プログラミング課題

テトリスゲームをカスタマイズしながら、段階的にプログラミングスキルを向上させましょう。

## 準備編（初心者向け）

### 課題0-1：コード構造の理解
**目標：** プロジェクト全体の構造を把握する

1. 以下のファイルの最初の10行を読んでみましょう：
   - `index.html` - ゲームのHTMLページ
   - `main.js` - メインのJavaScriptファイル
   - `tetris.js` - テトリスのゲームロジック
   - `tracker.js` - 手のトラッキング処理

2. 各ファイルの役割を理解し、どのように連携しているか考えてみましょう。

**学習ポイント：**
- HTMLとJavaScriptの関係
- モジュール分割の考え方
- ファイル間の依存関係

### 課題0-2：console.logを使う
**目標：** 基本的なデバッグ方法を学ぶ

1. `tracker.js`に以下のコードを追加：
   ```javascript
   console.log("手の位置:", results.landmarks[0]);
   ```

2. ブラウザのコンソールを開いて値を確認
3. 手を動かすと値がどう変化するか観察

**学習ポイント：**
- コンソールを使ったデバッグ
- リアルタイムデータの確認方法
- MediaPipeのデータ構造

## 初級編（小さな変更）

### 課題1-1：ゲームの色を変更
**ファイル：** `tetris.js`
**難易度：** ⭐

ブロックの色を好きな色に変更してみましょう。

```javascript
// 現在のカラーパレット
const COLORS = [
    '#FF0000', // 赤
    '#00FF00', // 緑
    '#0000FF', // 青
    // ... 他の色
];

// 変更例：パステルカラーに変更
const COLORS = [
    '#FFB6C1', // ライトピンク
    '#98FB98', // ペールグリーン
    '#87CEEB', // スカイブルー
    // ... 他のパステルカラー
];
```

**オプション課題：** レインボーテーマを作成してみましょう！

### 課題1-2：ゲーム速度の調整
**ファイル：** `tetris.js`
**難易度：** ⭐

ゲームの難易度を調整してみましょう。

```javascript
// dropIntervalの値を変更
let dropInterval = 1000; // 1秒ごと（デフォルト）

// 変更例
let dropInterval = 500;  // 0.5秒ごと（速い）
let dropInterval = 2000; // 2秒ごと（遅い）
```

**実験：**
- 100msにするとどうなる？
- 5000msにするとどうなる？
- レベルアップごとに速度を変える仕組みを考えてみよう

### 課題1-3：スコア計算の変更
**ファイル：** `tetris.js`
**難易度：** ⭐⭐

スコアの計算方法をカスタマイズしてみましょう。

```javascript
// 現在のスコア計算
function calculateScore(linesCleared) {
    return linesCleared * 100;
}

// 変更例：複数ライン同時消去でボーナス
function calculateScore(linesCleared) {
    switch(linesCleared) {
        case 1: return 100;
        case 2: return 300;   // 2倍以上のボーナス
        case 3: return 500;   // さらにボーナス
        case 4: return 800;   // テトリス！
        default: return 0;
    }
}
```

## 中級編（新機能追加）

### 課題2-1：次のピース表示
**難易度：** ⭐⭐⭐
**目標：** 次に来るテトリスピースのプレビューを実装

1. HTMLに表示エリアを追加：
   ```html
   <div id="next-piece">
       <h3>次のピース</h3>
       <canvas id="next-canvas"></canvas>
   </div>
   ```

2. JavaScriptで次のピースを管理：
   ```javascript
   let nextPiece = null;
   
   function generateNextPiece() {
       nextPiece = createRandomPiece();
       drawNextPiece();
   }
   ```

3. 次のピースを描画する関数を実装

**学習ポイント：**
- Canvas APIの使い方
- ゲーム状態の管理
- UI/UXの改善

### 課題2-2：効果音の追加
**技術：** HTML5 Audio API
**難易度：** ⭐⭐⭐

ゲームに音を追加してみましょう。

```javascript
// 音声ファイルを準備
const sounds = {
    lineClear: new Audio('sounds/clear.mp3'),
    gameOver: new Audio('sounds/gameover.mp3'),
    rotate: new Audio('sounds/rotate.mp3')
};

// ライン消去時に再生
function clearLines() {
    // ... 既存のコード
    sounds.lineClear.play();
}
```

**実装する効果音：**
- ライン消去音
- ブロック回転音
- ゲームオーバー音
- BGM（オプション）

### 課題2-3：パーティクルエフェクト
**難易度：** ⭐⭐⭐⭐
**目標：** ライン消去時に視覚効果を追加

```javascript
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 4;
        this.vy = (Math.random() - 0.5) * 4;
        this.life = 1.0;
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.1; // 重力
        this.life -= 0.02;
    }
    
    draw(ctx) {
        ctx.globalAlpha = this.life;
        ctx.fillStyle = '#FFD700';
        ctx.fillRect(this.x, this.y, 4, 4);
    }
}
```

## 上級編（大規模な変更）

### 課題3-1：ゴーストピース機能
**難易度：** ⭐⭐⭐⭐⭐
**目標：** ピースの着地予測位置を表示

実装のヒント：
1. 現在のピースをコピー
2. 衝突するまで下に移動
3. 半透明で描画

```javascript
function drawGhostPiece() {
    const ghost = JSON.parse(JSON.stringify(currentPiece));
    
    // 着地位置まで移動
    while (!checkCollision(ghost)) {
        ghost.y++;
    }
    ghost.y--;
    
    // 半透明で描画
    ctx.globalAlpha = 0.3;
    drawPiece(ghost);
    ctx.globalAlpha = 1.0;
}
```

### 課題3-2：マルチプレイヤーモード
**難易度：** ⭐⭐⭐⭐⭐
**目標：** 2人プレイ対戦モード

実装内容：
1. 画面を2分割
2. 独立したゲームインスタンス
3. お邪魔ブロック送信機能
4. 勝敗判定

```javascript
class TetrisGame {
    constructor(canvasId, playerId) {
        this.canvas = document.getElementById(canvasId);
        this.playerId = playerId;
        // ... ゲームの初期化
    }
}

const player1 = new TetrisGame('canvas1', 1);
const player2 = new TetrisGame('canvas2', 2);
```

### 課題3-3：AIプレイヤー
**難易度：** ⭐⭐⭐⭐⭐⭐
**目標：** 自動でテトリスをプレイするAIを作成

アルゴリズムの考え方：
1. 全ての可能な配置を評価
2. 評価関数：
   - 高さのペナルティ
   - 穴の数のペナルティ
   - 完成ラインのボーナス
3. 最適な配置を選択

```javascript
function evaluateBoard(board) {
    let score = 0;
    
    // 高さのペナルティ
    score -= getMaxHeight(board) * 10;
    
    // 穴の数のペナルティ
    score -= countHoles(board) * 30;
    
    // 完成ラインのボーナス
    score += countCompleteLines(board) * 100;
    
    return score;
}
```

## ボーナスプロジェクトアイデア

### テトリス × リズムゲーム
音楽に合わせてブロックが落ちてくるリズムテトリス

### テトリス × RPG要素
- ブロックを消すと経験値獲得
- レベルアップで新しいブロック形状解放
- スキルシステム（一時停止、ブロック変更など）

### 協力プレイテトリス
- 2人で1つの盤面を操作
- 役割分担（移動係と回転係）
- コミュニケーションが鍵

## 課題提出方法

1. 実装した機能のスクリーンショットを撮影
2. コードの変更点をまとめる
3. 工夫した点や苦労した点を記録
4. GitHubにプッシュしてプルリクエストを作成

## 評価のポイント

- コードの可読性
- 創造性とオリジナリティ
- バグの少なさ
- ユーザー体験の向上
- 技術的な挑戦

頑張って自分だけのテトリスを作ってみましょう！🎮