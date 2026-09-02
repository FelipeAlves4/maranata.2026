import type { Metadata } from 'next';
import { Bebas_Neue, Manrope } from 'next/font/google';
import './globals.css';

const display = Bebas_Neue({ variable: '--font-display', weight: '400', subsets: ['latin'] });
const sans = Manrope({ variable: '--font-sans', subsets: ['latin'] });
export const metadata: Metadata = { title: 'Maranata 2026 | Acampamento Maranata', description: 'Maranata 2026 — SEDE CONSTANTES. 31 de outubro a 2 de novembro, em Marília, SP.', openGraph: { title: 'Maranata 2026 | Acampamento Maranata', description: 'SEDE CONSTANTES. 31 de outubro a 2 de novembro, em Marília, SP.' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>; }
