'use client';

import { useMiniKit } from '@coinbase/minikit';
import { ReactNode } from 'react';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const { context } = useMiniKit();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400">
      <div className="container mx-auto px-4 py-6 max-w-screen-lg">
        {/* Header */}
        <header className="mb-8">
          <div className="glass-effect rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏗️</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">Base Monetizer</h1>
                  <p className="text-white/80 text-sm">Build miniapps, fast</p>
                </div>
              </div>
              {context?.user && (
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">
                      {context.user.displayName?.[0] || '👤'}
                    </span>
                  </div>
                  <span className="text-white/90 text-sm hidden sm:block">
                    {context.user.displayName || 'User'}
                  </span>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="space-y-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="text-white/60 text-sm">
            Built for Base • Powered by MiniKit
          </p>
        </footer>
      </div>
    </div>
  );
}
