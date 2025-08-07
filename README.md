# UptimeMatrix - Infrastructure Monitoring Platform

A comprehensive monitoring solution built with Next.js, TypeScript, and Tailwind CSS.

## Package Management

This project uses **Bun** as the package manager for faster installation and better performance in monorepo environments.

## Getting Started

### Prerequisites

- Bun >= 1.0.0
- Node.js >= 18.0.0

### Installation

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start

# Run linting
bun run lint

# Type checking
bun run type-check
```

### Monorepo Usage

This project is designed to work seamlessly in a monorepo structure under a "web" section:

```
monorepo/
├── web/                    # This Next.js application
│   ├── package.json
│   ├── bunfig.toml
│   └── ...
├── api/                    # Backend services
├── shared/                 # Shared packages
└── package.json           # Root package.json
```

To use in a monorepo:

```bash
# From monorepo root
bun install

# Run web development server
bun run --filter web dev

# Build web application
bun run --filter web build
```

## Scripts

- `bun run dev` - Start development server on http://localhost:3000
- `bun run build` - Build the application for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint
- `bun run type-check` - Run TypeScript type checking
- `bun run clean` - Clean build artifacts and node_modules

## Features

- **Website & API Monitoring** - Monitor your services from 300+ global locations
- **Smart Incident Management** - Automated incident creation and team coordination
- **Advanced Analytics** - Detailed insights and performance metrics
- **Security Monitoring** - SSL certificates, domain expiry, and vulnerability tracking
- **Status Pages** - Beautiful, customizable status pages for customers
- **Team Collaboration** - Shared dashboards and role-based access

## Technology Stack

- **Framework**: Next.js 13.5.1 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Package Manager**: Bun (converted from npm)

## Deployment

The project is configured for static export and can be deployed to any static hosting provider:

```bash
bun run build
```

The built files will be in the `out` directory.

## Development Notes

### Bun Migration

This project was converted from npm to Bun for:
- **Faster installs**: Up to 10x faster than npm
- **Better monorepo support**: Native workspace support
- **Improved performance**: Faster script execution
- **Modern tooling**: Built-in bundler and test runner

### File Changes Made:
- Updated `package.json` scripts to use `bun run` prefix
- Added `packageManager` field specifying Bun version
- Created `bunfig.toml` for Bun-specific configuration
- Added engine requirements for Bun compatibility
- Enhanced scripts with additional Bun-optimized commands

All UI components, styles, and functionality remain exactly the same - only the package management layer was updated.