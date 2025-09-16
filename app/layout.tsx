import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Base Monetizer',
  description: 'Build and launch your first Base monetized miniapp, fast.',
  openGraph: {
    title: 'Base Monetizer',
    description: 'Build and launch your first Base monetized miniapp, fast.',
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
