'use client';

import { useState } from 'react';
import { AppShell } from '@/components/AppShell';
import { FeatureGrid } from '@/components/FeatureGrid';
import { IdeaGenerator } from '@/components/IdeaGenerator';
import { PremiumFeature } from '@/components/PremiumFeature';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { StepIndicator } from '@/components/StepIndicator';
import { GeneratedIdea } from '@/lib/types';
import { PRICING } from '@/lib/constants';

export default function HomePage() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [generatedIdeas, setGeneratedIdeas] = useState<GeneratedIdea[]>([]);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ['Discover', 'Generate', 'Build', 'Launch'];

  const handleFeatureSelect = (featureId: string) => {
    setCurrentView(featureId);
    setCurrentStep(1);
  };

  const handleIdeasGenerated = (ideas: GeneratedIdea[]) => {
    setGeneratedIdeas(ideas);
    setCurrentStep(2);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'idea-generator':
        return <IdeaGenerator onIdeasGenerated={handleIdeasGenerated} />;
      
      case 'mvp-builder':
        return (
          <PremiumFeature
            title="MVP Builder"
            description="Get detailed blueprints and technical specifications to build your MVP in days, not weeks."
            icon="🏗️"
            price={PRICING.PREMIUM}
          />
        );
      
      case 'monetization-helper':
        return (
          <PremiumFeature
            title="Monetization Strategy"
            description="Discover proven monetization strategies tailored specifically for the Base ecosystem."
            icon="💰"
            price={PRICING.PREMIUM}
          />
        );
      
      case 'launch-blueprint':
        return (
          <Card>
            <h2 className="text-2xl font-bold text-white mb-6">
              🚀 Launch Blueprint
            </h2>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Pre-Launch Checklist</h3>
                <ul className="text-white/80 space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>Define your target user persona</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>Create a compelling value proposition</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    <span>Build your MVP with core features</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span>Set up analytics and tracking</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Launch Channels</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="text-white/80">
                    <div className="font-medium">Farcaster</div>
                    <div className="text-xs text-white/60">Share frames in relevant channels</div>
                  </div>
                  <div className="text-white/80">
                    <div className="font-medium">Base Community</div>
                    <div className="text-xs text-white/60">Engage with Base builders</div>
                  </div>
                  <div className="text-white/80">
                    <div className="font-medium">Product Hunt</div>
                    <div className="text-xs text-white/60">Launch for broader visibility</div>
                  </div>
                  <div className="text-white/80">
                    <div className="font-medium">Twitter/X</div>
                    <div className="text-xs text-white/60">Build in public narrative</div>
                  </div>
                </div>
              </div>

              <Button className="w-full" onClick={() => setCurrentStep(3)}>
                Start Launch Process
              </Button>
            </div>
          </Card>
        );
      
      default:
        return (
          <div className="space-y-8">
            {/* Hero Section */}
            <Card className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Build and Launch Your First
                <span className="gradient-text block">Base Monetized Miniapp</span>
              </h1>
              <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
                A complete toolkit for solo founders to quickly conceptualize, build, 
                and validate monetized miniapps on Base. From idea to launch in days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => handleFeatureSelect('idea-generator')}>
                  Start Building Now
                </Button>
                <Button variant="outline" size="lg">
                  View Examples
                </Button>
              </div>
            </Card>

            {/* Features Grid */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Everything You Need to Succeed
              </h2>
              <FeatureGrid onFeatureSelect={handleFeatureSelect} />
            </div>

            {/* Pricing */}
            <Card>
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Simple, Transparent Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">Free</h3>
                  <div className="text-3xl font-bold text-white mb-4">$0</div>
                  <ul className="text-white/80 text-sm space-y-2">
                    <li>✓ Idea Generator</li>
                    <li>✓ Launch Blueprint</li>
                    <li>✓ Basic Templates</li>
                  </ul>
                </div>
                
                <div className="text-center bg-white/10 rounded-lg p-6 border-2 border-accent">
                  <h3 className="text-lg font-semibold text-white mb-2">Basic</h3>
                  <div className="text-3xl font-bold text-white mb-4">
                    ${PRICING.BASIC}<span className="text-lg">/mo</span>
                  </div>
                  <ul className="text-white/80 text-sm space-y-2">
                    <li>✓ Everything in Free</li>
                    <li>✓ Advanced Templates</li>
                    <li>✓ Priority Support</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">Premium</h3>
                  <div className="text-3xl font-bold text-white mb-4">
                    ${PRICING.PREMIUM}<span className="text-lg">/mo</span>
                  </div>
                  <ul className="text-white/80 text-sm space-y-2">
                    <li>✓ Everything in Basic</li>
                    <li>✓ MVP Builder</li>
                    <li>✓ Monetization Helper</li>
                    <li>✓ Analytics Dashboard</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        );
    }
  };

  return (
    <AppShell>
      {currentView !== 'home' && (
        <div className="mb-6">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => {
              setCurrentView('home');
              setCurrentStep(0);
            }}
          >
            ← Back to Home
          </Button>
        </div>
      )}

      {currentView !== 'home' && (
        <StepIndicator steps={steps} currentStep={currentStep} />
      )}

      {renderCurrentView()}
    </AppShell>
  );
}
