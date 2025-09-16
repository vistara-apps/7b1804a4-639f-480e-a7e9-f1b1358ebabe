import { cn } from '@/lib/utils';

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

export function StepIndicator({ steps, currentStep, className = '' }: StepIndicatorProps) {
  return (
    <div className={cn('flex items-center justify-between mb-8', className)}>
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold',
                index <= currentStep
                  ? 'bg-white text-primary'
                  : 'bg-white/20 text-white/60'
              )}
            >
              {index + 1}
            </div>
            <span className="text-xs text-white/80 mt-2 text-center max-w-16">
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={cn(
                'h-0.5 w-12 mx-2 mt-[-20px]',
                index < currentStep ? 'bg-white' : 'bg-white/20'
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}
