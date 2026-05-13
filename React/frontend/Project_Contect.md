Insurance Management Platform — Updated Project Context
Project Overview

This project is a full-stack enterprise-style Insurance Management Platform built with:

Frontend: React + TailwindCSS
Backend: Django + Django REST Framework
Authentication: JWT Authentication
Database: SQLite (currently)
API Communication: Axios
UI Architecture: Modular reusable enterprise component structure

The goal of the project is to progressively build a production-style SaaS insurance management system while learning:

React architecture
Django REST APIs
Authentication systems
CRUD workflows
Nested relationships
Enterprise UI/UX patterns
Dashboard analytics
File/document management
Financial workflows
Modular frontend architecture
Scalable backend architecture
Current Project Architecture
Frontend Stack
React Features
React Router DOM
Axios API layer
Context API authentication
TailwindCSS styling
Modular enterprise UI architecture
Reusable card systems
Reusable accordion systems
Reusable modal workflows
Dynamic forms
Dashboard analytics
Enterprise tab layouts
Toast notifications
File upload handling
Nested relationship rendering
Updated Frontend Folder Structure
src/
│
├── api/
│   └── axios.js
│
├── auth/
│   ├── AuthContext.jsx
│   └── ProtectedRoute.jsx
│
├── components/
│   │
│   ├── customers/
│   │   │
│   │   ├── accordions/
│   │   │   ├── PolicyAccordion.jsx
│   │   │   ├── ClaimsAccordion.jsx
│   │   │   └── InvoicesAccordion.jsx
│   │   │
│   │   ├── cards/
│   │   │   ├── CustomerInfoCard.jsx
│   │   │   ├── CustomerStatsCard.jsx
│   │   │   ├── CustomerMetricCard.jsx
│   │   │   ├── ClaimCard.jsx
│   │   │   ├── InvoiceCard.jsx
│   │   │   └── PolicyDetailCard.jsx
│   │   │
│   │   ├── modals/
│   │   │   ├── AddPolicyModal.jsx
│   │   │   ├── AddClaimModal.jsx
│   │   │   └── AddInvoiceModal.jsx
│   │   │
│   │   └── tabs/
│   │       ├── OverviewTab.jsx
│   │       ├── PoliciesTab.jsx
│   │       ├── ClaimsTab.jsx
│   │       └── InvoicesTab.jsx
│   │
│   ├── dashboard/
│   ├── forms/
│   ├── tables/
│   ├── ui/
│   └── uploads/
│
├── layouts/
│   └── DashboardLayout.jsx
│
├── pages/
│   ├── auth/
│   ├── customers/
│   ├── dashboard/
│   ├── policies/
│   ├── claims/
│   ├── invoices/
│   └── payments/
│
├── routes/
│   └── AppRoutes.jsx
│
└── App.js
Authentication System
JWT Authentication

Implemented:

Login
Registration
Protected Routes
Axios JWT interceptor
Persistent login using localStorage
Auth Context provider
Logout system
Auto-authenticated requests
Auth Flow
Login
  ↓
Receive JWT Tokens
  ↓
Store Tokens in localStorage
  ↓
Axios Interceptor Adds Bearer Token
  ↓
Protected API Requests
Backend Architecture
Django Apps
accounts

Handles:

Authentication
JWT
User profile
Registration
Login
customers

Handles:

Customer model
Customer APIs
Customer detail workspace
Customer serializers
Nested customer relationships
policies

Handles:

Policy model
Policy creation
Policy relationships
Policy administration
PDF generation
Policy serializers
claims

Handles:

Claim model
Claim workflows
Claim serializers
Claim notes
Claim attachments
Email notifications
invoices

Handles:

Invoice model
Invoice APIs
Outstanding invoice metrics
Invoice serializers
payments

Handles:

Payment model
Invoice payment tracking
Revenue metrics
Financial workflows
dashboard

Handles:

Dashboard metrics
Revenue analytics
KPI APIs
uploads/documents

Handles:

File uploads
Attachment management
Document previews
Updated Customer Workspace Architecture

The Customer Detail page was completely refactored from a monolithic page into a modular enterprise workspace system.

Customer Detail Workspace
Final Architecture
CustomerDetail.jsx
│
├── CustomerInfoCard
├── CustomerStatsCard
│
├── OverviewTab
├── PoliciesTab
├── ClaimsTab
└── InvoicesTab
│
├── AddPolicyModal
├── AddClaimModal
└── AddInvoiceModal
Enterprise UI Architecture
1. Tabs System

The customer detail page now uses a modular tab-based workspace architecture.

OverviewTab

Displays:

Customer analytics
KPI metrics
Summary cards
Revenue summaries
PoliciesTab

Displays:

Policy administration workspace
Policy accordions
Coverage details
Premium information
Effective dates
Policy status
ClaimsTab

Displays:

Claims grouped by policy
Claims management workspace
Claim statuses
Claim summaries
InvoicesTab

Displays:

Invoices grouped by policy
Billing workspace
Financial management
Payment history foundation
2. Accordion Architecture

The application now uses dedicated accordion systems.

PolicyAccordion

Responsible ONLY for:

Policy details
Premium
Coverage dates
Policy status
ClaimsAccordion

Responsible ONLY for:

Claims grouped under policies
InvoicesAccordion

Responsible ONLY for:

Invoices grouped under policies
Payment history
Financial workflows

