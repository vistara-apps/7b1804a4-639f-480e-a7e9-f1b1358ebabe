export interface User {
  userId: string;
  farcasterId?: string;
  createdAt: Date;
  subscriptionTier: 'free' | 'basic' | 'premium';
}

export interface MiniappIdea {
  ideaId: string;
  painPoint: string;
  userDescription: string;
  suggestedMVPs: string[];
  revenueModel: string;
  technicalBlueprint: string;
}

export interface UserMiniappProgress {
  progressId: string;
  userId: string;
  ideaId: string;
  currentStep: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  isPremium?: boolean;
}

export interface GeneratedIdea {
  title: string;
  description: string;
  painPoint: string;
  targetAudience: string;
  revenueModel: string;
  mvpFeatures: string[];
  technicalRequirements: string[];
  estimatedTimeToLaunch: string;
}
