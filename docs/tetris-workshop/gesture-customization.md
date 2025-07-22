---
id: gesture-customization
title: ジェスチャーカスタマイズガイド
sidebar_label: ジェスチャーカスタマイズ
description: MediaPipeを使った手のジェスチャー認識のカスタマイズ方法を学ぶ
---

# 🎯 ジェスチャーカスタマイズガイド

MediaPipeの手のトラッキング機能を使って、独自のジェスチャーを作成する方法を学びましょう。

## MediaPipeの基礎知識

### 手のランドマーク（21個のポイント）

MediaPipeは手の21個の特徴点を追跡します：

```
    8   12  16  20  ← 指先
    |   |   |   |
    7   11  15  19
    |   |   |   |
    6   10  14  18
    |   |   |   |
    5---9---13--17
     \  |  /  /
      \ | / /
        0  ← 手首
       /
      1-2-3-4 ← 親指
```

各ランドマークの意味：
- **0**: 手首（WRIST）
- **1-4**: 親指（THUMB）
- **5-8**: 人差し指（INDEX_FINGER）
- **9-12**: 中指（MIDDLE_FINGER）
- **13-16**: 薬指（RING_FINGER）
- **17-20**: 小指（PINKY）

### 座標システム

各ランドマークは3つの値を持ちます：
- **x**: 横方向の位置（0.0〜1.0）
- **y**: 縦方向の位置（0.0〜1.0）
- **z**: 深さ（カメラからの距離の推定値）

```javascript
// ランドマークへのアクセス例
const wrist = results.landmarks[0][0];
console.log(`手首の位置: x=${wrist.x}, y=${wrist.y}, z=${wrist.z}`);
```

## 現在のジェスチャー実装

### 1. 手の傾き検出

```javascript
function getHandAngle(landmarks) {
    const wrist = landmarks[0];
    const middleBase = landmarks[9];
    
    // 2点間の角度を計算
    const angle = Math.atan2(
        middleBase.y - wrist.y,
        middleBase.x - wrist.x
    );
    
    return angle;
}

// 使用例
const angle = getHandAngle(landmarks);
if (angle < -0.3) {
    // 左に傾いている
    moveTetrisLeft();
} else if (angle > 0.3) {
    // 右に傾いている
    moveTetrisRight();
}
```

### 2. 指の状態検出

```javascript
function isFingerOpen(landmarks, fingerTip, fingerBase) {
    // 指先が指の付け根より上にあるかチェック
    return landmarks[fingerTip].y < landmarks[fingerBase].y;
}

// 人差し指が立っているかチェック
const indexFingerUp = isFingerOpen(landmarks, 8, 6);
if (indexFingerUp) {
    rotateTetrisPiece();
}
```

## カスタムジェスチャーの実装

### 例1：グー（一時停止）

すべての指が閉じているときにゲームを一時停止：

```javascript
function isFist(landmarks) {
    // すべての指先が対応する付け根より下にあるかチェック
    const fingers = [
        { tip: 4, base: 2 },   // 親指
        { tip: 8, base: 6 },   // 人差し指
        { tip: 12, base: 10 }, // 中指
        { tip: 16, base: 14 }, // 薬指
        { tip: 20, base: 18 }  // 小指
    ];
    
    return fingers.every(finger => 
        landmarks[finger.tip].y > landmarks[finger.base].y
    );
}

// ゲームループ内で使用
if (isFist(landmarks)) {
    pauseGame();
}
```

### 例2：ピースサイン（2倍速）

人差し指と中指だけが立っているとき：

```javascript
function isPeaceSign(landmarks) {
    const indexUp = isFingerOpen(landmarks, 8, 6);
    const middleUp = isFingerOpen(landmarks, 12, 10);
    const ringDown = !isFingerOpen(landmarks, 16, 14);
    const pinkyDown = !isFingerOpen(landmarks, 20, 18);
    
    return indexUp && middleUp && ringDown && pinkyDown;
}

if (isPeaceSign(landmarks)) {
    gameSpeed = 2.0; // 2倍速
} else {
    gameSpeed = 1.0; // 通常速度
}
```

### 例3：手の回転（特殊回転）

手を円を描くように動かしたとき：

```javascript
class GestureTracker {
    constructor() {
        this.history = [];
        this.maxHistory = 30; // 30フレーム分を保存
    }
    
    update(landmarks) {
        const wrist = landmarks[0];
        this.history.push({ x: wrist.x, y: wrist.y, time: Date.now() });
        
        // 古いデータを削除
        if (this.history.length > this.maxHistory) {
            this.history.shift();
        }
    }
    
    detectCircularMotion() {
        if (this.history.length < 20) return false;
        
        // 簡易的な円検出アルゴリズム
        const recent = this.history.slice(-20);
        const centerX = recent.reduce((sum, p) => sum + p.x, 0) / recent.length;
        const centerY = recent.reduce((sum, p) => sum + p.y, 0) / recent.length;
        
        // 中心からの距離の分散が小さければ円運動
        const distances = recent.map(p => 
            Math.sqrt((p.x - centerX) ** 2 + (p.y - centerY) ** 2)
        );
        
        const avgDistance = distances.reduce((a, b) => a + b, 0) / distances.length;
        const variance = distances.reduce((sum, d) => 
            sum + (d - avgDistance) ** 2, 0
        ) / distances.length;
        
        return variance < 0.001; // しきい値は調整可能
    }
}
```

