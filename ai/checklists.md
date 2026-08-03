# checklists.md

# Quality Assurance & Review Checklists

---

# Purpose

This document defines the mandatory quality checks for the entire project.

Every generated page, component, feature, animation, and interaction must pass these checklists before being considered complete.

Never skip validation.

Never sacrifice quality for speed.

---

# Golden Rule

Every feature must satisfy:

✓ Beautiful

✓ Functional

✓ Accessible

✓ Responsive

✓ Reusable

✓ Performant

✓ SEO Optimized

✓ Type Safe

✓ Production Ready

---

# Foundation Checklist

□ Project builds successfully

□ No TypeScript errors

□ No ESLint warnings

□ Folder structure follows architecture.md

□ Theme configured

□ Design tokens implemented

□ Fonts optimized

□ Metadata configured

□ Global styles applied

□ Providers configured

□ Utilities organized

□ Environment variables documented

---

# Component Checklist

Before creating a component

□ Search if similar component already exists

□ Reuse existing UI if possible

□ Follow design system

□ Follow naming convention

After implementation

□ Single responsibility

□ Reusable

□ Configurable via props

□ Responsive

□ Accessible

□ Keyboard friendly

□ Proper focus states

□ Loading state

□ Empty state (if applicable)

□ Error state (if applicable)

□ Animation follows animations.md

□ Uses design tokens

□ Uses semantic HTML

□ No duplicated logic

□ Under 250 lines (unless justified)

---

# Page Checklist

Every page must include

□ Metadata

□ Hero section

□ Logical content hierarchy

□ CTA

□ Internal links

□ Breadcrumb

□ Footer

□ Mobile optimization

□ Tablet optimization

□ Desktop optimization

□ Accessibility review

□ SEO review

□ Performance review

□ Error handling

□ Loading state

□ Empty state (if dynamic)

---

# Responsive Checklist

Mobile (320px+)

□ Navigation works

□ Typography readable

□ Images responsive

□ Touch targets ≥ 44px

□ Forms usable

□ Buttons accessible

Tablet

□ Grid adapts correctly

□ Layout balanced

□ No overflow

Desktop

□ Layout centered

□ Proper spacing

□ Hover states

□ Wide-screen optimization

---

# Accessibility Checklist

□ Semantic HTML

□ One H1

□ Logical heading hierarchy

□ ARIA labels where needed

□ Keyboard navigation

□ Visible focus states

□ Screen reader friendly

□ Alt text for every image

□ Form labels

□ Error messages announced

□ Sufficient color contrast

□ Reduced motion support

□ No keyboard traps

□ Skip to content link

□ Landmark elements

Target

WCAG 2.2 AA

---

# SEO Checklist

Every page

□ Unique title

□ Unique description

□ Canonical URL

□ Open Graph

□ Twitter Card

□ JSON-LD

□ Sitemap inclusion

□ Robots configuration

□ Breadcrumb schema

□ Internal links

□ External links open safely

□ Optimized images

□ Proper URL slug

□ Correct heading hierarchy

□ Keywords naturally included

---

# Content Checklist

□ Tone matches content.md

□ Emotionally engaging

□ No spelling errors

□ No grammar issues

□ Clear CTA

□ Readable paragraphs

□ Consistent terminology

□ Human-centered language

□ No placeholder text

□ No lorem ipsum

□ No AI-generated clichés

---

# Animation Checklist

□ Animation has purpose

□ Smooth at 60 FPS

□ Hardware accelerated

□ Uses transform/opacity

□ Respects reduced motion

□ Consistent duration

□ Consistent easing

□ No distracting motion

□ No layout shifts

□ Works on mobile

□ Works on Safari

□ Doesn't block interaction

---

# Performance Checklist

□ Lighthouse ≥95

□ LCP <2.5s

□ CLS <0.1

□ INP <200ms

□ Images optimized

□ Lazy loading enabled

□ Fonts optimized

□ Dynamic imports used

□ Bundle size reviewed

□ Tree shaking effective

□ No unused assets

□ Minimal client JavaScript

---

# Image Checklist

□ WebP/AVIF

□ Correct dimensions

□ next/image used

□ Alt text

□ Responsive sizes

□ Lazy loaded

□ Priority only for hero

□ Meaningful filename

□ Optimized quality

---

# Form Checklist

□ Validation

