# Tennis 919 Website

## Overview

Tennis 919 is a web application for an inclusive tennis coaching organization based in Durham, NC. The platform showcases tennis lessons (private, duos, group clinics), merchandise/apparel, and provides information about the organization founded by Matthew Frazer. The site emphasizes accessibility, community building, and LGBTQ+ inclusivity.

The application is built as a single-page React application with client-side routing and can be deployed to static hosting or integrated into platforms like Squarespace.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript, built using Vite as the build tool and bundler.

**Routing**: Client-side routing via Wouter library for lightweight SPA navigation. Routes include:
- `/` - Home page with hero, mission, services, testimonials
- `/lessons` - Detailed lesson offerings and pricing
- `/shop` - Merchandise and apparel catalog
- `/about` - Organization and founder information
- `/playbook` - Future player performance tracking feature (coming soon)

**UI Framework**: Radix UI primitives for accessible component primitives, styled with Tailwind CSS using a custom design system based on shadcn/ui component library ("new-york" style variant).

**Design System**: 
- Custom color palette inspired by tennis/outdoor aesthetics (forest green primary, warm coral secondary, terracotta accent)
- Typography: Inter for body text, Poppins for headings
- Responsive grid layouts with mobile-first approach
- Consistent spacing using Tailwind's spacing scale
- Component variants using class-variance-authority

**State Management**: React Query (@tanstack/react-query) for server state management and API interactions. Currently using in-memory storage on backend with hooks prepared for future API integration.

**Form Handling**: React Hook Form with Zod validation (@hookform/resolvers) for type-safe form validation.

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js.

**Development vs Production**:
- Development: Vite dev server with HMR middleware integrated into Express
- Production: Static file serving from `dist/public` directory

**Storage Layer**: Currently implements in-memory storage (`MemStorage` class) with interface (`IStorage`) designed for future database migration. The interface includes user CRUD operations with unique ID generation using crypto.randomUUID().

**Database Schema**: Drizzle ORM configured for PostgreSQL with schema defined in `shared/schema.ts`. Current schema includes users table with username/password fields. Database connection ready but storage implementation uses memory for now.

**API Routes**: Minimal API surface registered in `server/routes.ts`. Designed to prefix all backend routes with `/api` for clear separation from frontend routes.

**Request Logging**: Custom middleware logs all API requests with timestamps, paths, durations, and response status codes.

### Design Patterns

**Monorepo Structure**: Client and server code share TypeScript configurations and schema definitions via `shared/` directory. Path aliases configured for clean imports (`@/`, `@shared/`, `@assets/`).

**Component Composition**: Reusable UI components in `client/src/components/` with shadcn/ui patterns. Feature-specific components (Hero, Mission, ServicesGrid, etc.) compose primitive UI components.

**Type Safety**: End-to-end TypeScript with shared schema types between client and server. Zod schemas for runtime validation paired with TypeScript types via Drizzle ORM's type inference.

**Separation of Concerns**: Clear boundaries between:
- UI components (presentation)
- Page components (composition)
- API client utilities (data fetching)
- Server routes (business logic)
- Storage layer (data persistence)

**Asset Management**: Static assets organized in `attached_assets/` with Vite alias resolution. Includes generated product images and branding assets.

### Build & Deployment

**Build Process**:
1. Client: Vite bundles React app to `dist/public/` with code splitting and optimization
2. Server: esbuild bundles Express server to `dist/index.js` with ESM format

**Static Export**: Application designed for static deployment to platforms like Squarespace. Build creates self-contained `dist/public/` with HTML, CSS, JS, and assets.

**Environment Configuration**: NODE_ENV-based configuration for development vs production. Drizzle requires DATABASE_URL environment variable when database features are enabled.

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible component primitives (@radix-ui/react-*)
- **shadcn/ui**: Component patterns and styling conventions
- **Lucide React**: Icon library for consistent iconography
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing

### Data & Forms
- **React Query**: Server state management, caching, and synchronization
- **React Hook Form**: Performant form state management
- **Zod**: Schema validation for forms and API contracts
- **Drizzle ORM**: TypeScript ORM with PostgreSQL dialect

### Database
- **@neondatabase/serverless**: Neon serverless Postgres driver
- **PostgreSQL**: Relational database (configured but not currently connected)
- **Drizzle Kit**: Database migrations and schema management

### External Services
- **Calendly**: Appointment booking integration (https://calendly.com/tennis919)
- **Google Fonts**: Web fonts (Inter, Poppins) loaded via CDN

### Development Tools
- **Vite**: Build tool with dev server and HMR
- **TypeScript**: Type checking across entire codebase
- **esbuild**: Fast server-side bundling for production
- **Replit Plugins**: Development tooling for Replit environment (cartographer, dev banner, runtime error overlay)

### Routing & Navigation
- **Wouter**: Minimalist client-side router (< 2KB alternative to React Router)

### Session Management
- **connect-pg-simple**: PostgreSQL session store for Express (configured for future use)

### Utilities
- **date-fns**: Date manipulation and formatting
- **clsx & tailwind-merge**: Conditional className utilities
- **class-variance-authority**: Type-safe component variants
- **nanoid**: Unique ID generation for cache busting