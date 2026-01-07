'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

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
    <section id="instagram" ref={sectionRef} className="py-16 relative bg-chalkboard-dark/50">
      <div className="container mx-auto px-4">

        {/* ポップなレトロテレビ */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
            {/* TV本体 */}
            <div className="relative">
              {/* TV画像 */}
              <Image
                src="/images/tv-frame.png"
                alt="レトロテレビ"
                width={800}
                height={800}
                className="w-full h-auto"
                priority
              />

              {/* Instagram埋め込みエリア（画面部分に配置） */}
              <div
                className="absolute overflow-hidden"
                style={{
                  top: '22%',
                  left: '10%',
                  width: '54%',
                  height: '52%',
                }}
              >
                {/*
                  実際のLightWidget埋め込みコードをここに配置
                  LightWidget設定: Photos to show: 1, Columns: 1
                  例:
                  <iframe
                    src="//lightwidget.com/widgets/YOUR_WIDGET_ID.html"
                    scrolling="no"
                    allowTransparency={true}
                    className="w-full h-full"
                    style={{ border: 0, overflow: 'hidden' }}
                  />
                */}

                {/* ダミー: 最新の1枚を大きく表示（透過背景） */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <p className="text-base font-bold text-gray-800 drop-shadow-sm">Instagram</p>
                    <p className="text-sm text-gray-600">最新の投稿</p>
                  </div>
                </div>
              </div>
            </div>

            {/* フォローボタン */}
            <div className="mt-6 text-center">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="pop-button inline-flex items-center gap-2 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm font-bold hover:scale-105 transition-transform"
                style={{
                  background: 'linear-gradient(135deg, #8b5cf6, #ec4899, #f97316)',
                  boxShadow: '0 4px 12px rgba(236,72,153,0.4)'
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

        {/* フォローを促すメッセージ */}
        <div
          className={`mt-10 text-center transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-chalk-yellow/20 text-chalk-yellow px-8 py-4 rounded-full text-lg">
            <span className="text-2xl animate-bounce">👆</span>
            <span className="font-bold">フォローして最新情報をチェック！</span>
          </div>
        </div>

        {/* SNSリンク */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-chalk-white/70 mb-4">他のSNSもチェック！</p>
          <div className="flex justify-center gap-4">
            {/* LINE */}
            <a
              href="#"
              className="pop-button w-14 h-14 rounded-full bg-[#00B900] flex items-center justify-center text-white hover:scale-110 transition-transform"
              aria-label="LINE"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
              </svg>
            </a>
            {/* X (Twitter) */}
            <a
              href="#"
              className="pop-button w-14 h-14 rounded-full bg-black flex items-center justify-center text-white hover:scale-110 transition-transform"
              aria-label="X"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="#"
              className="pop-button w-14 h-14 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* 装飾 */}
      <div className="absolute top-10 left-10 text-chalk-pink text-4xl opacity-20 animate-sparkle">
        💖
      </div>
      <div className="absolute bottom-10 right-10 text-chalk-yellow text-4xl opacity-20 animate-sparkle" style={{ animationDelay: '0.5s' }}>
        ⭐
      </div>
    </section>
  );
}
