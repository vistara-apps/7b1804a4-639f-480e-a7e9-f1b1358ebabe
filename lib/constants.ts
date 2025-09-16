export const SUBSCRIPTION_TIERS = {
  FREE: 'free',
  BASIC: 'basic',
  PREMIUM: 'premium',
} as const;

export const PRICING = {
  BASIC: 1,
  PREMIUM: 5,
} as const;

export const FEATURES = [
  {
    id: 'idea-generator',
    title: 'Miniapp Idea Generator',
    description: 'Generate 3 lean, monetizable miniapp ideas based on your pain points',
    icon: '💡',
    isPremium: false,
  },
  {
    id: 'mvp-builder',
    title: 'MVP Builder',
    description: 'Get structured blueprints for building your MVP in days',
    icon: '🏗️',
    isPremium: true,
  },
  {
    id: 'monetization-helper',
    title: 'Monetization Strategy',
    description: 'Tailored monetization strategies for the Base ecosystem',
    icon: '💰',
    isPremium: true,
  },
  {
    id: 'launch-blueprint',
    title: 'Launch Blueprint',
    description: 'Complete launch strategy with validation metrics',
    icon: '🚀',
    isPremium: false,
  },
];

export const SAMPLE_IDEAS = [
  {
    title: 'Social Tip Jar',
    description: 'A miniapp that allows creators to receive micro-tips from their audience',
    painPoint: 'Creators struggle to monetize their content directly',
    targetAudience: 'Content creators and their followers',
    revenueModel: 'Transaction fees (2-5% per tip)',
    mvpFeatures: ['Tip button integration', 'Creator profiles', 'Basic analytics'],
    technicalRequirements: ['Base wallet integration', 'Smart contract for tips', 'Frame actions'],
    estimatedTimeToLaunch: '1-2 weeks',
  },
  {
    title: 'Skill Exchange Network',
    description: 'Connect people to trade skills and services using Base tokens',
    painPoint: 'Difficulty finding and paying for specific skills',
    targetAudience: 'Freelancers and skill seekers',
    revenueModel: 'Platform fee on completed exchanges',
    mvpFeatures: ['Skill listings', 'Matching algorithm', 'Escrow payments'],
    technicalRequirements: ['User profiles', 'Payment escrow', 'Rating system'],
    estimatedTimeToLaunch: '2-3 weeks',
  },
  {
    title: 'Micro-Investment Pools',
    description: 'Create and join small investment groups for DeFi opportunities',
    painPoint: 'High barriers to entry for DeFi investments',
    targetAudience: 'Crypto beginners and small investors',
    revenueModel: 'Management fees on pool performance',
    mvpFeatures: ['Pool creation', 'Investment tracking', 'Automated distributions'],
    technicalRequirements: ['DeFi protocol integration', 'Multi-sig wallets', 'Yield farming'],
    estimatedTimeToLaunch: '3-4 weeks',
  },
];
