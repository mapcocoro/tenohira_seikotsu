# てのひら整骨院 HP

ポップで楽しい黒板風デザインの整骨院ホームページ

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **スタイリング**: Tailwind CSS
- **フォント**: Yomogi（Google Fonts）
- **言語**: TypeScript

## 開発

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 本番サーバー起動
npm run start
```

開発サーバー: http://localhost:3000

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
│   ├── TreatmentSection.tsx  # 施術内容
│   ├── PriceSection.tsx      # 料金表
│   ├── AccessSection.tsx     # アクセス・診療時間
│   ├── InstagramSection.tsx  # Instagram埋め込み
│   └── Footer.tsx       # フッター
├── public/
│   └── images/          # 画像素材を配置
└── tailwind.config.ts   # Tailwind設定（カラーパレット等）
```

## デザインコンセプト

- **参考**: 佐久間宣行さんの公式サイト風のポップなデザイン
- **背景**: 黒板風（ダークグリーン）
- **フォント**: チョーク手書き風
- **カラー**: 黄色、ピンク、ブルー、グリーン、オレンジ
- **特徴**: スクロールアニメーション、ホバーエフェクト、ギザギザ吹き出し

## Git情報

- **リポジトリ**: https://github.com/mapcocoro/tenohira_seikotsu.git
- **ブランチ**: main
