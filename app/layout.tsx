import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CustomCursor } from '@/components/custom-cursor';
import { LanguageProvider } from '@/components/language-toggle';
import { DashboardLanguageProvider } from '@/hooks/use-dashboard-language';
import { CartProvider } from '@/hooks/use-cart';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WAFRA IT Solutions - Premium Web Hosting & Cloud Solutions',
  description: 'Reliable web hosting, cloud services, and domain registration. Fast, secure, and scalable hosting solutions for your business.',
  keywords: 'web hosting, cloud hosting, domain registration, VPS, dedicated servers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <DashboardLanguageProvider>
            <CartProvider>
              <Providers>
                <CustomCursor />
                <Header />
                <main>{children}</main>
                <Footer />
              </Providers>
            </CartProvider>
          </DashboardLanguageProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}