# tech.md

# Technical Architecture & Engineering Standards

---

# Purpose

This document defines the complete technical architecture for the project.

The objective is to build a production-ready website that is

• Fast
• Scalable
• SEO Optimized
• Accessible
• Maintainable
• Type Safe
• Reusable
• Future Proof

The project should feel like it was built by a senior engineering team.

---

# Technology Stack

Framework

Next.js (Latest Stable)

App Router

React Server Components

Server Actions where applicable

---

Language

TypeScript

Strict Mode

No JavaScript files unless absolutely necessary.

---

Styling

Tailwind CSS

CSS Variables

Tailwind Config

Class Variance Authority (CVA)

tailwind-merge

clsx

---

UI Library

shadcn/ui

Lucide React

Motion Primitives

Radix UI

---

Animation

Framer Motion

GSAP

GSAP ScrollTrigger

Lenis (Smooth Scroll)

Motion One (optional)

---

Forms

React Hook Form

Zod

---

Validation

Zod

Type-safe schemas

Shared validation

---

Images

next/image

Cloudinary

AWS S3

WebP

AVIF

Blur placeholders

---

Icons

Lucide React

Custom SVG Components

---

Charts

Recharts

Motion-enhanced

---

CMS Ready

Payload CMS

Sanity

Strapi

Headless only

---

Deployment

Vercel

Docker Ready

Node LTS

---

Package Manager

pnpm

---

Folder Structure

app/

components/

lib/

hooks/

services/

types/

config/

constants/

providers/

contexts/

styles/

assets/

public/

utils/

data/

animations/

schemas/

emails/

middleware/

---

App Router Structure

app

layout.tsx

page.tsx

loading.tsx

error.tsx

not-found.tsx

template.tsx

sitemap.ts

robots.ts

manifest.ts

---

Page Organization

about/

programs/

old-age-home/

gallery/

events/

impact/

stories/

donate/

volunteer/

reports/

blog/

contact/

legal/

---

Component Organization

components/

ui/

layout/

sections/

cards/

hero/

forms/

navigation/

animations/

charts/

gallery/

common/

---

Naming Convention

PascalCase

Components

camelCase

Variables

Functions

Hooks

kebab-case

Folders

Files

SCREAMING_SNAKE_CASE

Constants

---

TypeScript Rules

Strict mode enabled

No any

No implicit any

Prefer interfaces

Infer types

Use utility types

Shared types

Generic components

Strong typing everywhere

---

Code Style

Functional Components

Hooks

Composition

No class components

No duplicated logic

Small reusable functions

---

State Management

React Context

Server State

TanStack Query (if required)

Local State

useState

Complex State

useReducer

Avoid unnecessary global state.

---

Server Components

Prefer Server Components.

Use Client Components only when required.

Examples

Forms

Animation

Interactive Charts

Sliders

Search

Filters

---

SEO Architecture

Metadata API

Dynamic metadata

Open Graph

Twitter Cards

Canonical URLs

Structured Data

JSON-LD

Breadcrumb Schema

Organization Schema

FAQ Schema

Article Schema

Event Schema

---

Image Strategy

Use next/image

Priority only for hero

Responsive sizes

Blur placeholders

WebP

AVIF

Lazy loading

No layout shift

---

Performance Targets

Lighthouse

Performance >95

Accessibility >100

SEO >100

Best Practices >100

---

Core Web Vitals

LCP

<2s

CLS

<0.05

INP

<200ms

---

Tailwind Philosophy

Never use inline styles.

Never use arbitrary values unless necessary.

Use design tokens.

Prefer utility composition.

Create reusable variants.

---

Styling Rules

Use

CVA

tailwind-merge

clsx

Avoid

Massive class strings

Repeated utilities

Inline CSS

!important

---

Animation Architecture

animations/

fade.ts

slide.ts

scale.ts

hero.ts

parallax.ts

text.ts

page.ts

cursor.ts

scroll.ts

counter.ts

reveal.ts

---

GSAP Rules

Register plugins once.

Cleanup on unmount.

Use refs.

Avoid DOM queries.

