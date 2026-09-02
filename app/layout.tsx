import type { Metadata } from 'next';
import { Bebas_Neue, Manrope } from 'next/font/google';
import './globals.css';

const display = Bebas_Neue({ variable: '--font-display', weight: '400', subsets: ['latin'] });
const sans = Manrope({ variable: '--font-sans', subsets: ['latin'] });
export const metadata: Metadata = {
  metadataBase: new URL('https://maranata-2026.vercel.app'),
  title: 'Maranata 2026 | Acampamento Maranata',
  description: 'Maranata 2026 — SEDE CONSTANTES. 31 de outubro a 2 de novembro, em Marília, SP.',
  openGraph: { title: 'Maranata 2026 | Acampamento Maranata', description: 'SEDE CONSTANTES. 31 de outubro a 2 de novembro, em Marília, SP.', images: [{ url: '/og.png', width: 1656, height: 948, alt: 'Maranata 2026 — Sede Constantes' }] },
  twitter: { card: 'summary_large_image', title: 'Maranata 2026 | Acampamento Maranata', description: 'SEDE CONSTANTES. 31 de outubro a 2 de novembro, em Marília, SP.', images: ['/og.png'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>; }