### 例4：指の数で速度制御

開いている指の数に応じて落下速度を変更：

```javascript
function countOpenFingers(landmarks) {
    let count = 0;
    const fingers = [4, 8, 12, 16, 20]; // 各指の先端
    const bases = [2, 6, 10, 14, 18];   // 各指の付け根
    
    for (let i = 0; i < fingers.length; i++) {
        if (landmarks[fingers[i]].y < landmarks[bases[i]].y) {
            count++;
        }
    }
    
    return count;
}

// ゲーム内で使用
const openFingers = countOpenFingers(landmarks);
dropSpeed = baseSpeed * (1 + openFingers * 0.2);
```

## 高度なテクニック

### 1. ジェスチャーの安定化

誤検出を防ぐために、複数フレームで確認：

```javascript
class StableGestureDetector {
    constructor(threshold = 5) {
        this.gestureCount = {};
        this.threshold = threshold;
    }
    
    detect(gestureName, isDetected) {
        if (!this.gestureCount[gestureName]) {
            this.gestureCount[gestureName] = 0;
        }
        
        if (isDetected) {
            this.gestureCount[gestureName]++;
        } else {
            this.gestureCount[gestureName] = 0;
        }
        
        return this.gestureCount[gestureName] >= this.threshold;
    }
}

const detector = new StableGestureDetector();
if (detector.detect('fist', isFist(landmarks))) {
    // 5フレーム連続でグーが検出されたら実行
    pauseGame();
}
```

### 2. カスタムしきい値の調整

```javascript
const GESTURE_THRESHOLDS = {
    ANGLE_LEFT: -0.3,
    ANGLE_RIGHT: 0.3,
    FINGER_OPEN_RATIO: 0.8,
    CIRCULAR_MOTION_VARIANCE: 0.001
};

// 設定画面で調整可能にする
function updateThreshold(gesture, value) {
    GESTURE_THRESHOLDS[gesture] = value;
    saveSettings();
}
```

### 3. デバッグ用の可視化

```javascript
function drawDebugInfo(ctx, landmarks) {
    // ランドマークを描画
    landmarks.forEach((landmark, index) => {
        const x = landmark.x * ctx.canvas.width;
        const y = landmark.y * ctx.canvas.height;
        
        ctx.fillStyle = '#00FF00';
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
        
        // ランドマーク番号を表示
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(index.toString(), x + 10, y);
    });
    
    // 接続線を描画
    const connections = [
        [0, 1], [1, 2], [2, 3], [3, 4],     // 親指
        [0, 5], [5, 6], [6, 7], [7, 8],     // 人差し指
        [0, 9], [9, 10], [10, 11], [11, 12], // 中指
        // ... 他の指
    ];
    
    ctx.strokeStyle = '#00FF00';
    connections.forEach(([start, end]) => {
        ctx.beginPath();
        ctx.moveTo(
            landmarks[start].x * ctx.canvas.width,
            landmarks[start].y * ctx.canvas.height
        );
        ctx.lineTo(
            landmarks[end].x * ctx.canvas.width,
            landmarks[end].y * ctx.canvas.height
        );
        ctx.stroke();
    });
}
```

## 実装のベストプラクティス

### 1. パフォーマンスの最適化

```javascript
// 重い計算は必要なときだけ実行
let lastGestureCheck = 0;
const GESTURE_CHECK_INTERVAL = 100; // 100ms

function updateGestures(landmarks) {
    const now = Date.now();
    if (now - lastGestureCheck < GESTURE_CHECK_INTERVAL) {
        return;
    }
    lastGestureCheck = now;
    
    // ジェスチャー検出処理
}
```

### 2. エラーハンドリング

```javascript
function safeGestureDetection(landmarks) {
    try {
        if (!landmarks || landmarks.length < 21) {
            console.warn('Invalid landmarks data');
            return null;
        }
        
        // ジェスチャー検出処理
    } catch (error) {
        console.error('Gesture detection error:', error);
        return null;
    }
}
```

### 3. ユーザーフィードバック

```javascript
function showGestureStatus(gesture) {
    const statusElement = document.getElementById('gesture-status');
    statusElement.textContent = `現在のジェスチャー: ${gesture}`;
    statusElement.className = 'gesture-active';
    
    // 1秒後にフェードアウト
    setTimeout(() => {
        statusElement.className = 'gesture-inactive';
    }, 1000);
}
```

## チャレンジ課題

1. **マルチハンドサポート**：両手を使った操作を実装
2. **ジェスチャーコンボ**：連続したジェスチャーで特殊効果
3. **カスタムジェスチャーエディタ**：ユーザーが独自のジェスチャーを定義
4. **機械学習統合**：TensorFlow.jsを使った高度なジェスチャー認識

これらの技術を組み合わせて、あなただけのユニークな操作方法を作ってみましょう！