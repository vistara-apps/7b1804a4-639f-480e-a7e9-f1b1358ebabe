import { cn } from '@/lib/utils';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  multiline?: boolean;
  rows?: number;
}

export function Input({
  placeholder,
  value,
  onChange,
  className = '',
  multiline = false,
  rows = 3,
}: InputProps) {
  const baseClasses = 'w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50';

  if (multiline) {
    return (
      <textarea
        className={cn(baseClasses, 'resize-none', className)}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        rows={rows}
      />
    );
  }

  return (
    <input
      type="text"
      className={cn(baseClasses, className)}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
}
