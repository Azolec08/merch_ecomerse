import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import Providers from './providers';

const font = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Template Next',
  description: "Template Next by bossROD's Solutions",
};

export type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div>
          <Link href="/">Home</Link>
          <Link href="/sample">Sample</Link>
        </div>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
