'use client';

import { Card } from './Card';
import { Button } from './Button';

interface PremiumFeatureProps {
  title: string;
  description: string;
  icon: string;
  price: number;
}

export function PremiumFeature({ title, description, icon, price }: PremiumFeatureProps) {
  const handleUpgrade = () => {
    // In a real app, this would integrate with payment processing
    alert(`Upgrade to access ${title} for $${price}/month`);
  };

  return (
    <Card className="text-center">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-white/80 mb-6 leading-relaxed">{description}</p>
      
      <div className="bg-white/10 rounded-lg p-4 mb-6">
        <div className="text-3xl font-bold text-white">${price}</div>
        <div className="text-white/60 text-sm">per month</div>
      </div>

      <Button onClick={handleUpgrade} className="w-full">
        Upgrade to Premium
      </Button>
      
      <p className="text-white/50 text-xs mt-4">
        Cancel anytime • 7-day free trial
      </p>
    </Card>
  );
}
