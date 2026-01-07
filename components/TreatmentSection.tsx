'use client';

import { useEffect, useRef, useState } from 'react';

export default function TreatmentSection() {
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
          <p className="text-lg text-chalk-white/80 max-w-2xl mx-auto">
            コープ若江店の向かいにある、黄色い看板の整骨院です。<br />
            マッサージでは取れない痛み、病院で年齢のせいと言われた痛み、<br className="hidden md:block" />
            もう一度原因を探してみませんか？
          </p>
        </div>

        {/* てのひら式整体 */}
        <div className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="chalk-box p-8">
            <h3 className="text-3xl font-bold text-chalk-yellow mb-6 flex items-center gap-3">
              <span className="animate-float">🤲</span>
              「てのひら式整体」とは？
            </h3>

            {/* 検査 */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-chalk-blue text-chalkboard-dark px-4 py-2 rounded-full font-bold text-lg">
                  Step 1
                </span>
                <h4 className="text-2xl font-bold text-chalk-blue">まずは検査から</h4>
              </div>
              <p className="text-chalk-white/90 leading-relaxed pl-4 border-l-4 border-chalk-blue/50">
                初診時に体のどの部分が痛いのかをしっかり検査します。<br />
                体をねじったり、腰を持ち上げるなど、日常の動作でどの部分に痛みがでるのか調べます。
              </p>
            </div>

            {/* 治療 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-chalk-pink text-chalkboard-dark px-4 py-2 rounded-full font-bold text-lg">
                  Step 2
                </span>
                <h4 className="text-2xl font-bold text-chalk-pink">治療</h4>
              </div>
              <p className="text-chalk-white/90 leading-relaxed pl-4 border-l-4 border-chalk-pink/50">
                骨盤や背骨の歪み、肩や足首の位置など全身を調整します。<br />
                検査時に痛かった部分の痛みを取り、動きがスムーズになるよう治療していきます。<br />
                患者様自身に体の変化を聞きながら進めていきますので、効果がわかりやすく安心して治療を受けることができます。
              </p>
            </div>
          </div>
        </div>

        {/* 交通事故治療 */}
        <div className={`mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="chalk-box p-8">
            <h3 className="text-3xl font-bold text-chalk-green mb-6 flex items-center gap-3">
              <span className="animate-float">🚗</span>
              「交通事故治療」について
            </h3>
            <div className="space-y-4 text-chalk-white/90 leading-relaxed">
              <p>
                当院では、交通事故治療を行っております。<br />
                基本的には、<span className="text-chalk-yellow font-bold">病院との併用をおすすめ</span>しています。
              </p>
              <p>
                病院でレントゲンやMRIなどの画像診断を行い、当院では痛みを取る手技療法やリハビリを行っていきます。
              </p>
              <p className="text-chalk-orange">
                ムチウチで、首をさわって治療することができない患者様でも<br />
                首の痛みを楽にする<span className="font-bold">独自の治療法</span>がありますので、ご安心ください。
              </p>
              <p className="text-chalk-blue">
                保険会社とのやりとりも行いますので、お気軽にお問合せください。
              </p>
            </div>
          </div>
        </div>

        {/* 設備 */}
        <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <div className="inline-block speech-bubble bg-chalk-yellow">
              <p className="text-lg font-bold">
                最新のウォーターベッド・電気治療器完備！
              </p>
            </div>
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
