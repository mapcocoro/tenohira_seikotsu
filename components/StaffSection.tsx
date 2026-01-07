'use client';

import { useEffect, useRef, useState } from 'react';

export default function StaffSection() {
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
    <section id="staff" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* セクションタイトル */}
        <div className="text-center mb-12">
          <h2 className="chalk-title text-chalk-yellow text-3xl md:text-4xl">
            院長紹介
          </h2>
          <div className="chalk-underline mx-auto mt-2" />
        </div>

        {/* 院長カード */}
        <div className={`max-w-2xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-chalkboard-dark/80 rounded-3xl border-4 border-chalk-yellow/30 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              {/* 写真 */}
              <div className="relative">
                {/* 実際の写真がある場合 */}
                {/* <Image
                  src="/images/director.jpg"
                  alt="院長"
                  fill
                  className="object-cover rounded-2xl"
                /> */}

                {/* プレースホルダー */}
                <div className="aspect-square rounded-2xl flex items-center justify-center bg-chalk-white/10 border-2 border-dashed border-chalk-white/30">
                  <div className="text-center text-chalk-white/50">
                    <div className="w-20 h-20 bg-chalk-yellow/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-10 h-10 text-chalk-yellow/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-sm">院長写真</p>
                  </div>
                </div>
              </div>

              {/* プロフィール */}
              <div className="flex flex-col justify-center">
                <div className="mb-4">
                  <p className="text-chalk-pink text-sm font-medium mb-1">院長</p>
                  <h3 className="text-2xl font-bold text-chalk-white">
                    {/* 名前を入れてください */}
                    〇〇 〇〇
                  </h3>
                </div>

                {/* 一言メッセージ */}
                <div className="bg-chalk-yellow/10 rounded-xl p-4 mb-4 border border-chalk-yellow/20">
                  <p className="text-chalk-white leading-relaxed text-sm">
                    「患者様一人ひとりの痛みに向き合い、
                    根本から改善できるよう
                    丁寧に施術いたします。」
                  </p>
                </div>

                {/* 資格・経歴など */}
                <div className="space-y-2 text-sm text-chalk-white/80">
                  <p className="flex items-center gap-2">
                    <span className="text-chalk-green">✓</span>
                    柔道整復師
                  </p>
                  {/* 必要に応じて追加 */}
                  {/* <p className="flex items-center gap-2">
                    <span className="text-chalk-green">✓</span>
                    〇〇資格
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 装飾 */}
      <div className="absolute top-10 right-10 text-chalk-blue text-3xl opacity-20">
        ⭐
      </div>
      <div className="absolute bottom-10 left-10 text-chalk-pink text-3xl opacity-20">
        💪
      </div>
    </section>
  );
}
