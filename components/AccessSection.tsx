'use client';

import { useEffect, useRef, useState } from 'react';

const businessHours = [
  { day: '月', am: '○', pm: '○' },
  { day: '火', am: '○', pm: '○' },
  { day: '水', am: '○', pm: '○' },
  { day: '木', am: '○', pm: '' },
  { day: '金', am: '○', pm: '○' },
  { day: '土', am: '○', pm: '' },
  { day: '日', am: '休', pm: '休' },
  { day: '祝', am: '休', pm: '休' },
];

export default function AccessSection() {
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
    <section id="access" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <span className="inline-block bg-chalk-green text-chalkboard-dark px-4 py-1 rounded-full text-sm font-bold mb-4 animate-bounce-slow">
            ACCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold chalk-text text-chalk-white mb-4">
            アクセス・診療時間
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 左側：基本情報 */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* 基本情報カード */}
            <div className="chalk-box p-6 text-chalk-white mb-6">
              <h3 className="text-2xl font-bold text-chalk-yellow mb-4 flex items-center gap-2">
                <span className="animate-float">🏠</span> 基本情報
              </h3>
              <dl className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="text-chalk-pink font-bold min-w-[100px]">院名</dt>
                  <dd>てのひら整骨院</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="text-chalk-pink font-bold min-w-[100px]">住所</dt>
                  <dd>
                    〒578-0942<br />
                    大阪府東大阪市若江東町4-2-8
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="text-chalk-pink font-bold min-w-[100px]">電話番号</dt>
                  <dd>
                    <a href="tel:06-7172-4941" className="text-chalk-yellow hover:text-chalk-orange transition-colors text-xl font-bold">
                      06-7172-4941
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="text-chalk-pink font-bold min-w-[100px]">アクセス</dt>
                  <dd>
                    近鉄奈良線 若江岩田駅 徒歩12分<br />
                    <span className="text-chalk-yellow">コープ若江店の目の前！</span>
                  </dd>
                </div>
              </dl>
            </div>

            {/* 診療時間 */}
            <div className="chalk-box p-6 text-chalk-white">
              <h3 className="text-2xl font-bold text-chalk-yellow mb-4 flex items-center gap-2">
                <span className="animate-float">⏰</span> 診療時間
              </h3>

              {/* 診療時間テーブル */}
              <div className="overflow-x-auto">
                <table className="w-full text-center">
                  <thead>
                    <tr className="border-b-2 border-chalk-white/30">
                      <th className="py-2"></th>
                      {businessHours.map((item) => (
                        <th key={item.day} className="py-2 px-2 text-chalk-pink">
                          {item.day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-chalk-white/20">
                      <td className="py-3 text-chalk-blue font-bold text-sm">
                        9:00<br />〜<br />12:30
                      </td>
                      {businessHours.map((item) => (
                        <td
                          key={`am-${item.day}`}
                          className={`py-3 px-2 ${
                            item.am === '休'
                              ? 'text-chalk-white/40'
                              : 'text-chalk-green'
                          }`}
                        >
                          {item.am}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 text-chalk-blue font-bold text-sm">
                        15:30<br />〜<br />19:30
                      </td>
                      {businessHours.map((item) => (
                        <td
                          key={`pm-${item.day}`}
                          className={`py-3 px-2 ${
                            item.pm === '休'
                              ? 'text-chalk-white/40'
                              : item.pm === ''
                              ? 'text-chalk-white/40'
                              : 'text-chalk-green'
                          }`}
                        >
                          {item.pm === '' ? '−' : item.pm}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 凡例 */}
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <span className="text-chalk-green">○</span> 診療
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-chalk-white/40">−</span> 午前のみ（木・土）
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-chalk-white/40">休</span> 休診
                </span>
              </div>
            </div>
          </div>

          {/* 右側：地図 */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="chalk-box p-4 text-chalk-white h-full">
              <h3 className="text-2xl font-bold text-chalk-yellow mb-4 flex items-center gap-2">
                <span className="animate-float">📍</span> 地図
              </h3>
              {/* Google Map埋め込み */}
              <div className="relative w-full h-80 lg:h-[calc(100%-60px)] bg-chalkboard-dark rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.123456789!2d135.5889!3d34.6689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQwJzA4LjAiTiAxMzXCsDM1JzIwLjAiRQ!5e0!3m2!1sja!2sjp!4v1704567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="てのひら整骨院 地図"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="tel:06-7172-4941"
              className="pop-button bg-chalk-yellow text-chalkboard-dark px-8 py-4 rounded-full text-xl font-bold inline-flex items-center justify-center gap-2 hover:bg-chalk-orange transition-colors"
            >
              📞 お電話でのご予約・お問合せ
            </a>
          </div>
        </div>
      </div>

      {/* 装飾 */}
      <div className="absolute top-10 right-10 text-chalk-blue text-5xl opacity-20 animate-float">
        🚗
      </div>
      <div className="absolute bottom-10 left-10 text-chalk-yellow text-4xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        🚶
      </div>
    </section>
  );
}
