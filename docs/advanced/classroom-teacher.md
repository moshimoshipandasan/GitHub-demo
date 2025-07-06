---
sidebar_position: 2
title: "Advanced Day 2: GitHub Classroom講師体験"
---

# Advanced Day 2: GitHub Classroom講師体験 👨‍🏫

## 🎯 今日の目標
GitHub Classroomを使って、プログラミング課題の配布・採点・フィードバックを自動化する方法を学びます。

## 📚 学習内容

### 1. GitHub Classroomとは？

GitHub Classroomは、教育現場でGitHubを活用するための無料ツールです。

#### 主な機能
- 📝 課題の一括配布
- 🤖 自動採点機能
- 📊 進捗の可視化
- 💬 個別フィードバック
- 🔒 プライベートリポジトリの提供

#### メリット
- **講師側**: 課題管理の効率化
- **生徒側**: 実践的なGit/GitHub体験
- **双方**: リアルタイムな進捗確認

### 2. Organization作成手順

#### Step 1: GitHub Organizationの作成
1. GitHubにログイン
2. 右上のプロフィールアイコン → 「Your organizations」
3. 「New organization」をクリック
4. 「Create a free organization」を選択

#### Step 2: Organization情報の入力
```
Organization account name: your-school-2025
Contact email: your-email@example.com
This organization belongs to: A business or institution
```

> 💡 **命名のコツ**: 学校名-年度 の形式がおすすめ

#### Step 3: メンバーの招待（後でも可）
- 共同講師がいる場合は招待
- Ownerロールを付与して共同管理

### 3. GitHub Classroomのセットアップ