Prefer timelines.

---

Framer Motion Rules

Shared variants

Reusable transitions

Layout animations

AnimatePresence

Viewport animations

Reduced motion support

---

Accessibility

Semantic HTML

ARIA

Keyboard support

Focus management

Reduced motion

Alt text

High contrast

Screen reader support

---

Security

Sanitize inputs

Rate limiting

Secure headers

HTTPS

CSP

Spam protection

CSRF protection where needed

Environment variables

Never expose secrets

---

Environment Variables

NEXT_PUBLIC_

Public only

Private keys

Server only

Typed env

Validation at startup

---

Configuration

config/

site.ts

seo.ts

navigation.ts

social.ts

theme.ts

animations.ts

donation.ts

---

Constants

constants/

colors.ts

routes.ts

icons.ts

links.ts

statistics.ts

programs.ts

---

Utilities

utils/

format.ts

date.ts

currency.ts

slug.ts

seo.ts

validation.ts

scroll.ts

animation.ts

---

Hooks

hooks/

useScroll.ts

useCounter.ts

useMedia.ts

useParallax.ts

useIntersection.ts

useMounted.ts

useReducedMotion.ts

useDebounce.ts

useCopy.ts

---

Providers

ThemeProvider

MotionProvider

QueryProvider

ToastProvider

AnalyticsProvider

---

Error Handling

Graceful fallbacks

Error Boundaries

Custom 404

Retry logic

Friendly messages

---

Loading

Skeletons

Streaming

Suspense

Lazy imports

Optimistic UI where applicable

---

Caching

Static pages

ISR

Image caching

Route caching

Metadata caching

---

Data Fetching

Prefer Server Components

Async functions

Server Actions

Fetch caching

Revalidation

---

Reusable Data

Store static content inside

data/

JSON

TS Objects

CMS Ready

---

API Structure

lib/api/

donations.ts

gallery.ts

events.ts

blog.ts

reports.ts

contact.ts

volunteer.ts

---

Validation

schemas/

contact.ts

donation.ts

volunteer.ts

newsletter.ts

event.ts

---

Forms

React Hook Form

Zod Resolver

Accessible labels

Inline validation

Loading

Success

Error

---

Analytics

Google Analytics

Google Tag Manager

Search Console

Plausible (optional)

Microsoft Clarity

---

Email

Resend

React Email

Server Actions

---

Search

Fuse.js

Server Search

CMS Search Ready

---

Internationalization

Architecture should support

English

Hindi

Gujarati

RTL ready

---

Theme

Light Theme

Dark Theme Ready

CSS Variables

Theme Provider

---

Testing Ready

Vitest

Playwright

React Testing Library

Storybook Ready

---

Code Quality

ESLint

Prettier

Husky

lint-staged

Commitlint

Conventional Commits

---

Git Strategy

main

development

feature/*

hotfix/*

release/*

---

Documentation

Every reusable hook

Every utility

Every provider

Every complex component

Should include JSDoc comments.

---

Dependency Philosophy

Keep dependencies minimal.

Every package must have a clear purpose.

Prefer native browser APIs whenever possible.

---

Scalability

Design every feature assuming

100+

Pages

1000+

Gallery Images

Thousands of Blog Posts

Future CMS

Multi-language

Donation Dashboard

Volunteer Dashboard

Admin Portal

---

AI Engineering Rules

Whenever generating code

- Use TypeScript with strict typing.
- Prefer Server Components over Client Components.
- Build reusable, composable components.
- Follow SOLID principles where appropriate.
- Keep files small and focused.
- Separate UI, business logic, and data.
- Never duplicate logic.
- Optimize for Core Web Vitals.
- Use semantic HTML and accessible patterns.
- Lazy-load heavy components and media.
- Ensure every component is responsive.
- Follow the design system defined in `design.md`.
- Follow the interaction rules defined in `features.md`.
- Keep the architecture CMS-ready and scalable.

The resulting codebase should resemble the engineering quality of modern production applications built by companies such as Vercel, Stripe, Shopify, and Linear—clean, maintainable, performant, and easy to extend.