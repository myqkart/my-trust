# architecture.md

# Project Architecture & Engineering Blueprint

---

# Purpose

This document defines the complete architecture of the project.

It describes

- Folder structure
- Component hierarchy
- Code organization
- Data flow
- State management
- Naming conventions
- Reusability patterns
- Separation of concerns
- Scalability strategy

Whenever AI generates code, it must follow this architecture.

Never invent new patterns.

Never place files arbitrarily.

---

# Engineering Philosophy

Think like a senior software architect.

Build

Small

Composable

Reusable

Scalable

Predictable

Maintainable

Testable

Accessible

Performance-first

Every file should have one responsibility.

---

# High Level Architecture

Application

│

├── Presentation Layer

├── UI Components

├── Feature Components

├── Business Logic

├── Services

├── Data

├── Utilities

├── Configurations

├── Providers

└── Assets

Each layer should remain independent.

---

# Folder Structure

app/

components/

animations/

hooks/

providers/

contexts/

lib/

services/

schemas/

types/

utils/

constants/

config/

data/

styles/

public/

middleware/

---

# App Structure

app/

layout.tsx

page.tsx

loading.tsx

error.tsx

not-found.tsx

template.tsx

robots.ts

sitemap.ts

manifest.ts

globals.css

---

# Route Structure

app/

about/

programs/

old-age-home/

gallery/

stories/

events/

impact/

volunteer/

donate/

reports/

blog/

contact/

privacy/

terms/

refund/

cookies/

accessibility/

Each route owns

page.tsx

loading.tsx

error.tsx

metadata.ts (optional)

---

# Component Hierarchy

Page

↓

Layout

↓

Sections

↓

Blocks

↓

Cards

↓

UI Components

↓

Primitives

Never skip layers.

---

Example

Home Page

↓

Hero Section

↓

Hero Content

↓

Statistic Cards

↓

Button

↓

Icon

---

# Components

components/

ui/

layout/

navigation/

hero/

sections/

cards/

charts/

gallery/

forms/

cta/

timeline/

animations/

common/

---

# Component Rules

One component

One responsibility.

Never create huge components.

Maximum

250 lines

Split when necessary.

---

# Component Composition

Correct

Hero

↓

HeroContent

HeroImage

HeroButtons

HeroStats

HeroBackground

Incorrect

HeroWithEverythingInside.tsx

---

# Feature Organization

Each feature owns

Components

Hooks

Types

Utilities

Constants

Example

features/

donation/

components/

hooks/

types/

utils/

constants/

---

# Data Layer

Never hardcode data.

Use

data/

Example

programs.ts

events.ts

statistics.ts

navigation.ts

partners.ts

faq.ts

testimonials.ts

---

# Services

services/

donation.ts

gallery.ts

contact.ts

newsletter.ts

events.ts

reports.ts

blog.ts

Only API logic belongs here.

---

# Utilities

utils/

date.ts

currency.ts

slug.ts

seo.ts

animation.ts

validation.ts

image.ts

scroll.ts

clipboard.ts

No business logic.

---

# Hooks

hooks/

useCounter.ts

useScroll.ts

useIntersection.ts

useParallax.ts

useMedia.ts

useReducedMotion.ts

useDebounce.ts

useCopy.ts

useWindowSize.ts

Hooks should never contain UI.

---

# Providers

providers/

ThemeProvider

MotionProvider

ToastProvider

AnalyticsProvider

QueryProvider

Providers should stay lightweight.

---

# Contexts

contexts/

ThemeContext

DonationContext

VolunteerContext

Only use Context when necessary.

Avoid global state.

---

# Types

types/

program.ts

resident.ts

gallery.ts

blog.ts

event.ts

report.ts

donation.ts

volunteer.ts

Never duplicate interfaces.

---

# Schemas

schemas/

contact.ts

newsletter.ts

donation.ts

volunteer.ts

event.ts

Always use Zod.

---

# Config

config/

site.ts

theme.ts

navigation.ts

seo.ts

social.ts

animations.ts

Donations.ts

Centralize configuration.

---

# Constants

constants/

routes.ts

colors.ts

breakpoints.ts

icons.ts

links.ts

statistics.ts

Never hardcode constants.

---

# Assets

public/

images/

videos/

svg/

patterns/

logos/

documents/

icons/

lottie/

---

# Business Logic

UI never talks directly to APIs.

Flow

Component

↓

Hook

↓

Service

↓

API

