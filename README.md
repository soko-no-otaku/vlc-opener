# vlc-opener

URL を受け取り、iOS では VLC アプリへ、それ以外の環境では元の URL へリダイレクトする静的サイトです。

## リダイレクト仕様

### パラメータ

| パラメータ | 必須 | 説明 |
|---|---|---|
| `to` | ✓ | リダイレクト先の URL（URL エンコードされた文字列） |

### 挙動

| 条件 | 動作 |
|---|---|
| `to` パラメータが未指定または空 | エラーメッセージを表示して停止 |
| iOS（iPad / iPhone / iPod）でアクセス | `vlc-x-callback://x-callback-url/download?url={to}` へリダイレクトし、VLC アプリでダウンロードを開始 |
| iOS 以外でアクセス | `to` の値をデコードして、その URL へ直接リダイレクト |

### URL 例

```
https://soko-no-otaku.github.io/vlc-opener/?to=https%3A%2F%2Fexample.com%2Fvideo.mp4
```

## 技術スタック

- **TypeScript**: ロジック実装
- **Vite**: ビルドツール
- **GitHub Pages**: ホスティング
- **GitHub Actions**: CI/CD（自動デプロイ）

## ローカル開発

```bash
# 依存パッケージのインストール
pnpm install

# 開発サーバーの起動（http://localhost:5173/vlc-opener/）
pnpm dev
```
