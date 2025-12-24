# Claude Code 作業メモ

## プロジェクト概要

**クライアント**: てのひら整骨院
**目的**: ポップで楽しい黒板風デザインの整骨院HP作成

## Git情報

- **リポジトリ**: https://github.com/mapcocoro/tenohira_seikotsu.git
- **ブランチ**: main

## デザイン要件

### 参考サイト
- 佐久間宣行さんの公式サイト（ポップで動きのある感じ）

### デザインの方向性
- **背景**: 黒板風（ダークグリーン）
- **フォント**: チョーク手書き風（Yomogi）
- **アクセントカラー**: 黄色、ピンク、ブルー、グリーン
- **特徴**: キャラクターイラストを随所に配置、スクロールで楽しい動き

## 必要なページ/セクション

| セクション | 状態 | ファイル |
|-----------|------|----------|
| ファーストビュー（黒板アート風） | 完了 | `components/HeroSection.tsx` |
| 施術内容 | 完了 | `components/TreatmentSection.tsx` |
| 料金 | 完了 | `components/PriceSection.tsx` |
| アクセス・診療時間 | 完了 | `components/AccessSection.tsx` |
| Instagram埋め込み（LightWidget） | 完了 | `components/InstagramSection.tsx` |

## 未設定項目（素材・情報が必要）

### 1. 基本情報（`components/AccessSection.tsx`）
- [ ] 院名（確認）
- [ ] 住所（〒000-0000 ○○県○○市○○町1-2-3）
- [ ] 電話番号（000-0000-0000）
- [ ] 最寄り駅・アクセス方法
- [ ] 駐車場情報
- [ ] 診療時間（現在は仮の時間を設定）

### 2. Google Map（`components/AccessSection.tsx`）
- [ ] 住所が確定したらGoogle Maps Embed URLを設定

### 3. Instagram（`components/InstagramSection.tsx`）
- [ ] LightWidgetのウィジェットID
- [ ] InstagramアカウントURL

### 4. SNSリンク（各セクション）
- [ ] LINE公式アカウントURL
- [ ] X（Twitter）URL
- [ ] Facebook URL

### 5. 料金情報（`components/PriceSection.tsx`）
- [ ] 保険施術の料金（現在は仮の金額）
- [ ] 自費施術の料金・メニュー
- [ ] 特別メニューの内容

### 6. 施術内容（`components/TreatmentSection.tsx`）
- [ ] 施術メニューの確認・追加・修正

### 7. 画像素材（`public/images/`に配置）
- [ ] ロゴ画像
- [ ] 黒板アートの画像（ファーストビュー用）
- [ ] キャラクターイラスト
- [ ] 院内写真
- [ ] スタッフ写真（必要であれば）

## 作業履歴

### 2024/12/24
- 初期実装完了
  - Next.js 14 プロジェクト作成
  - 黒板風デザインのベース（globals.css, tailwind.config.ts）
  - 全セクションのコンポーネント作成
  - スクロールアニメーション実装
  - GitHubにpush

## 次回作業予定

1. クライアントから素材・情報を受け取る
2. 基本情報を実際の内容に更新
3. Google Mapを埋め込み
4. LightWidgetでInstagramを埋め込み
5. 画像素材を配置・調整
6. デザイン微調整
7. 本番デプロイ

## 開発コマンド

```bash
cd "/Users/runa/projects/◆client/tenohira_seikotsu"

# 開発サーバー起動
npm run dev

# ビルド確認
npm run build

# 変更をコミット
git add . && git commit -m "メッセージ"

# GitHubにpush
git push origin main
```
