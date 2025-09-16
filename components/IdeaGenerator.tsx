'use client';

import { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Input } from './Input';
import { SAMPLE_IDEAS } from '@/lib/constants';
import { GeneratedIdea } from '@/lib/types';

interface IdeaGeneratorProps {
  onIdeasGenerated: (ideas: GeneratedIdea[]) => void;
}

export function IdeaGenerator({ onIdeasGenerated }: IdeaGeneratorProps) {
  const [painPoint, setPainPoint] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedIdeas, setGeneratedIdeas] = useState<GeneratedIdea[]>([]);

  const handleGenerate = async () => {
    if (!painPoint.trim()) return;

    setIsGenerating(true);
    
    // Simulate API call with sample ideas
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const ideas = SAMPLE_IDEAS.map((idea, index) => ({
      ...idea,
      painPoint: painPoint,
      targetAudience: targetAudience || 'General users',
    }));

    setGeneratedIdeas(ideas);
    onIdeasGenerated(ideas);
    setIsGenerating(false);
  };

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-2xl font-bold text-white mb-6">
          💡 Generate Miniapp Ideas
        </h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-white/90 text-sm font-medium mb-2">
              What problem do you want to solve? *
            </label>
            <Input
              placeholder="e.g., Creators can't easily monetize their content..."
              value={painPoint}
              onChange={setPainPoint}
              multiline
              rows={3}
            />
          </div>

          <div>
            <label className="block text-white/90 text-sm font-medium mb-2">
              Who is your target audience? (optional)
            </label>
            <Input
              placeholder="e.g., Content creators, developers, crypto enthusiasts..."
              value={targetAudience}
              onChange={setTargetAudience}
            />
          </div>

          <Button
            onClick={handleGenerate}
            disabled={!painPoint.trim() || isGenerating}
            className="w-full"
          >
            {isGenerating ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                <span>Generating Ideas...</span>
              </div>
            ) : (
              'Generate 3 Miniapp Ideas'
            )}
          </Button>
        </div>
      </Card>

      {generatedIdeas.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">
            🎯 Your Generated Ideas
          </h3>
          
          {generatedIdeas.map((idea, index) => (
            <Card key={index} className="animate-slide-up">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-semibold text-white">
                  {idea.title}
                </h4>
                <span className="bg-accent text-white text-xs px-2 py-1 rounded-full">
                  {idea.estimatedTimeToLaunch}
                </span>
              </div>
              
              <p className="text-white/80 mb-4 leading-relaxed">
                {idea.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-medium text-white mb-2">Revenue Model:</h5>
                  <p className="text-white/70">{idea.revenueModel}</p>
                </div>
                
                <div>
                  <h5 className="font-medium text-white mb-2">MVP Features:</h5>
                  <ul className="text-white/70 space-y-1">
                    {idea.mvpFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/20">
                <Button variant="outline" size="sm">
                  Build This Idea
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
