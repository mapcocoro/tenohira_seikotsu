'use client';

import { useEffect, useRef, useState } from 'react';

const treatments = [
  {
    id: 1,
    icon: '💆',
    title: '肩こり・首こり',
    description: 'デスクワークや姿勢の悪さからくる肩こり・首こりを、丁寧な手技で改善します。',
    color: 'chalk-yellow',
  },
  {
    id: 2,
    icon: '🦴',
    title: '腰痛・ぎっくり腰',
    description: '急な痛みから慢性的な腰痛まで、原因を見極めて適切な施術を行います。',
    color: 'chalk-pink',
  },
  {
    id: 3,
    icon: '⚽',
    title: 'スポーツ障害',
    description: '部活やスポーツでのケガ、パフォーマンス向上のためのケアをサポート。',
    color: 'chalk-blue',
  },
  {
    id: 4,
    icon: '👶',
    title: '産後ケア',
    description: '産後の骨盤矯正や身体のバランスを整え、育児疲れをケアします。',
    color: 'chalk-green',
  },
  {
    id: 5,
    icon: '🦵',
    title: '膝・関節の痛み',
    description: '加齢やスポーツによる膝・関節の痛みを、根本から改善していきます。',
    color: 'chalk-orange',
  },
  {
    id: 6,
    icon: '😴',
    title: '疲労回復・リラクゼーション',
    description: '日々の疲れを癒し、心身ともにリフレッシュできる施術を提供。',
    color: 'chalk-white',
  },
];

export default function TreatmentSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute('data-id'));
            setVisibleItems((prev) => prev.includes(id) ? prev : [...prev, id]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('.treatment-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="treatment" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <span className="inline-block bg-chalk-pink text-chalkboard-dark px-4 py-1 rounded-full text-sm font-bold mb-4 animate-bounce-slow">
            TREATMENT
          </span>
          <h2 className="text-4xl md:text-5xl font-bold chalk-text text-chalk-white mb-4">
            施術内容
          </h2>
          <p className="text-lg text-chalk-white/80">
            こんなお悩み、ありませんか？
          </p>
        </div>

        {/* 施術カード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={treatment.id}
              data-id={treatment.id}
              className={`treatment-card chalk-box p-6 text-${treatment.color} transition-all duration-500 hover:scale-105 cursor-pointer ${
                visibleItems.includes(treatment.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* アイコン */}
              <div className="text-5xl mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                {treatment.icon}
              </div>

              {/* タイトル */}
              <h3 className={`text-2xl font-bold mb-3 chalk-underline text-${treatment.color}`}>
                {treatment.title}
              </h3>

              {/* 説明 */}
              <p className="text-chalk-white/90 leading-relaxed">
                {treatment.description}
              </p>

              {/* 装飾 */}
              <div className="absolute top-2 right-2 text-xl opacity-50">✦</div>
            </div>
          ))}
        </div>

        {/* 補足テキスト */}
        <div className="text-center mt-12">
          <div className="inline-block speech-bubble bg-chalk-yellow">
            <p className="text-lg">
              上記以外のお悩みもお気軽にご相談ください！
            </p>
          </div>
        </div>
      </div>

      {/* 装飾 */}
      <div className="absolute top-10 right-10 text-chalk-yellow text-6xl opacity-20 animate-float">
        🤲
      </div>
      <div className="absolute bottom-10 left-10 text-chalk-pink text-5xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        💪
      </div>
    </section>
  );
}
