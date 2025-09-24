'use client';

import { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { FEATURES } from '@/lib/constants';

interface FeatureGridProps {
  onFeatureSelect: (featureId: string) => void;
}

export function FeatureGrid({ onFeatureSelect }: FeatureGridProps) {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const handleFeatureClick = (featureId: string) => {
    setSelectedFeature(featureId);
    onFeatureSelect(featureId);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {FEATURES.map((feature) => (
        <Card
          key={feature.id}
          variant="interactive"
          className={`relative ${
            selectedFeature === feature.id ? 'ring-2 ring-white' : ''
          }`}
          onClick={() => handleFeatureClick(feature.id)}
        >
          {feature.isPremium && (
            <div className="absolute top-2 right-2 bg-accent text-white text-xs px-2 py-1 rounded-full">
              Premium
            </div>
          )}
          
          <div className="flex items-start space-x-4">
            <div className="text-3xl">{feature.icon}</div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <span className="text-white/60 text-xs">
              {feature.isPremium ? 'Premium Feature' : 'Free Feature'}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e?.stopPropagation();
                handleFeatureClick(feature.id);
              }}
            >
              Try Now
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
