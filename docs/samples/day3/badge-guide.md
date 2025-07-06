# GitHubプロフィール用バッジガイド 🏷️

## 基本的なバッジの作り方

### Shields.ioを使った基本形
```
https://img.shields.io/badge/{ラベル}-{メッセージ}-{色}
```

### プログラミング言語バッジ

#### 人気の言語
```markdown
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![C++](https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Go](https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white)
![Rust](https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white)
![Swift](https://img.shields.io/badge/Swift-FA7343?style=for-the-badge&logo=swift&logoColor=white)
```

### フレームワーク・ライブラリ

#### Web開発
```markdown
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
```

### ツール・プラットフォーム

#### 開発ツール
```markdown
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)
```

### データベース
```markdown
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
```

### SNS・連絡先
```markdown
![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)
![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)
![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)
![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)
![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)
```

### 学習プラットフォーム
```markdown
![Udemy](https://img.shields.io/badge/Udemy-EC5252?style=for-the-badge&logo=Udemy&logoColor=white)
![Coursera](https://img.shields.io/badge/Coursera-0056D2?style=for-the-badge&logo=Coursera&logoColor=white)
![freeCodeCamp](https://img.shields.io/badge/freeCodeCamp-0A0A23?style=for-the-badge&logo=freeCodeCamp&logoColor=white)
```

## バッジのスタイル

### style パラメータ
- `flat` - フラット
- `flat-square` - 角張ったフラット
- `plastic` - 立体的
- `for-the-badge` - 大きめ（おすすめ）
- `social` - SNS風

### 例
```markdown
![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=plastic&logo=python&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=social&logo=python)
```

## カスタムバッジ

### 自分だけのバッジを作る
```markdown
![Custom Badge](https://img.shields.io/badge/好きな文字-好きな色-色コード?style=for-the-badge)
![Learning](https://img.shields.io/badge/Learning-Programming-FF6B6B?style=for-the-badge)
![Grade](https://img.shields.io/badge/Grade-High_School-4ECDC4?style=for-the-badge)
![Hobby](https://img.shields.io/badge/Hobby-Gaming-FFE66D?style=for-the-badge)
```

### 色の指定方法
- 色名: `red`, `green`, `blue`, `yellow`, `orange`, `purple`
- HEX: `FF0000`, `00FF00`, `0000FF`
- ブランドカラー: 多くのロゴには公式カラーが自動適用される

## 動的バッジ

### GitHub Stats
```markdown
![GitHub stats](https://github-readme-stats.vercel.app/api?username=あなたのユーザー名&show_icons=true&theme=radical)
```

### 言語統計
```markdown
![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=あなたのユーザー名&layout=compact&theme=radical)
```

### ストリーク統計
```markdown
![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=あなたのユーザー名&theme=radical)
```

### 訪問者カウンター
```markdown
![](https://komarev.com/ghpvc/?username=あなたのユーザー名&color=green)
```

## テーマカラー
GitHub Readme Statsで使えるテーマ:
- `default`
- `dark`
- `radical`
- `merko`
- `gruvbox`
- `tokyonight`
- `onedark`
- `cobalt`
- `synthwave`
- `highcontrast`
- `dracula`

## 組み合わせ例

### スキルセクション
```markdown
## 🛠️ Skills
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
```

### 連絡先セクション
```markdown
## 📫 Connect with me
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/your-handle)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your-email@example.com)
```

## Tips
1. **統一感を大切に**: 同じstyleパラメータを使う
2. **色の組み合わせ**: 見やすい配色を心がける
3. **アイコンの活用**: logoパラメータで視認性UP
4. **リンク化**: バッジをクリック可能にする
5. **適度な数**: 多すぎると見づらくなるので注意

## リソース
- [Shields.io](https://shields.io/) - バッジ生成
- [Simple Icons](https://simpleicons.org/) - ロゴ一覧
- [GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats) - 統計表示