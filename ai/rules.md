# rules.md

# Global AI Rules & Development Standards

---

# Purpose

This document contains the universal rules that every AI-generated file, component, page, animation, and feature must follow.

Whenever there is a conflict between files, **this document takes highest priority**.

The objective is consistency.

Every generated output should feel like it was created by the same senior engineering and design team.

---

# Golden Principles

Always prioritize

Quality

Consistency

Accessibility

Performance

Scalability

Maintainability

Readability

Reusability

Never prioritize shortcuts.

---

# Design Rules

Always follow design.md.

Never invent new colors.

Never invent new spacing.

Never invent new typography.

Never invent new shadows.

Never invent random border radius.

Never invent new button styles.

Everything must come from the design system.

---

# Component Rules

Always reuse components.

Never duplicate UI.

If a similar component exists,

extend it.

Do not create a new one.

Build pages using composition.

Never hardcode layouts.

---

# Content Rules

Always follow content.md.

Never invent

Statistics

Residents

Donors

Volunteers

Awards

Reports

Years

Government approvals

Financial information

Use placeholders.

Example

{{TOTAL_RESIDENTS}}

{{TOTAL_DONATIONS}}

{{FOUNDER_NAME}}

{{TRUST_NAME}}

---

# Animation Rules

Animations must

Guide attention

Never distract.

Prefer

Opacity

Transform

Scale

Blur

Avoid

Width animation

Height animation

Margin animation

Heavy shadow animation

Layout shifts

Infinite bouncing

Fast flashing

---

# Performance Rules

Every feature must

Lazy load

Code split

Optimize images

Reduce bundle size

Avoid unnecessary renders

Avoid unnecessary dependencies

Target Lighthouse

95+

---

# Accessibility Rules

Every page must support

Keyboard navigation

Screen readers

Visible focus

Reduced motion

Semantic HTML

Alt text

Proper labels

Accessible forms

Color contrast

---

# Responsive Rules

Design mobile first.

Every layout must work on

320px

375px

480px

768px

1024px

1280px

1536px

Never simply scale desktop.

Adapt layouts.

---

# Typography Rules

Never use more than

2 font families

Never use

All caps paragraphs

Tiny text

Dense paragraphs

Very long lines

Maximum reading width

680px

---

# Layout Rules

Use consistent spacing.

Use

8pt spacing system.

Always align content.

Maintain visual rhythm.

Keep whitespace generous.

---

# Color Rules

Use only approved palette.

Primary

#0A1931

Secondary

#1A3D63

Accent

#4A7FA7

Soft

#B3CFE5

Background

#F6FAFD

Do not introduce random colors.

---

# Image Rules

Only use

High quality

Real photography

Warm lighting

Authentic moments

Natural expressions

Avoid

Obvious stock photos

Artificial AI faces

Over-processed images

Clipart

---

# Illustration Rules

Minimal

Organic

Rounded

Soft colors

No childish illustrations.

---

# Icon Rules

Lucide preferred.

Consistent stroke width.

Outline icons.

Rounded style.

---

# SVG Rules

Use subtle SVGs.

Examples

Wave

Blob

Grid

Dots

Sparkles

Leaf

Cross

Curve

Never overpower content.

---

# Card Rules

Rounded

Soft shadow

Hover lift

Image zoom

Gradient border (subtle)

Comfortable padding

Readable spacing

---

# Button Rules

Every button must have

Hover

Focus

Active

Disabled

Loading

Success

Keyboard support

Large touch area

---

# Form Rules

Every form needs

Validation

Helpful errors

Loading state

Success state

Accessibility

Spam protection

---

# Navigation Rules

Sticky

Responsive

Accessible

Glass effect

Transparent hero

Solid after scroll

Hide on downward scroll

Reveal on upward scroll

---

# Hero Rules

Every page hero must contain

Title

Description

Background

Breadcrumb

CTA

Gradient overlay

Scroll indicator

Decorative SVG

Animation

---

# Section Rules

Every section should contain

Purpose

Heading

Description

Visual

Supporting content

CTA (if required)

---

# CTA Rules

Every major page ends with

Large CTA section.

Never end abruptly.

CTA should

Inspire

Not pressure.

---

# Storytelling Rules

Every page should tell a story.

Beginning

↓

Problem

↓

Solution

↓

Impact

↓

Participation

Never dump information.

Guide users naturally.

---

# Scroll Rules

Content reveals gradually.

No sudden appearance.

Maintain consistent timing.

---

# Hover Rules

Every interactive element

Provides feedback.

Hover should feel soft.

Never over animate.

---

# Motion Rules

Respect

prefers-reduced-motion

Disable unnecessary animations.

Maintain usability.

---

# Loading Rules

Never show blank screens.

Always show

Skeleton

Placeholder

Progress

Loading animation

---

# Empty State Rules

Every empty state should contain

Illustration

Helpful text

CTA

Never show empty white space.

---

# Error Rules

Friendly message

Illustration

Retry button

Support option

---

# SEO Rules

Every page requires

Title

Description

Open Graph

Twitter Card

Structured Data

Canonical URL

Proper headings

Image alt text

---

# Security Rules

Never expose secrets.

Validate all inputs.

Escape user content.

Protect forms.

Use HTTPS.

---

# Coding Rules

Use

TypeScript

Strict mode

Reusable hooks

Reusable utilities

Reusable components

No duplicated logic

No inline styles

No magic numbers

No unnecessary comments

---

# Folder Rules

Keep folders organized.

Small files.

Single responsibility.

Predictable naming.

---

# Dependency Rules

Every dependency must have a reason.

Avoid package bloat.

Prefer native APIs.

---

# Naming Rules

Components

PascalCase

Functions

camelCase

Hooks

useSomething

Files

kebab-case

Constants

UPPER_CASE

---

# State Rules

Prefer

Server Components

Server Actions

React Context

Avoid unnecessary global state.

---

# AI Generation Rules

Before creating anything ask internally:

Can an existing component solve this?

Can this be reused?

Does it follow design.md?

Does it follow content.md?

Does it follow features.md?

Is it accessible?

Is it responsive?

Is it performant?

If any answer is "No",

improve before generating.

---

# Forbidden Practices

Never

Duplicate code

Duplicate components

Hardcode data

Use inline CSS

Ignore accessibility

Ignore mobile

Ignore performance

Invent content

Invent statistics

Invent awards

Invent documents

Invent people

Use lorem ipsum

Use placeholder stock photos

Break design consistency

Ignore SEO

Ignore reduced motion

Ignore semantic HTML

Use unnecessary animations

Create visual clutter

---

# Quality Checklist

Every page must pass

✓ Mobile responsive

✓ Pixel-perfect alignment

✓ Accessible

✓ SEO optimized

✓ Performance optimized

✓ Reusable components

✓ Design consistency

✓ Smooth animations

✓ Storytelling flow

✓ Strong CTA

✓ Semantic HTML

✓ Type-safe code

✓ No duplication

✓ Clean architecture

✓ Production ready

---

# Final Rule

Whenever generating code, content, layouts, animations, or components:

Build as if the project will be reviewed by the world's best frontend engineers, UX designers, accessibility experts, and Awwwards judges.

Every decision should answer one question:

> "Does this improve the user's trust, experience, and emotional connection while keeping the codebase clean, scalable, and maintainable?"

If not, redesign before generating.