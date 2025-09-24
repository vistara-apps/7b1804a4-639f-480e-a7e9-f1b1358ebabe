'use client';

import { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';

interface WorkoutPreferences {
  duration: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  focus: string;
  equipment: string[];
}

interface GeneratedWorkout {
  id: string;
  name: string;
  exercises: Array<{
    name: string;
    sets: number;
    reps: string;
    rest: string;
    notes?: string;
  }>;
  estimatedDuration: number;
  difficulty: string;
}

export function WorkoutGenerator() {
  const [preferences, setPreferences] = useState<WorkoutPreferences>({
    duration: 30,
    difficulty: 'Beginner',
    focus: 'Full Body',
    equipment: ['None'],
  });

  const [generatedWorkout, setGeneratedWorkout] = useState<GeneratedWorkout | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);

    // Simulate AI generation
    setTimeout(() => {
      const workout: GeneratedWorkout = {
        id: 'generated-1',
        name: `${preferences.focus} Workout - ${preferences.difficulty}`,
        exercises: [
          {
            name: 'Push-ups',
            sets: 3,
            reps: preferences.difficulty === 'Beginner' ? '8-10' : preferences.difficulty === 'Intermediate' ? '10-12' : '12-15',
            rest: '60 seconds',
            notes: 'Keep your core tight and lower chest to ground',
          },
          {
            name: 'Bodyweight Squats',
            sets: 3,
            reps: preferences.difficulty === 'Beginner' ? '10-12' : preferences.difficulty === 'Intermediate' ? '12-15' : '15-20',
            rest: '45 seconds',
            notes: 'Keep knees behind toes, chest up',
          },
          {
            name: 'Plank',
            sets: 3,
            reps: preferences.difficulty === 'Beginner' ? '20-30' : preferences.difficulty === 'Intermediate' ? '30-45' : '45-60',
            rest: '30 seconds',
            notes: 'Hold seconds, keep body in straight line',
          },
        ],
        estimatedDuration: preferences.duration,
        difficulty: preferences.difficulty,
      };

      setGeneratedWorkout(workout);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-4">AI Workout Generator</h1>
        <p className="text-white/80">
          Get personalized workout plans that adapt to your fitness level and goals.
        </p>
      </div>

      {!generatedWorkout ? (
        <Card>
          <h2 className="text-2xl font-bold text-white mb-6">Customize Your Workout</h2>

          <div className="space-y-6">
            {/* Duration */}
            <div>
              <label className="block text-white font-medium mb-2">
                Workout Duration (minutes)
              </label>
              <select
                value={preferences.duration}
                onChange={(e) => setPreferences(prev => ({
                  ...prev,
                  duration: parseInt(e.target.value)
                }))}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
              >
                <option value={15} className="bg-gray-800">15 minutes</option>
                <option value={30} className="bg-gray-800">30 minutes</option>
                <option value={45} className="bg-gray-800">45 minutes</option>
                <option value={60} className="bg-gray-800">60 minutes</option>
              </select>
            </div>

            {/* Difficulty */}
            <div>
              <label className="block text-white font-medium mb-2">
                Fitness Level
              </label>
              <select
                value={preferences.difficulty}
                onChange={(e) => setPreferences(prev => ({
                  ...prev,
                  difficulty: e.target.value as WorkoutPreferences['difficulty']
                }))}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
              >
                <option value="Beginner" className="bg-gray-800">Beginner</option>
                <option value="Intermediate" className="bg-gray-800">Intermediate</option>
                <option value="Advanced" className="bg-gray-800">Advanced</option>
              </select>
            </div>

            {/* Focus Area */}
            <div>
              <label className="block text-white font-medium mb-2">
                Focus Area
              </label>
              <select
                value={preferences.focus}
                onChange={(e) => setPreferences(prev => ({
                  ...prev,
                  focus: e.target.value
                }))}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
              >
                <option value="Full Body" className="bg-gray-800">Full Body</option>
                <option value="Upper Body" className="bg-gray-800">Upper Body</option>
                <option value="Lower Body" className="bg-gray-800">Lower Body</option>
                <option value="Core" className="bg-gray-800">Core</option>
              </select>
            </div>

            {/* Equipment */}
            <div>
              <label className="block text-white font-medium mb-2">
                Available Equipment
              </label>
              <div className="space-y-2">
                {['None', 'Dumbbells', 'Resistance Bands', 'Pull-up Bar'].map(equipment => (
                  <label key={equipment} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={preferences.equipment.includes(equipment)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setPreferences(prev => ({
                            ...prev,
                            equipment: [...prev.equipment, equipment]
                          }));
                        } else {
                          setPreferences(prev => ({
                            ...prev,
                            equipment: prev.equipment.filter(eq => eq !== equipment)
                          }));
                        }
                      }}
                      className="rounded border-white/20 bg-white/10 text-blue-600"
                    />
                    <span className="text-white/80">{equipment}</span>
                  </label>
                ))}
              </div>
            </div>

            <Button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full"
              size="lg"
            >
              {isGenerating ? 'Generating...' : 'Generate Workout'}
            </Button>
          </div>
        </Card>
      ) : (
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">{generatedWorkout.name}</h2>
            <Button
              variant="outline"
              onClick={() => setGeneratedWorkout(null)}
            >
              Generate New
            </Button>
          </div>

          <div className="bg-white/5 rounded-lg p-4 mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-white/60 text-sm">Duration</div>
                <div className="text-white font-semibold">{generatedWorkout.estimatedDuration} min</div>
              </div>
              <div>
                <div className="text-white/60 text-sm">Difficulty</div>
                <div className="text-white font-semibold">{generatedWorkout.difficulty}</div>
              </div>
              <div>
                <div className="text-white/60 text-sm">Exercises</div>
                <div className="text-white font-semibold">{generatedWorkout.exercises.length}</div>
              </div>
              <div>
                <div className="text-white/60 text-sm">Equipment</div>
                <div className="text-white font-semibold">Bodyweight</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {generatedWorkout.exercises.map((exercise, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{exercise.name}</h3>
                    <p className="text-white/60 text-sm">{exercise.sets} sets × {exercise.reps} reps</p>
                  </div>
                  <Button size="sm" variant="outline">
                    Watch Demo
                  </Button>
                </div>

                {exercise.notes && (
                  <p className="text-white/70 text-sm mb-2">{exercise.notes}</p>
                )}

                <div className="text-white/50 text-sm">
                  Rest: {exercise.rest} between sets
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-4">
            <Button className="flex-1" size="lg">
              Start Workout
            </Button>
            <Button variant="outline" size="lg">
              Save for Later
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}

