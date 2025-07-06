# あいさつプログラム
# このファイルをブランチで編集してみましょう！

def greeting(name):
    """名前を受け取ってあいさつを返す関数"""
    return f"こんにちは、{name}さん！"

# メイン処理
if __name__ == "__main__":
    # ここに自分の名前を入れてください
    your_name = "あなたの名前"
    
    message = greeting(your_name)
    print(message)
    
    # TODO: 時間帯によってあいさつを変える機能を追加