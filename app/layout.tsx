import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "てのひら整骨院 | ポップで楽しい整骨院",
  description: "てのひら整骨院は、あなたの身体と心をケアするポップで楽しい整骨院です。肩こり、腰痛、スポーツ障害など、お気軽にご相談ください。",
  keywords: "整骨院, 接骨院, マッサージ, 肩こり, 腰痛, てのひら",
  openGraph: {
    title: "てのひら整骨院",
    description: "あなたの身体と心をケアするポップで楽しい整骨院",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="chalkboard-bg grid-lines min-h-screen">
        {children}
      </body>
    </html>
  );
}