□ Zod schema

□ React Hook Form

□ Error handling

□ Success state

□ Loading state

□ Accessible labels

□ Keyboard friendly

□ Spam protection

□ Mobile friendly

---

# Navigation Checklist

□ Active link state

□ Keyboard navigation

□ Mobile menu

□ Sticky behavior

□ Smooth scrolling

□ Accessible dropdowns

□ Logo links home

□ Donate CTA visible

---

# Hero Section Checklist

□ Strong headline

□ Emotional subheading

□ Clear CTA

□ High-quality visual

□ Trust indicators

□ Responsive

□ Animation sequence

□ Optimized LCP

---

# Card Checklist

□ Consistent padding

□ Hover state

□ Focus state

□ Accessible

□ Responsive

□ Reusable

□ Shadow consistency

□ Radius consistency

---

# Gallery Checklist

□ Masonry/grid layout

□ Lightbox

□ Keyboard support

□ Lazy loading

□ Optimized thumbnails

□ Category filters

□ Smooth transitions

---

# Donation Checklist

□ Donation categories

□ Secure messaging

□ Tax benefit info

□ Trust indicators

□ Payment methods

□ Mobile friendly

□ Confirmation state

□ Error handling

---

# Volunteer Checklist

□ Form validation

□ Required fields

□ Success state

□ Confirmation message

□ Responsive layout

□ Accessible inputs

---

# Reports Checklist

□ Download links

□ Document previews

□ Proper metadata

□ Organized categories

□ Accessible tables

---

# Blog Checklist

□ Author

□ Publish date

□ Reading time

□ Categories

□ Tags

□ Related articles

□ Social sharing

□ Schema

---

# Footer Checklist

□ Contact info

□ Quick links

□ Social links

□ Legal pages

□ Newsletter

□ Copyright

□ Responsive layout

---

# Browser Checklist

□ Chrome

□ Safari

□ Firefox

□ Edge

□ Android Chrome

□ Mobile Safari

---

# Code Review Checklist

□ DRY

□ SOLID

□ No duplicated code

□ Clear naming

□ Small components

□ Proper imports

□ Type-safe

□ No any types

□ Comments only where necessary

□ Consistent formatting

---

# Security Checklist

□ Environment variables protected

□ No secrets committed

□ Input validation

□ XSS prevention

□ Secure external links

□ CSP compatible

□ HTTPS only

---

# Analytics Checklist

□ Google Analytics

□ Search Console

□ Event tracking

□ Donation tracking

□ Volunteer tracking

□ Contact form tracking

---

# Deployment Checklist

□ Production build passes

□ Environment variables set

□ Domain configured

□ SSL enabled

□ Sitemap generated

□ robots.txt verified

□ Metadata verified

□ Analytics connected

□ Error monitoring enabled

□ Backup strategy ready

---

# Post-Launch Checklist

□ Test donation flow

□ Test volunteer form

□ Test contact form

□ Verify all links

□ Verify images

□ Verify structured data

□ Verify indexing

□ Submit sitemap

□ Monitor Core Web Vitals

□ Monitor analytics

---

# AI Self-Review

Before finishing any task, ask:

1. Does this follow architecture.md?

2. Does it match design.md?

3. Does it use existing components?

4. Does it follow ui-patterns.md?

5. Does it respect animations.md?

6. Does it follow seo.md?

7. Is it accessible?

8. Is it responsive?

9. Is it performant?

10. Is it production-ready?

If any answer is "No", revise before proceeding.

---

# Definition of Done

A task is complete only when:

✓ Meets all functional requirements

✓ Matches the visual design system

✓ Uses reusable architecture

✓ Is fully responsive

✓ Meets WCAG AA accessibility

✓ Passes SEO validation

✓ Meets performance targets

✓ Uses consistent animations

✓ Contains no placeholder content

✓ Passes lint and type checks

✓ Has no duplicated code

✓ Is documented where necessary

✓ Is ready for production deployment

---

# Final Principle

Quality is not a final step.

Quality is part of every decision.

Every line of code, every component, every animation, every piece of content, and every interaction should be reviewed against these checklists before it becomes part of the project.

The goal is not simply to finish the website—it is to deliver a polished, maintainable, accessible, performant, and trustworthy digital experience that reflects the mission of the trust and stands alongside the best modern web experiences.