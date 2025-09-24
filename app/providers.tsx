'use client';

import { OnchainKitProvider } from '@coinbase/onchainkit';
import { base } from 'wagmi/chains';

export function Providers({ children }: { children: React.ReactNode }) {
  // Only render providers on client side to avoid static generation issues
  if (typeof window === 'undefined') {
    return <>{children}</>;
  }

  return (
    <OnchainKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY || ''}
      chain={base as any}
    >
      {children}
    </OnchainKitProvider>
  );
}
