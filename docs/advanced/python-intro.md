---
sidebar_position: 5
---

# Python入門ガイド 🐍

## はじめに

このページでは、Pythonプログラミングの基礎を学びます。

## 基本的な文法

### 変数と出力

```python
# 変数の定義
name = "太郎"
age = 15

# 出力
print(f"私の名前は{name}です。{age}歳です。")
```

### リストと繰り返し

```python
# リストの作成
fruits = ["りんご", "バナナ", "オレンジ"]

# 繰り返し処理
for fruit in fruits:
    print(f"私は{fruit}が好きです")
```

## 実践例：簡単な計算機

```python
def calculator():
    num1 = float(input("最初の数字: "))
    num2 = float(input("次の数字: "))
    operation = input("演算子 (+, -, *, /): ")
    
    if operation == "+":
        result = num1 + num2
    elif operation == "-":
        result = num1 - num2
    elif operation == "*":
        result = num1 * num2
    elif operation == "/":
        result = num1 / num2
    else:
        result = "無効な演算子"
    
    print(f"結果: {result}")

# 実行
calculator()
```

## まとめ

Pythonは初心者にも優しいプログラミング言語です。
ぜひ実際に手を動かして試してみてください！