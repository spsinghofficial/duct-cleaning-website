# Duct Cleaning Platform - Implementation Guide

## Project Overview
Building a full-stack duct cleaning service platform using Next.js latest version (App Router) and Supabase.

## Phase 1: Project Setup & Configuration

### 1.1 Initial Project Setup
- [ ] Create new Next.js project with TypeScript
  ```bash
  npx create-next-app@latest duct-cleaning-platform --typescript --tailwind --app

 Set up Git repository and initial commit
 Create .env.local file with environment variables template
 Add .env.example file for team reference

1.2 Dependencies Installation

 Install core dependencies
bashnpm install @supabase/supabase-js @supabase/auth-helpers-nextjs
npm install @tanstack/react-query @tanstack/react-query-devtools
npm install react-hook-form zod @hookform/resolvers
npm install date-fns react-day-picker
npm install lucide-react

 Install dev dependencies
bashnpm install -D @types/node prettier eslint-config-prettier
npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin


1.3 ESLint & Prettier Configuration

 Create .eslintrc.json with strict TypeScript rules
 Create .prettierrc file
 Add lint-staged and husky for pre-commit hooks
 Configure VS Code workspace settings

1.4 TypeScript Configuration

 Update tsconfig.json with strict mode
 Add path aliases (@/components, @/lib, @/types, etc.)
 Create global type definitions file

1.5 Project Structure

 Create folder structure:
src/
├── app/
│   ├── (auth)/
│   ├── (public)/
│   ├── (customer)/
│   ├── (owner)/
│   ├── (technician)/
│   └── api/
├── components/
│   ├── ui/
│   ├── forms/
│   └── layouts/
├── lib/
│   ├── supabase/
│   ├── utils/
│   └── hooks/
├── types/
└── styles/


1.6 Supabase Setup

 Create Supabase project
 Set up environment variables
 Create Supabase client utilities
 Configure auth helpers
 Set up database types generation

Phase 2: Database & Authentication
2.1 Database Schema Implementation (Please refer to database folder)

 Create SQL migration files from schema
 Run migrations in Supabase
 Set up Row Level Security (RLS) policies
 Create database functions and triggers
 Test database with seed data

2.2 Authentication System

 Implement Supabase Auth configuration
 Create auth context provider
 Build login page component
 Build registration page with role selection
 Implement password reset flow
 Add email verification
 Create auth middleware for protected routes
 Test all auth flows

2.3 User Profile Management

 Create profile completion form
 Implement profile update API
 Add avatar upload functionality
 Create address management components
 Test profile CRUD operations

Phase 3: Public Website Implementation
3.1 Layout & Navigation

 Create main layout component
 Build responsive navigation header
 Implement footer component
 Add mobile menu functionality
 Create loading states
 Test responsive design

3.2 Homepage

 Build hero section with CTA
 Create services overview cards
 Add testimonials carousel
 Implement trust badges section
 Add service area map component
 Create quick quote form
 Test all interactive elements

3.3 Services Pages

 Create service listing page
 Build individual service detail pages
 Add pricing calculator component
 Implement before/after gallery
 Create service booking CTA
 Test navigation and interactions

3.4 Contact & Quote System

 Build contact form with validation
 Create quote request form
 Implement form submission API
 Add email notification system
 Create success/error states
 Test form submissions

Phase 4: Customer Portal
4.1 Customer Dashboard

 Create dashboard layout
 Build upcoming appointments widget
 Add recent invoices section
 Implement quick actions menu
 Create notification center
 Test dashboard functionality

4.2 Booking System

 Create service selection component
 Build calendar availability viewer
 Implement time slot selection
 Add booking confirmation flow
 Create booking management page
 Implement cancellation/rescheduling
 Test complete booking flow

4.3 Customer Documents

 Build invoices listing page
 Create invoice detail view
 Implement quote viewing
 Add PDF download functionality
 Create payment history page
 Test document access and downloads

4.4 Customer Account Settings

 Create settings layout
 Build profile edit form
 Implement password change
 Add payment method management
 Create notification preferences
 Test all settings updates

Phase 5: Business Owner Portal
5.1 Owner Dashboard

 Create admin layout
 Build revenue metrics widgets
 Add appointments calendar view
 Implement technician status board
 Create quick stats components
 Test real-time updates

5.2 Appointment Management

 Build calendar component (day/week/month views)
 Implement drag-and-drop scheduling
 Create appointment detail modal
 Add technician assignment feature
 Build conflict detection
 Test scheduling operations

5.3 Customer Management

 Create customer list with search/filter
 Build customer detail view
 Add service history timeline
 Implement notes system
 Create customer tags feature
 Test customer data management

5.4 Financial Management

 Build invoice creation form
 Implement quote builder
 Create payment recording system
 Add expense tracking
 Build financial reports
 Test all financial operations

5.5 Team Management

 Create technician list page
 Build technician profile editor
 Implement schedule management
 Add performance tracking
 Create commission calculator
 Test team management features

Phase 6: Technician Portal
6.1 Mobile-Optimized Interface

 Create mobile-first layout
 Build today's jobs view
 Implement job cards with swipe actions
 Add offline capability
 Create sync mechanism
 Test on various devices

6.2 Job Management

 Build job detail view
 Create status update interface
 Implement photo upload feature
 Add service checklist component
 Create signature collection
 Test job workflow

6.3 Time Tracking

 Build clock in/out interface
 Create break management
 Implement time log viewer
 Add location tracking (optional)
 Test time tracking accuracy

6.4 Communication

 Create in-app messaging
 Build notification system
 Add job notes feature
 Implement customer contact info display
 Test communication features

Phase 7: Advanced Features
7.1 Payment Integration

 Set up Stripe account
 Implement payment processing
 Create payment forms
 Add recurring billing
 Build refund system
 Test payment flows

7.2 Notification System

 Set up email service (SendGrid/Resend)
 Create email templates
 Implement appointment reminders
 Add SMS notifications (optional)
 Build notification preferences
 Test notification delivery

7.3 Reporting & Analytics

 Create report builder
 Implement data visualization
 Build export functionality
 Add custom date ranges
 Create automated reports
 Test report accuracy

7.4 Reviews & Referrals

 Build review request system
 Create review display components
 Implement referral tracking
 Add reward management
 Test review/referral flows

Phase 8: Testing & Optimization
8.1 Unit Testing

 Set up Jest and React Testing Library
 Write tests for utility functions
 Test React components
 Add API route tests
 Achieve 80% coverage

8.2 Integration Testing

 Set up Cypress
 Write E2E tests for critical paths
 Test booking flow
 Test payment flow
 Test technician workflow

8.3 Performance Optimization

 Implement image optimization
 Add lazy loading
 Optimize database queries
 Implement caching strategy
 Run Lighthouse audits

8.4 Security Audit

 Review RLS policies
 Test authentication flows
 Validate input sanitization
 Check for XSS vulnerabilities
 Implement rate limiting

Phase 9: Deployment & Launch
9.1 Production Setup

 Configure production environment
 Set up CI/CD pipeline
 Configure domain and SSL
 Set up monitoring (Sentry)
 Configure backups

9.2 Documentation

 Write API documentation
 Create user guides
 Document deployment process
 Add inline code comments
 Create troubleshooting guide

9.3 Launch Preparation

 Conduct beta testing
 Train client team
 Prepare launch materials
 Set up support system
 Plan rollout strategy

Implementation Notes
For Each Feature:

Write TypeScript interfaces first
Create API routes with proper error handling
Build UI components with loading/error states
Implement form validation with Zod
Add proper TypeScript types throughout
Test both happy path and edge cases
Ensure mobile responsiveness
Check accessibility standards

Code Quality Checklist:

 TypeScript strict mode compliance
 No any types
 Proper error boundaries
 Loading states for all async operations
 Proper form validation
 Accessibility (ARIA labels, keyboard navigation)
 Mobile-first responsive design
 SEO optimization where applicable

Security Checklist:

 Input validation on all forms
 RLS policies on all tables
 API rate limiting
 Proper authentication checks
 XSS prevention
 SQL injection prevention (via Supabase)
 Secure file upload handling

Progress Tracking
Update this file as tasks are completed. Use the following format:

 Completed task
 Pending task
[🚧] In progress
[⏸️] Blocked

Last Updated: [Date]
Current Phase: [Phase Number]
Blockers: [List any blockers]