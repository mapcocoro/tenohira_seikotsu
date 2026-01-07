'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#news', label: '最新情報' },
    { href: '#treatment', label: '施術内容' },
    { href: '#staff', label: '院長紹介' },
    { href: '#price', label: '料金' },
    { href: '#access', label: 'アクセス' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-chalkboard-dark/95 backdrop-blur-sm shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* ロゴ */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl md:text-3xl font-bold chalk-text text-chalk-yellow hover-wiggle">
            🤲 てのひら整骨院
          </span>
        </a>

        {/* デスクトップメニュー */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-chalk-white hover:text-chalk-yellow transition-colors chalk-text text-lg relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-chalk-yellow transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* モバイルメニューボタン */}
        <button
          className="md:hidden text-chalk-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニュー"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-chalk-white transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-full h-0.5 bg-chalk-white transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-full h-0.5 bg-chalk-white transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* モバイルメニュー */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-chalkboard-dark/95 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
        }`}
      >
        <nav className="container mx-auto px-4 flex flex-col gap-4">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-chalk-white hover:text-chalk-yellow transition-colors chalk-text text-xl py-2 border-b border-chalk-white/20"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
