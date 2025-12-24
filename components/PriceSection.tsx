'use client';

import { useEffect, useRef, useState } from 'react';

const priceCategories = [
  {
    category: '保険施術',
    description: '各種健康保険適用',
    items: [
      { name: '初診', price: '1,500円〜', note: '※症状により異なります' },
      { name: '2回目以降', price: '500円〜', note: '' },
    ],
    color: 'chalk-yellow',
    icon: '🏥',
  },
  {
    category: '自費施術',
    description: 'より丁寧なケアをご希望の方に',
    items: [
      { name: '全身調整（60分）', price: '5,500円', note: '' },
      { name: '部分調整（30分）', price: '3,300円', note: '' },
      { name: '骨盤矯正', price: '4,400円', note: '' },
      { name: '産後骨盤矯正', price: '4,400円', note: '' },
    ],
    color: 'chalk-pink',
    icon: '✨',
  },
  {
    category: '特別メニュー',
    description: 'スペシャルケア',
    items: [
      { name: 'ヘッドマッサージ（20分）', price: '2,200円', note: '' },
      { name: 'フットケア（30分）', price: '3,300円', note: '' },
      { name: '美容鍼（要予約）', price: '6,600円', note: '' },
    ],
    color: 'chalk-blue',
    icon: '💎',
  },
];

export default function PriceSection() {
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
    <section id="price" ref={sectionRef} className="py-20 relative bg-chalkboard-dark/50">
      <div className="container mx-auto px-4">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <span className="inline-block bg-chalk-yellow text-chalkboard-dark px-4 py-1 rounded-full text-sm font-bold mb-4 animate-bounce-slow">
            PRICE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold chalk-text text-chalk-white mb-4">
            料金表
          </h2>
          <p className="text-lg text-chalk-white/80">
            ※表示価格は全て税込です
          </p>
        </div>

        {/* 料金カード */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {priceCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className={`chalk-box p-6 text-${category.color} transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              {/* カテゴリヘッダー */}
              <div className="text-center mb-6 pb-4 border-b-2 border-current border-dashed">
                <span className="text-4xl mb-2 inline-block animate-float">{category.icon}</span>
                <h3 className={`text-2xl font-bold text-${category.color}`}>
                  {category.category}
                </h3>
                <p className="text-chalk-white/70 text-sm mt-1">
                  {category.description}
                </p>
              </div>

              {/* 料金リスト */}
              <ul className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={item.name}
                    className={`flex justify-between items-start transition-all duration-500 ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ transitionDelay: `${categoryIndex * 200 + itemIndex * 100}ms` }}
                  >
                    <div className="flex-1">
                      <span className="text-chalk-white font-medium">{item.name}</span>
                      {item.note && (
                        <span className="block text-chalk-white/60 text-xs mt-1">
                          {item.note}
                        </span>
                      )}
                    </div>
                    <span className={`text-${category.color} font-bold text-xl ml-4`}>
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 注意事項 */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block chalk-box p-6 text-chalk-white max-w-2xl">
            <h4 className="text-xl font-bold text-chalk-yellow mb-3">📝 ご利用について</h4>
            <ul className="text-left space-y-2 text-chalk-white/90">
              <li>• 初めての方は問診票の記入がございます（約10分）</li>
              <li>• 保険施術には健康保険証をお持ちください</li>
              <li>• 予約優先制です。お電話またはLINEでご予約ください</li>
              <li>• クレジットカード・電子マネー対応</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 装飾 */}
      <div className="absolute top-20 left-5 text-chalk-green text-4xl opacity-20 animate-sparkle">
        💰
      </div>
      <div className="absolute bottom-20 right-5 text-chalk-orange text-4xl opacity-20 animate-sparkle" style={{ animationDelay: '0.5s' }}>
        💳
      </div>
    </section>
  );
}
