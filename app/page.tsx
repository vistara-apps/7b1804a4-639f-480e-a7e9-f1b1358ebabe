'use client';

import { useState } from 'react';
import { WorkoutDashboard } from '@/components/WorkoutDashboard';
import { ExerciseLibrary } from '@/components/ExerciseLibrary';
import { ProgressTracker } from '@/components/ProgressTracker';
import { WorkoutGenerator } from '@/components/WorkoutGenerator';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

type ViewType = 'dashboard' | 'library' | 'progress' | 'generator';

export default function HomePage() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'library':
        return <ExerciseLibrary />;
      case 'progress':
        return <ProgressTracker />;
      case 'generator':
        return <WorkoutGenerator />;
      default:
        return <WorkoutDashboard onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-white">CustomFit AI</h1>
              <div className="hidden md:flex space-x-4">
                <Button
                  variant={currentView === 'dashboard' ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setCurrentView('dashboard')}
                >
                  Dashboard
                </Button>
                <Button
                  variant={currentView === 'library' ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setCurrentView('library')}
                >
                  Exercises
                </Button>
                <Button
                  variant={currentView === 'progress' ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setCurrentView('progress')}
                >
                  Progress
                </Button>
                <Button
                  variant={currentView === 'generator' ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setCurrentView('generator')}
                >
                  Generate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderCurrentView()}
      </main>
    </div>
  );
}
