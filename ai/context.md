# context.md

# AI Project Context & Knowledge Map

---

# Purpose

This file is the entry point for the entire project.

Before generating, modifying, refactoring, or deleting any code, Cursor must read this file first.

This document explains:

- How the AI documentation is organized
- Which document is responsible for each decision
- Which file has higher priority when conflicts occur
- How implementation should proceed
- How the AI should think while building this project

Treat this file as the operating system of the AI folder.

---

# Project Overview

Project Type

Premium Trust & Old Age Home Website

Framework

Next.js (App Router)

Language

TypeScript

Styling

Tailwind CSS

Animation

Framer Motion + GSAP + Lenis

Goal

Build a premium, emotionally engaging, highly trustworthy website that feels comparable to award-winning digital experiences while remaining accessible, scalable, SEO-friendly, and production-ready.

---

# AI Documentation Structure

The `ai/` directory is the complete project specification.

Every file has a unique responsibility.

Never ignore these files.

Never replace them with assumptions.

---

# Documentation Map

## project.md

Purpose

Defines

- Project vision
- Goals
- Target audience
- Brand positioning
- Overall direction

Read when

Understanding WHY the project exists.

---

## design.md

Purpose

Defines

- Colors
- Typography
- Spacing
- Grid
- Radius
- Shadows
- Design language
- Visual identity

Read when

Making ANY visual decision.

---

## content.md

Purpose

Defines

- Copywriting style
- Messaging
- Tone of voice
- Storytelling
- Placeholder strategy

Read when

Generating text.

Creating sections.

Writing headings.

Writing CTAs.

Writing metadata.

---

## pages.md

Purpose

Defines

Every page

Every section

Navigation

Hierarchy

Flow

Read when

Building pages.

Planning layouts.

Creating routes.

---

## components.md

Purpose

Defines

Reusable component library.

Read when

Creating new components.

Refactoring.

Building layouts.

Never duplicate components.

---

## features.md

Purpose

Defines

Interactions

Micro-interactions

Premium UX

Animations

Loading states

Hover behavior

Forms

Gallery

Search

Experience

Read when

Building features.

---

## tech.md

Purpose

Defines

Technology stack

Folder structure

TypeScript

State

Performance

Next.js

Server Components

Deployment

Read before writing code.

---

## rules.md

Purpose

Defines

Global development rules.

Coding standards.

Accessibility.

Performance.

Architecture rules.

Read continuously.

Highest priority.

---

## assets.md

Purpose

Defines

Photography

Illustrations

Icons

Videos

SVG

Lottie

Textures

Logos

Optimization

Read when

Choosing assets.

Creating graphics.

Generating images.

---

## prompts.md

Purpose

Defines

AI thinking process.

Creative direction.

Decision making.

Problem solving.

Read whenever uncertain.

---

## todo.md

Purpose

Defines

Implementation order.

Project roadmap.

Milestones.

Definition of Done.

Read before starting development.

---

## architecture.md

Purpose

Defines

Folder architecture

Layer separation

Business logic

Component hierarchy

Data flow

Engineering patterns

Read before creating files.

---

## animations.md

Purpose

Defines

Motion system

Transitions

GSAP

Framer Motion

Timelines

Parallax

Hover

Micro-interactions

Read before animating anything.

---

## seo.md

Purpose

Defines

Metadata

Schema

Structured Data

OpenGraph

Canonical

Search optimization

Read before building every page.

---

## ui-patterns.md

Purpose

Defines

Section blueprints

Layout compositions

Hero variations

CTA layouts

Gallery layouts

Editorial layouts

Grid systems

Read before designing any page.

---

# Priority Order

When documents disagree,

follow this order.

rules.md

↓

architecture.md

↓

design.md

↓

tech.md

↓

ui-patterns.md

↓

animations.md

↓

pages.md

↓

components.md

↓

features.md

↓

seo.md

↓

content.md

↓

assets.md

↓

project.md

↓

prompts.md

↓

todo.md

Never violate a higher-priority document.

---

# Decision Map

Need...

Project goals

→ project.md

Need...

Brand identity

→ design.md

Need...

Writing content

→ content.md

Need...

Page structure

→ pages.md

Need...

Reusable UI

→ components.md

Need...

User experience

→ features.md

Need...

Technology decisions

→ tech.md

Need...

Coding standards

→ rules.md

Need...

Images

→ assets.md

Need...

AI guidance

→ prompts.md

Need...

Implementation order

→ todo.md

Need...

Folder structure

→ architecture.md

Need...

Animations

→ animations.md

Need...

SEO

→ seo.md

Need...

Layout inspiration

→ ui-patterns.md

---

# Development Workflow

Always follow this sequence.

Understand Project

↓

Understand Architecture

↓

Understand Design System

↓

Understand Components

↓

Build Foundation

↓

Build Reusable Components

↓

Build Layout

↓

Build Pages

↓

Add Animations

↓

Optimize Performance

↓

Optimize SEO

↓

Accessibility Review

↓

Testing

↓

Deployment

Never reverse this order.

---

# AI Decision Framework

Before writing any code ask

What am I building?

↓

Why does it exist?

↓

Which page uses it?

↓

Can I reuse something?

↓

Which AI document governs this?

↓

Does it follow the architecture?

↓

Does it follow the design system?

↓

Is it accessible?

↓

Is it responsive?

↓

Is it performant?

↓

Generate code.

---

# Code Generation Rules

Always

Reuse components

Reuse hooks

Reuse utilities

Reuse animations

Reuse layouts

Never duplicate logic.

Never duplicate UI.

Never create one-off solutions.

---

# Performance Rules

Prefer

Server Components

↓

Static Rendering

↓

ISR

↓

Client Components only when required.

Lazy load

Images

Videos

Maps

Charts

Heavy sections

Animations

---

# Accessibility Rules

Every page must support

Keyboard

ARIA

Focus

Reduced Motion

Screen Readers

Semantic HTML

WCAG AA

---

# Animation Rules

Animations must

Guide

Reveal

Support

Reward

Never distract.

Always follow animations.md.

---

# SEO Rules

Every page must include

Metadata

Open Graph

Canonical

Schema

Breadcrumbs

Internal Links

Optimized Images

Follow seo.md.

---

# UI Rules

Never invent layouts.

Choose an appropriate blueprint from ui-patterns.md.

Customize it for the page.

Maintain consistency.

---

# Refactoring Rules

Before creating

Search for existing component.

Before creating hook

Search existing hooks.

Before creating utility

Search utilities.

Before creating animation

Search animations.

Always extend before creating.

---

# Definition of Done

A feature is complete only when

✓ Matches project vision

✓ Follows architecture

✓ Uses reusable components

✓ Matches design system

✓ Uses approved animations

✓ Responsive

✓ Accessible

✓ SEO optimized

✓ High performance

✓ Type-safe

✓ No duplicated code

✓ Production ready

---

# Forbidden Actions

Never

Invent content

Invent statistics

Invent legal documents

Invent reports

Invent residents

Invent donors

Invent awards

Invent APIs

Invent colors

Invent typography

Invent spacing

Invent components

Invent animations

Ignore accessibility

Ignore SEO

Ignore architecture

Ignore reusable patterns

Generate placeholder-quality code

---

# AI Mission

Your mission is not to generate code.

Your mission is to build a premium digital product.

Every decision should improve

Trust

Clarity

Accessibility

Storytelling

Performance

Maintainability

Scalability

Every generated file should feel like it was created by a world-class product design and engineering team.

The AI folder is the constitution of this project.

Read it.

Understand it.

Follow it.

Improve the project without violating it.