import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'CustomFit AI',
  description: 'Your AI-powered home fitness companion, adapting to you.',
  openGraph: {
    title: 'CustomFit AI',
    description: 'Your AI-powered home fitness companion, adapting to you.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