Never

Component

↓

API

---

# State Hierarchy

Prefer

Server State

↓

URL State

↓

Local State

↓

Context

↓

Global State

Use the smallest possible scope.

---

# Server Components

Default

Server Components

Client Components only when

Animation

Forms

Charts

Sliders

Search

Filters

Interactive Maps

---

# File Size Rules

Component

<250 lines

Hook

<150 lines

Utility

<100 lines

Config

<100 lines

Split large files.

---

# Import Order

React

↓

Next

↓

Third-party

↓

Internal

↓

Components

↓

Hooks

↓

Types

↓

Styles

Maintain consistency.

---

# Dependency Direction

Pages

↓

Sections

↓

Components

↓

UI

↓

Utilities

Never reverse dependencies.

---

# Reusability Rules

Never duplicate

Cards

Buttons

Inputs

Sections

Layouts

Always reuse.

---

# Error Handling

Every async operation

Loading

Success

Error

Retry

Fallback

---

# Loading Strategy

Skeletons

Suspense

Streaming

Lazy loading

Progressive rendering

Never blank screens.

---

# Forms

React Hook Form

↓

Zod

↓

Server Action/API

↓

Toast

↓

Success

Never manual validation.

---

# Images

Always

next/image

Responsive

Blur Placeholder

WebP

AVIF

Lazy Load

---

# Animation Layer

animations/

fade.ts

slide.ts

scale.ts

hero.ts

counter.ts

parallax.ts

text.ts

page.ts

cursor.ts

scroll.ts

Never duplicate animation variants.

---

# Theme Architecture

theme/

colors.ts

spacing.ts

radius.ts

typography.ts

shadow.ts

motion.ts

z-index.ts

tokens.ts

Everything should come from tokens.

---

# Responsive Strategy

Mobile First

Breakpoints

sm

md

lg

xl

2xl

Never use pixel-perfect hacks.

---

# Accessibility Layer

Semantic HTML

ARIA

Keyboard

Focus

Reduced Motion

Screen Reader

Every component supports accessibility.

---

# SEO Layer

Metadata API

JSON-LD

Canonical

Open Graph

Twitter Card

Breadcrumb Schema

Organization Schema

Event Schema

FAQ Schema

---

# Performance Layer

Image optimization

Dynamic imports

Code splitting

Tree shaking

Lazy loading

Memoization

Route caching

Streaming

---

# Security Layer

HTTPS

Environment variables

Rate limiting

Spam protection

Input sanitization

Content Security Policy

Secure headers

---

# Logging

Development

Console

Production

Analytics

Error Tracking

Monitoring

Never expose sensitive information.

---

# Naming Convention

Folders

kebab-case

Components

PascalCase

Hooks

useSomething

Types

PascalCase

Interfaces

PascalCase

Constants

UPPER_CASE

Functions

camelCase

---

# Code Principles

DRY

KISS

SOLID

Composition over inheritance

Single Responsibility

Predictable APIs

Pure functions whenever possible

---

# AI Generation Workflow

Whenever generating code

1.

Understand the page

↓

2.

Identify reusable components

↓

3.

Identify existing hooks

↓

4.

Identify required services

↓

5.

Identify required types

↓

6.

Reuse utilities

↓

7.

Generate UI

↓

8.

Optimize

↓

9.

Review accessibility

↓

10.

Review performance

Never jump directly into writing code.

---

# Forbidden Architecture

Never

Mix UI and business logic

Hardcode API calls

Duplicate components

Duplicate hooks

Duplicate utilities

Store constants inside components

Store data inside JSX

Create giant components

Create deeply nested folders

Create circular dependencies

Ignore Server Components

Ignore accessibility

Ignore performance

---

# Quality Gate

Every generated feature must satisfy

✓ Follows folder architecture

✓ Reuses existing components

✓ Uses shared hooks

✓ Uses shared utilities

✓ Uses shared types

✓ Uses shared constants

✓ Uses shared animations

✓ Accessible

✓ Responsive

✓ Type-safe

✓ Performance optimized

✓ SEO ready

✓ Production ready

---

# Final Architecture Principle

The codebase should feel as if it was designed by a principal software architect.

Every folder should have a clear purpose.

Every file should have a single responsibility.

Every component should be reusable.

Every feature should be composable.

Every interaction should be predictable.

Every line of code should make future development easier—not harder.

If there is ever a choice between writing code quickly or architecting it properly, always choose the architecture.