#### Step 1: Classroom作成
1. [classroom.github.com](https://classroom.github.com)にアクセス
2. 「Sign in with GitHub」でログイン
3. 「New classroom」をクリック
4. 作成したOrganizationを選択

#### Step 2: Classroom情報の設定
```
Classroom name: プログラミング基礎2025
Identifier: prog-basic-2025
```

#### Step 3: 生徒の招待設定
- **Roster（名簿）の作成**
  - 生徒の本名とGitHubアカウントを紐付け
  - CSVでの一括インポート可能

### 4. 課題テンプレートの作成

#### 基本的な課題構造
```
assignment-template/
├── README.md          # 課題説明
├── src/              # 生徒が編集するファイル
│   └── main.py       # スターターコード
├── tests/            # 自動テスト
│   └── test_main.py  # テストコード
└── .github/
    └── classroom/
        └── autograding.json  # 自動採点設定
```

#### README.mdの例
```markdown
# 課題1: Hello World関数の実装

## 課題内容
`src/main.py`の`greeting`関数を完成させてください。

## 要件
- 引数`name`を受け取る
- "Hello, {name}!"という文字列を返す
- nameが空の場合は"Hello, World!"を返す

## 提出方法
1. このリポジトリをクローン
2. `src/main.py`を編集
3. コミット＆プッシュ
4. 自動テストの結果を確認

## 評価基準
- 基本実装: 60点
- エッジケース対応: 40点
```

#### スターターコード例（src/main.py）
```python
def greeting(name):
    """
    名前を受け取って挨拶を返す関数
    
    Args:
        name (str): 挨拶する相手の名前
        
    Returns:
        str: 挨拶メッセージ
    """
    # ここにコードを書いてください
    pass


# テスト実行用
if __name__ == "__main__":
    print(greeting("Alice"))
    print(greeting(""))
```

### 5. 自動採点の設定

#### autograding.jsonの作成
```json
{
  "tests": [
    {
      "name": "基本的な挨拶テスト",
      "setup": "pip install pytest",
      "run": "pytest tests/test_main.py::test_basic_greeting -v",
      "input": "",
      "output": "",
      "comparison": "included",
      "timeout": 10,
      "points": 60
    },
    {
      "name": "エッジケーステスト",
      "setup": "pip install pytest",
      "run": "pytest tests/test_main.py::test_edge_cases -v",
      "input": "",
      "output": "",
      "comparison": "included",
      "timeout": 10,
      "points": 40
    }
  ]
}
```

#### テストコード例（tests/test_main.py）
```python
import sys
sys.path.append('../src')
from main import greeting

def test_basic_greeting():
    """基本的な挨拶のテスト"""
    assert greeting("Alice") == "Hello, Alice!"
    assert greeting("Bob") == "Hello, Bob!"

def test_edge_cases():
    """エッジケースのテスト"""
    assert greeting("") == "Hello, World!"
    assert greeting(None) == "Hello, World!"
```

### 6. 課題の配布

#### Step 1: Assignment作成
1. Classroomダッシュボードで「New assignment」
2. 以下を設定：
   - Title: 課題1 - Hello World関数
   - Type: Individual assignment（個人課題）
   - Repository prefix: hello-world
   - Visibility: Private

#### Step 2: テンプレートリポジトリの指定
1. 「Add a template repository」をクリック
2. 作成した課題テンプレートを選択
3. 「Continue」をクリック

#### Step 3: 自動採点の有効化
1. 「Enable autograding」にチェック
2. 「Import from repository」で設定をインポート

#### Step 4: 招待リンクの共有
```
https://classroom.github.com/a/xxxxxxxxxxx
```
このリンクを生徒に共有

### 7. 生徒管理のコツ

#### 進捗管理
```markdown
## 週次チェックリスト
- [ ] 全生徒の提出状況確認
- [ ] 自動テストの失敗パターン分析
- [ ] 個別フィードバックが必要な生徒の特定
- [ ] 共通の間違いについてクラス全体にフィードバック
```

#### 効果的なフィードバック方法
1. **Pull Request機能の活用**
   - コードの特定行にコメント
   - 改善提案の具体例を提示

2. **Issues機能の活用**
   - よくある質問をFAQとして整理
   - 生徒同士の質問・回答を促進

3. **定期的な振り返り**
   - 提出率の推移を可視化
   - 改善点を次の課題に反映

### 8. トラブルシューティング

#### よくある問題と対処法

##### 生徒がリポジトリにアクセスできない
```bash
# Organization設定を確認
Settings → Member privileges → Base permissions
→ "Read"に設定されているか確認
```

##### 自動採点が動作しない
- GitHub Actions が有効になっているか確認
- テストコードのパスが正しいか確認
- requirements.txt がある場合は含まれているか確認

##### 提出期限の設定
```markdown
⚠️ GitHub Classroomには提出期限機能がありません
代替案：
1. READMEに明記
2. 期限後は手動でアクセス権限を変更
3. Google Calendarなどで別途管理
```

## 🎯 実践課題

### 課題: 実際にClassroomを作成してみよう

1. **Organization作成**
   - 練習用のOrganizationを作成
   - 名前は`test-classroom-あなたの名前`

2. **簡単な課題テンプレート作成**
   - FizzBuzz問題
   - 自動テスト付き

3. **テスト配布**
   - 自分で生徒役もやってみる
   - 提出から採点まで体験

## 💡 応用テクニック

### GitHub Actionsを使った高度な自動化
```yaml
name: 提出時通知
on:
  push:
    branches: [ main ]
jobs:
  notify:
    runs-on: ubuntu-latest
    steps:
      - name: Slack通知
        run: |
          curl -X POST -H 'Content-type: application/json' \
          --data '{"text":"新しい提出がありました！"}' \
          ${{ secrets.SLACK_WEBHOOK }}
```

### 成績管理スプレッドシートとの連携
- GitHub APIを使用して提出状況を自動取得
- Google Apps Scriptで成績表に自動反映

## 📝 チェックリスト

- [ ] Organizationを作成した
- [ ] GitHub Classroomにサインインした
- [ ] Classroomを作成した
- [ ] 課題テンプレートを作成した
- [ ] 自動採点を設定した
- [ ] 課題を配布した
- [ ] 生徒視点で提出を体験した
- [ ] 採点結果を確認した

## 🎉 まとめ

GitHub Classroomを使うことで、プログラミング教育が大きく効率化されます。
- 課題管理の自動化
- リアルタイムなフィードバック
- 実践的なGitHub体験の提供

次回は、GitHub Actionsを使ったさらに高度な自動化について学びます！

## 🔗 参考リンク
- [GitHub Classroom公式ドキュメント](https://docs.github.com/en/education/manage-coursework-with-github-classroom)
- [Autograding設定ガイド](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/use-autograding)
- [教育者向けGitHub](https://education.github.com/)