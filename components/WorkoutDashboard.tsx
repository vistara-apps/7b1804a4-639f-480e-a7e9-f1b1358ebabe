'use client';

import { Card } from './Card';
import { Button } from './Button';

interface WorkoutDashboardProps {
  onNavigate: (view: 'dashboard' | 'library' | 'progress' | 'generator') => void;
}

export function WorkoutDashboard({ onNavigate }: WorkoutDashboardProps) {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <Card className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to CustomFit AI
        </h1>
        <p className="text-white/80 text-lg mb-6">
          Your AI-powered home fitness companion, adapting to you.
        </p>
        <Button size="lg" onClick={() => onNavigate('generator')}>
          Generate My First Workout
        </Button>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="text-center hover:bg-white/10 transition-colors cursor-pointer"
              onClick={() => onNavigate('generator')}>
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-semibold text-white mb-2">AI Workout Generator</h3>
          <p className="text-white/70 text-sm">
            Get personalized workout plans that adapt to your progress
          </p>
        </Card>

        <Card className="text-center hover:bg-white/10 transition-colors cursor-pointer"
              onClick={() => onNavigate('library')}>
          <div className="text-4xl mb-4">📚</div>
          <h3 className="text-xl font-semibold text-white mb-2">Exercise Library</h3>
          <p className="text-white/70 text-sm">
            Browse exercises with video demonstrations
          </p>
        </Card>

        <Card className="text-center hover:bg-white/10 transition-colors cursor-pointer"
              onClick={() => onNavigate('progress')}>
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-xl font-semibold text-white mb-2">Progress Tracker</h3>
          <p className="text-white/70 text-sm">
            Track your fitness journey and achievements
          </p>
        </Card>

        <Card className="text-center">
          <div className="text-4xl mb-4">🏆</div>
          <h3 className="text-xl font-semibold text-white mb-2">Achievements</h3>
          <p className="text-white/70 text-sm">
            Unlock badges and celebrate milestones
          </p>
        </Card>
      </div>

      {/* Today's Workout Preview */}
      <Card>
        <h2 className="text-2xl font-bold text-white mb-6">Today's Workout</h2>
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🏃‍♀️</div>
          <h3 className="text-xl font-semibold text-white mb-2">No Workout Planned</h3>
          <p className="text-white/70 mb-6">
            Generate your first personalized workout to get started!
          </p>
          <Button onClick={() => onNavigate('generator')}>
            Generate Workout
          </Button>
        </div>
      </Card>
    </div>
  );
}

