# てのひら整骨院 HP（Pattern 1）

ポップで楽しい黒板風デザインの整骨院ホームページ

## 技術スタック

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- フォント: Yomogi（Google Fonts）

## ディレクトリ構成

```
tenohira_seikotsu/
├── app/
│   ├── globals.css      # グローバルスタイル（黒板風CSS）
│   ├── layout.tsx       # レイアウト
│   └── page.tsx         # メインページ
├── components/
│   ├── Header.tsx       # ヘッダー・ナビゲーション
│   ├── HeroSection.tsx  # ファーストビュー
│   ├── InstagramSection.tsx  # 最新情報（Instagram埋め込み）
│   ├── TreatmentSection.tsx  # 施術内容
│   ├── StaffSection.tsx      # 院長紹介
│   ├── PriceSection.tsx      # 料金表
│   ├── AccessSection.tsx     # アクセス・診療時間
│   └── Footer.tsx       # フッター
├── public/images/       # 画像素材
│   └── tv-frame.png     # レトロTV画像（別デザイン用）
└── tailwind.config.ts   # Tailwind設定（カラーパレット等）
```

## ページ構成

1. Hero（ファーストビュー）
2. 最新情報（Instagram埋め込み - LightWidget使用）
3. 施術内容
4. 院長紹介
5. 料金表
6. アクセス・診療時間

## デザインコンセプト

- 参考: 佐久間宣行さんの公式サイト風のポップなデザイン
- 背景: 黒板風（ダークグリーン）
- フォント: チョーク手書き風
- カラー: 黄色、ピンク、ブルー、グリーン、オレンジ
- 特徴: スクロールアニメーション、ホバーエフェクト、ギザギザ吹き出し

## Instagram埋め込み

LightWidgetを使用して最新投稿を表示:
- 設定: Photos to show: 3, Columns: 3
- InstagramSection.tsx内のコメントを参照

## 開発コマンド

```bash
npm install      # 依存関係インストール
npm run dev      # 開発サーバー起動 (localhost:3000)
npm run build    # ビルド
```

## Git履歴メモ

- `fd0716d`: レトロTV風Instagramセクション（別デザイン案）

## セキュリティ注意事項

クライアントワークのため、以下に注意：

- 機密情報（APIキー、認証情報）は絶対にコミットしない
- 秘密情報は`.env.local`に格納（`.gitignore`対象）
- 外部埋め込み（Google Maps等）は公式の方法のみ使用
- フォーム等を追加する場合は入力値のサニタイズを徹底
- `npm audit`で定期的に脆弱性チェック