This removed excessive nested rendering from the Policies tab and created cleaner separation of concerns.

3. Card Architecture
CustomerInfoCard

Displays:

Customer identity
Email
Phone number
Address
Customer actions
CustomerStatsCard

Displays:

Policy totals
Claim totals
Invoice totals
Revenue metrics
CustomerMetricCard

Reusable enterprise KPI card system.

Used for:

Revenue
Claims
Policies
Financial analytics
Dashboard metrics
ClaimCard

Displays:

Claim number
Claim amount
Incident date
Claim description
Claim status
InvoiceCard

Displays:

Invoice amount
Due date
Invoice status
Payment history foundation
4. Modal Workflow Architecture

Customer modals were extracted into reusable enterprise modal components.

AddPolicyModal

Handles:

Policy creation workflow
AddClaimModal

Handles:

Claim creation workflow
AddInvoiceModal

Handles:

Invoice creation workflow
Enterprise Separation of Concerns

The customer workspace was refactored into domain-specific sections.

Policies Workspace

Responsible for:

Policy administration
Coverage details
Policy lifecycle
Claims Workspace

Responsible for:

Claims administration
Claim tracking
Claim statuses
Incident management
Billing Workspace

Responsible for:

Invoice management
Payments
Outstanding balances
Financial workflows

This structure mirrors real enterprise insurance software architecture.

Current Database Relationships
Customer
Customer
  └── Policies
Policy
Policy
  ├── Claims
  ├── Invoices
  └── Documents
Invoice
Invoice
  └── Payments
Claim
Claim
  ├── Claim Notes
  └── Attachments
Enterprise Features Implemented
Dashboard System

Implemented:

Dashboard metrics API
Revenue analytics
KPI cards
Reusable metric systems
Customer Management

Implemented:

Modular customer workspace
Tab-based architecture
Accordion systems
Customer analytics
Reusable cards
Modal workflows
Policy Management

Implemented:

Policy administration
Policy accordions
Policy lifecycle rendering
Premium tracking
Effective date tracking
Claims System

Implemented:

Claims grouped by policy
Enterprise claim cards
Claim statuses
Claim numbering system
Incident tracking
Claim attachments
Invoice & Financial System

Implemented:

Invoices grouped by policy
Invoice cards
Billing workflows
Financial KPI foundation
Payment history architecture
Reusable Enterprise Component Architecture
Current Reusable Components
Button
Card
Loader
Modal
StatusBadge
DataTable
MetricCard
RevenueChart
CustomerMetricCard
CustomerStatsCard
ClaimCard
InvoiceCard
PolicyAccordion
ClaimsAccordion
InvoicesAccordion
Common Architectural Patterns Used
Current Patterns
Modular workspace architecture
Enterprise tab-based UI
Accordion composition pattern
Reusable card architecture
Modal workflow pattern
Context authentication
Centralized Axios API layer
Nested serializers
Relationship-driven rendering
Domain-separated UI architecture
Enterprise dashboard composition
Major Architectural Improvements Completed
Customer Detail Refactor

The customer detail page was refactored from:

Single large monolithic component

into:

Modular enterprise workspace system

Benefits gained:

Smaller components
Better scalability
Cleaner separation of concerns
Reusable UI systems
Easier debugging
Enterprise maintainability
Improved frontend architecture
Current Enterprise-Level Features

Implemented:

✔ JWT Authentication
✔ Protected Routes
✔ Dashboard Metrics API
✔ Revenue Analytics
✔ Modular Customer Workspace
✔ Enterprise Tabs System
✔ Accordion Architecture
✔ Claims Management Workspace
✔ Billing Workspace
✔ File Uploads
✔ Document Preview
✔ Toast Notifications
✔ Modal Workflow System
✔ Reusable Card System
✔ Reusable Accordion System
✔ API-driven Architecture
✔ Automatic Claim Numbers
✔ Enterprise Tailwind UI
✔ Nested Serializers
✔ Financial Workflow Foundation
Current Application Flow
User Login
    ↓
Dashboard Metrics
    ↓
Customers
    ↓
Customer Workspace
    ├── Overview
    ├── Policies
    ├── Claims
    └── Invoices
Recommended Next Enterprise Phases
1. Payment Workflow System

Build:

Mark invoice paid
Partial payments
Outstanding balances
Payment history
Revenue tracking
Financial analytics
2. Audit Logs + Activity Timeline

Build:

User activity logs
Customer timelines
Claim activity history
Invoice changes
3. Advanced Document Management

Build:

PDF viewer modal
Drag-and-drop uploads
Multi-file uploads
Document categories
4. Role-Based Permissions

Build:

Admin roles
Agent roles
Read-only users
5. Real-Time Notifications

Build:

WebSocket notifications
Claim updates
Invoice reminders
Payment confirmations
6. Enterprise Search System

Build:

Global search
Claims filtering
Invoice filtering
Advanced query filtering
7. Production Deployment Stack

Build:

PostgreSQL
Docker
Nginx
Gunicorn
AWS deployment
CI/CD pipeline
Project Development Philosophy

This project focuses on:

Enterprise frontend architecture
Real SaaS workflows
Modular scalable systems
Clean API design
Relationship-driven systems
Reusable UI composition
Backend-first architecture
Professional insurance workflows
Production-style scalability

The goal is not just learning syntax, but understanding how real enterprise SaaS applications are architected and scaled.