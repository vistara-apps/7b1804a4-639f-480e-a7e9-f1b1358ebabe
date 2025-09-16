# Base Monetizer

A Base Mini App that helps solo founders quickly conceptualize, build, and validate monetized miniapps on Base.

## Features

- **Miniapp Idea Generator**: Generate 3 lean, monetizable miniapp ideas based on pain points
- **MVP Builder**: Structured blueprints for building MVPs in days (Premium)
- **Monetization Strategy Helper**: Tailored monetization strategies for Base ecosystem (Premium)
- **Launch Blueprint**: Complete launch strategy with validation metrics

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Add your OnchainKit API key to `.env.local`.

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Blockchain**: Base (via OnchainKit)
- **Mini App**: MiniKit integration
- **TypeScript**: Full type safety

## Project Structure

```
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
├── lib/                # Utilities and types
└── public/             # Static assets
```

## Deployment

This app is designed to be deployed as a Base Mini App. Follow the Base Mini App deployment guidelines for production deployment.

## License

MIT License
