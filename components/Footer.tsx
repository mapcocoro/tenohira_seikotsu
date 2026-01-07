'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-chalkboard-dark py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* メインフッター */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* ロゴ・説明 */}
          <div>
            <h3 className="text-2xl font-bold text-chalk-yellow chalk-text mb-4">
              🤲 てのひら整骨院
            </h3>
            <p className="text-chalk-white/70 leading-relaxed">
              独自の「てのひら式整体」で<br />
              全身を調整。コープ若江店の目の前！
            </p>
          </div>

          {/* ナビゲーション */}
          <div>
            <h4 className="text-lg font-bold text-chalk-pink mb-4">メニュー</h4>
            <nav className="flex flex-col gap-2">
              <a href="#news" className="text-chalk-white/70 hover:text-chalk-yellow transition-colors">
                最新情報
              </a>
              <a href="#treatment" className="text-chalk-white/70 hover:text-chalk-yellow transition-colors">
                施術内容
              </a>
              <a href="#staff" className="text-chalk-white/70 hover:text-chalk-yellow transition-colors">
                院長紹介
              </a>
              <a href="#price" className="text-chalk-white/70 hover:text-chalk-yellow transition-colors">
                料金
              </a>
              <a href="#access" className="text-chalk-white/70 hover:text-chalk-yellow transition-colors">
                アクセス
              </a>
            </nav>
          </div>

          {/* 連絡先 */}
          <div>
            <h4 className="text-lg font-bold text-chalk-blue mb-4">お問い合わせ</h4>
            <div className="space-y-2 text-chalk-white/70">
              <p>
                <span className="text-chalk-green">📍</span> 〒578-0942<br />
                <span className="pl-5">大阪府東大阪市若江東町4-2-8</span>
              </p>
              <p>
                <span className="text-chalk-yellow">📞</span>{' '}
                <a href="tel:06-7172-4941" className="hover:text-chalk-yellow transition-colors font-bold">
                  06-7172-4941
                </a>
              </p>
              <p>
                <span className="text-chalk-pink">⏰</span> 9:00〜12:30 / 15:30〜19:30
              </p>
              <p className="text-sm text-chalk-white/50">※木・土は午前のみ／日曜・祝日休診</p>
            </div>
          </div>
        </div>

        {/* 区切り線 */}
        <div className="section-divider" />

        {/* コピーライト */}
        <div className="text-center text-chalk-white/50 text-sm">
          <p>© {currentYear} てのひら整骨院 All rights reserved.</p>
        </div>
      </div>

      {/* 装飾 */}
      <div className="absolute top-5 right-5 text-chalk-yellow text-2xl opacity-10 animate-sparkle">
        ✦
      </div>
      <div className="absolute bottom-5 left-5 text-chalk-pink text-2xl opacity-10 animate-sparkle" style={{ animationDelay: '0.5s' }}>
        ✦
      </div>
    </footer>
  );
}
