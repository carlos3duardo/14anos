import './globals.css';

import type { Metadata } from 'next';
import { Inter, Saira_Extra_Condensed } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
});

const saira = Saira_Extra_Condensed({
  variable: '--font-saira-extra-condensed',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: '14 Anos',
  description: 'Carlos Eduardo & Erinalva Fortaleza',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} ${saira.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
