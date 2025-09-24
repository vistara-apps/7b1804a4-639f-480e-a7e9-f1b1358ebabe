'use client';

import { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';

interface Exercise {
  id: string;
  name: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  equipment: string[];
  description: string;
  videoUrl?: string;
}

const exercises: Exercise[] = [
  {
    id: 'push-up',
    name: 'Push-ups',
    category: 'Upper Body',
    difficulty: 'Beginner',
    equipment: ['None'],
    description: 'A classic bodyweight exercise that targets chest, shoulders, and triceps.',
  },
  {
    id: 'squat',
    name: 'Bodyweight Squats',
    category: 'Lower Body',
    difficulty: 'Beginner',
    equipment: ['None'],
    description: 'Fundamental lower body exercise targeting quadriceps, hamstrings, and glutes.',
  },
  {
    id: 'plank',
    name: 'Plank',
    category: 'Core',
    difficulty: 'Intermediate',
    equipment: ['None'],
    description: 'Isometric core exercise that builds stability and endurance.',
  },
  {
    id: 'burpee',
    name: 'Burpees',
    category: 'Full Body',
    difficulty: 'Intermediate',
    equipment: ['None'],
    description: 'High-intensity full-body exercise combining squat, plank, and jump.',
  },
];

export function ExerciseLibrary() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(exercises.map(e => e.category)))];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredExercises = exercises.filter(exercise => {
    const categoryMatch = selectedCategory === 'All' || exercise.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'All' || exercise.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Exercise Library</h1>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
          >
            {categories.map(category => (
              <option key={category} value={category} className="bg-gray-800">
                {category}
              </option>
            ))}
          </select>

          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
          >
            {difficulties.map(difficulty => (
              <option key={difficulty} value={difficulty} className="bg-gray-800">
                {difficulty}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Exercise Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExercises.map(exercise => (
          <Card key={exercise.id} className="hover:bg-white/10 transition-colors">
            <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-4xl">💪</span>
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">{exercise.name}</h3>

            <div className="flex items-center gap-2 mb-3">
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                exercise.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                exercise.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                'bg-red-500/20 text-red-300'
              }`}>
                {exercise.difficulty}
              </span>
              <span className="text-white/60 text-sm">{exercise.category}</span>
            </div>

            <p className="text-white/70 text-sm mb-4">{exercise.description}</p>

            <div className="flex items-center justify-between">
              <div className="text-xs text-white/50">
                Equipment: {exercise.equipment.join(', ')}
              </div>
              <Button size="sm" variant="outline">
                Watch Demo
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {filteredExercises.length === 0 && (
        <Card className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-white mb-2">No exercises found</h3>
          <p className="text-white/70">
            Try adjusting your filters to see more exercises.
          </p>
        </Card>
      )}
    </div>
  );
}

