# Autonova - AI Automation Agency Landing Page

## Overview

This is a React-based landing page for Autonova, an AI automation agency. The application showcases the company's services, process, and capabilities in AI-powered business automation. It features a modern, responsive design with a contact form for lead capture and inquiry management.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/UI components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system variables
- **State Management**: React Query (TanStack Query) for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API**: RESTful API endpoints for contact form submissions
- **Storage**: In-memory storage implementation with interface for future database integration

### Development Setup
- **Development Server**: Vite development server with HMR
- **Production Build**: Vite build + esbuild for server bundling
- **Deployment**: Configured for Replit autoscale deployment

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contact Inquiries Table**: Lead capture form data (name, email, company, automation_type, message, created_at)
- **Schema Validation**: Zod schemas for type-safe data validation

### API Endpoints
- `POST /api/contact` - Submit contact inquiry form
- `GET /api/contact` - Retrieve all contact inquiries (admin functionality)

### Frontend Components
- **Landing Page Sections**: Hero, About AI, Services, Use Cases, Process, Why Choose Us, Contact, Footer
- **Navigation**: Smooth scrolling navigation with mobile-responsive menu
- **Contact Form**: React Hook Form with Zod validation and React Query mutations
- **UI Components**: Comprehensive set of reusable components (buttons, forms, cards, etc.)

### Storage Layer
- **Interface-based Design**: `IStorage` interface allows switching between storage implementations
- **Current**: In-memory storage for development
- **Future**: Database storage implementation ready via Drizzle ORM

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on landing page
   - Form data validated using Zod schema on client and server
   - React Query mutation sends POST request to `/api/contact`
   - Server validates and stores inquiry in database/memory
   - Success/error feedback displayed to user via toast notifications

2. **Page Navigation**:
   - Single-page application with smooth scroll navigation
   - Wouter handles any future routing needs
   - All sections accessible from navigation menu

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL client for Neon
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Form handling with validation
- **@hookform/resolvers**: Zod integration for form validation

### UI Dependencies
- **@radix-ui/***: Primitive components for accessibility
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Utility for component variants

## Deployment Strategy

### Development
- **Command**: `npm run dev`
- **Server**: Express server with Vite middleware for HMR
- **Port**: 5000 (configured in .replit)
- **Database**: Uses DATABASE_URL environment variable

### Production
- **Build**: `npm run build` - Creates optimized client and server bundles
- **Start**: `npm run start` - Runs production server
- **Deployment**: Replit autoscale deployment configured
- **Static Assets**: Served from `dist/public`

### Database Management
- **Migrations**: `npm run db:push` - Push schema changes to database
- **Schema**: Centralized in `shared/schema.ts` for client/server sharing

## Changelog

Changelog:
- June 24, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.