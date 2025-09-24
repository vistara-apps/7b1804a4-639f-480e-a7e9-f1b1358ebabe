'use client';

import { Card } from './Card';
import { Button } from './Button';

interface WorkoutSession {
  id: string;
  date: string;
  exercises: Array<{
    name: string;
    sets: number;
    reps: number;
    completed: boolean;
  }>;
  duration: number; // in minutes
  completed: boolean;
}

const mockSessions: WorkoutSession[] = [
  {
    id: '1',
    date: '2024-01-15',
    exercises: [
      { name: 'Push-ups', sets: 3, reps: 10, completed: true },
      { name: 'Squats', sets: 3, reps: 15, completed: true },
      { name: 'Plank', sets: 3, reps: 30, completed: true },
    ],
    duration: 25,
    completed: true,
  },
  {
    id: '2',
    date: '2024-01-13',
    exercises: [
      { name: 'Push-ups', sets: 3, reps: 8, completed: true },
      { name: 'Squats', sets: 3, reps: 12, completed: true },
      { name: 'Plank', sets: 3, reps: 25, completed: true },
    ],
    duration: 22,
    completed: true,
  },
];

export function ProgressTracker() {
  const totalWorkouts = mockSessions.length;
  const completedWorkouts = mockSessions.filter(s => s.completed).length;
  const totalMinutes = mockSessions.reduce((sum, s) => sum + s.duration, 0);
  const averageDuration = totalWorkouts > 0 ? Math.round(totalMinutes / totalWorkouts) : 0;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Progress Tracker</h1>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="text-center">
          <div className="text-3xl font-bold text-white mb-2">{totalWorkouts}</div>
          <div className="text-white/70 text-sm">Total Workouts</div>
        </Card>

        <Card className="text-center">
          <div className="text-3xl font-bold text-green-400 mb-2">{completedWorkouts}</div>
          <div className="text-white/70 text-sm">Completed</div>
        </Card>

        <Card className="text-center">
          <div className="text-3xl font-bold text-blue-400 mb-2">{totalMinutes}</div>
          <div className="text-white/70 text-sm">Total Minutes</div>
        </Card>

        <Card className="text-center">
          <div className="text-3xl font-bold text-purple-400 mb-2">{averageDuration}</div>
          <div className="text-white/70 text-sm">Avg Duration</div>
        </Card>
      </div>

      {/* Recent Workouts */}
      <Card>
        <h2 className="text-2xl font-bold text-white mb-6">Recent Workouts</h2>

        <div className="space-y-4">
          {mockSessions.map(session => (
            <div key={session.id} className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-white font-semibold">
                    Workout on {new Date(session.date).toLocaleDateString()}
                  </h3>
                  <p className="text-white/60 text-sm">{session.duration} minutes</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  session.completed
                    ? 'bg-green-500/20 text-green-300'
                    : 'bg-yellow-500/20 text-yellow-300'
                }`}>
                  {session.completed ? 'Completed' : 'In Progress'}
                </div>
              </div>

              <div className="space-y-2">
                {session.exercises.map((exercise, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-white/80">{exercise.name}</span>
                    <span className="text-white/60">
                      {exercise.sets} × {exercise.reps} reps
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {mockSessions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-white mb-2">No workouts yet</h3>
            <p className="text-white/70 mb-6">
              Complete your first workout to start tracking progress!
            </p>
            <Button>Start First Workout</Button>
          </div>
        )}
      </Card>

      {/* Achievements */}
      <Card>
        <h2 className="text-2xl font-bold text-white mb-6">Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/5 rounded-lg p-4 text-center">
            <div className="text-4xl mb-2">🎯</div>
            <h3 className="text-white font-semibold mb-1">First Workout</h3>
            <p className="text-white/60 text-sm">Complete your first workout</p>
            <div className="mt-2 text-green-400 text-sm font-medium">✓ Unlocked</div>
          </div>

          <div className="bg-white/5 rounded-lg p-4 text-center">
            <div className="text-4xl mb-2">🔥</div>
            <h3 className="text-white font-semibold mb-1">Week Streak</h3>
            <p className="text-white/60 text-sm">Work out 7 days in a row</p>
            <div className="mt-2 text-yellow-400 text-sm font-medium">In Progress</div>
          </div>

          <div className="bg-white/5 rounded-lg p-4 text-center">
            <div className="text-4xl mb-2">💪</div>
            <h3 className="text-white font-semibold mb-1">Strength Master</h3>
            <p className="text-white/60 text-sm">Complete 50 push-ups total</p>
            <div className="mt-2 text-gray-400 text-sm font-medium">Locked</div>
          </div>
        </div>
      </Card>
    </div>
  );
}

