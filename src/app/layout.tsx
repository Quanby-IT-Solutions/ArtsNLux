import FooterContainer from '@/components/layouts/footer/FooterContainer';
import Header from '@/components/layouts/header/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fame+',
  description: 'Quanbydevs are here!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className="overflow-auto">
      <body className={inter.className}>
        <div className='flex flex-col min-h-screen bg-[#F4F4F2]'>
          <div className='flex-grow'>{children}</div>
        </div>
      </body>
    </html>
  );
}
