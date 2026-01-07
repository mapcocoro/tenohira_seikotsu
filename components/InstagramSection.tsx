'use client';

import { useEffect, useRef, useState } from 'react';

export default function InstagramSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="news" ref={sectionRef} className="py-16 relative bg-chalkboard-dark/50">
      <div className="container mx-auto px-4">

        {/* Instagram埋め込みエリア */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="max-w-2xl mx-auto">
            {/* Instagramグラデーション枠 */}
            <div
              className="p-1 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, #f9ce34, #ee2a7b, #6228d7, #f9ce34)',
              }}
            >
              <div className="bg-chalkboard-dark rounded-xl p-4">
                {/* ヘッダー */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #f9ce34, #ee2a7b, #6228d7)',
                    }}
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-chalk-white font-bold">@tenohira_seikotsu</p>
                    <p className="text-chalk-white/60 text-sm">てのひら整骨院</p>
                  </div>
                </div>

                {/* 3枚の画像グリッド */}
                <div className="grid grid-cols-3 gap-2">
                  {/*
                    実際のLightWidget埋め込みコードをここに配置
                    LightWidget設定: Photos to show: 3, Columns: 3
                    例:
                    <iframe
                      src="//lightwidget.com/widgets/YOUR_WIDGET_ID.html"
                      scrolling="no"
                      allowTransparency={true}
                      className="w-full"
                      style={{ border: 0, overflow: 'hidden', height: '200px' }}
                    />
                  */}

                  {/* ダミー: 3枚の画像プレースホルダー */}
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-lg overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(249,206,52,0.3), rgba(238,42,123,0.3), rgba(98,40,215,0.3))',
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-chalk-white/40 text-4xl">📷</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* フォローボタン */}
                <div className="mt-4 text-center">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform"
                    style={{
                      background: 'linear-gradient(135deg, #f9ce34, #ee2a7b, #6228d7)',
                    }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    フォローする
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* フォローを促すメッセージ */}
        <div
          className={`mt-8 text-center transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-chalk-yellow/20 text-chalk-yellow px-6 py-3 rounded-full">
            <span className="text-xl animate-bounce">👆</span>
            <span className="font-bold">最新情報をチェック！</span>
          </div>
        </div>
      </div>
    </section>
  );
}
