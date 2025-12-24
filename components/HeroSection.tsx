'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center pt-20">
      {/* 装飾用の浮遊するイラスト */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 星の装飾 */}
        <div className="absolute top-20 left-10 text-chalk-yellow text-4xl animate-sparkle">✦</div>
        <div className="absolute top-40 right-20 text-chalk-pink text-3xl animate-sparkle" style={{ animationDelay: '0.3s' }}>✦</div>
        <div className="absolute bottom-40 left-20 text-chalk-blue text-2xl animate-sparkle" style={{ animationDelay: '0.6s' }}>✦</div>
        <div className="absolute bottom-20 right-10 text-chalk-green text-3xl animate-sparkle" style={{ animationDelay: '0.9s' }}>✦</div>

        {/* 手のイラスト（プレースホルダー） */}
        <div className="absolute top-1/4 left-5 md:left-20 text-6xl md:text-8xl animate-float opacity-30">
          🤲
        </div>
        <div className="absolute bottom-1/4 right-5 md:right-20 text-6xl md:text-8xl animate-float opacity-30" style={{ animationDelay: '1.5s' }}>
          ✋
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* ギザギザ吹き出し */}
        <div
          className={`inline-block mb-8 transition-all duration-700 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        >
          <div className="burst-bubble text-xl md:text-2xl font-bold animate-wiggle">
            ようこそ！
          </div>
        </div>

        {/* メインタイトル */}
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 chalk-text transition-all duration-700 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-chalk-yellow">てのひら</span>
          <br className="md:hidden" />
          <span className="text-chalk-white">整骨院</span>
        </h1>

        {/* キャッチコピー */}
        <p
          className={`text-xl md:text-3xl text-chalk-white chalk-text mb-8 transition-all duration-700 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          あなたの身体を
          <span className="text-chalk-pink inline-block animate-bounce-slow">やさしく</span>
          ケアします
        </p>

        {/* サブテキスト吹き出し */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-600 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="speech-bubble text-sm md:text-base">肩こり</span>
          <span className="speech-bubble text-sm md:text-base bg-chalk-pink">腰痛</span>
          <span className="speech-bubble text-sm md:text-base bg-chalk-blue">スポーツ障害</span>
          <span className="speech-bubble text-sm md:text-base bg-chalk-green text-chalkboard-dark">産後ケア</span>
        </div>

        {/* CTAボタン */}
        <div
          className={`flex flex-col md:flex-row justify-center gap-4 transition-all duration-700 delay-800 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="#access"
            className="pop-button bg-chalk-yellow text-chalkboard-dark px-8 py-4 rounded-full text-xl font-bold hover:bg-chalk-orange transition-colors"
          >
            📍 アクセスを見る
          </a>
          <a
            href="tel:000-0000-0000"
            className="pop-button bg-chalk-pink text-chalkboard-dark px-8 py-4 rounded-full text-xl font-bold hover:bg-chalk-orange transition-colors"
          >
            📞 電話する
          </a>
        </div>

        {/* スクロールインジケーター */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 delay-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col items-center text-chalk-white/60">
            <span className="text-sm mb-2">scroll</span>
            <div className="w-6 h-10 border-2 border-chalk-white/60 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-chalk-white/60 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* 黒板の木枠風装飾（画面端） */}
      <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-amber-900 to-transparent opacity-30" />
      <div className="absolute top-0 right-0 w-4 h-full bg-gradient-to-l from-amber-900 to-transparent opacity-30" />
    </section>
  );
}
