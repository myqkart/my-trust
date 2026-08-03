# animations.md

# Motion Design System & Animation Choreography

---

# Purpose

This document defines the complete animation language of the website.

Animations should never exist for decoration.

Every motion must communicate

Direction

Hierarchy

Emotion

Feedback

Delight

Trust

The website should feel cinematic, premium, calm, elegant, and human.

Never flashy.

Never distracting.

---

# Inspiration

The animation quality should feel inspired by

Apple

Stripe

Linear

Framer

Vercel

Awwwards

Semplice

Patagonia

Charity: Water

Notion

Motion should feel invisible until noticed.

---

# Animation Stack

Primary

Framer Motion

Use For

Component animations

Page transitions

Hover interactions

Shared layout animations

Presence animations

Gesture interactions

---

Secondary

GSAP

Use For

Hero storytelling

Pinned sections

ScrollTrigger

Parallax

SVG animation

Timeline choreography

Image reveals

Counters

Text sequences

Horizontal scrolling

---

CSS

Use For

Buttons

Links

Inputs

Simple hover states

Focus states

Opacity

Transform

Never use CSS for complex storytelling.

---

# Motion Philosophy

Every animation must answer

Why is this moving?

If there is no reason,

remove it.

---

# Global Timing

Instant

100ms

Micro

150ms

Fast

250ms

Normal

400ms

Slow

600ms

Story

800–1200ms

Never exceed

1500ms

---

# Global Easing

Primary

easeOut

Secondary

easeInOut

Elastic

Only success animations

Never use bounce for page transitions.

---

# Stagger Rules

Cards

60ms

Buttons

80ms

Text

40ms

Gallery

50ms

Statistics

100ms

Timeline

120ms

Never stagger more than

12 items.

---

# Viewport Trigger

Default

once: true

amount: 0.2

Animate only when entering viewport.

Never replay continuously.

---

# Reduced Motion

Respect

prefers-reduced-motion

Disable

Parallax

Mouse movement

Floating particles

Large transforms

Replace with

Fade

Opacity

Instant reveal

---

# Page Transition

Sequence

Fade Out

↓

Blur

↓

Scale 0.98

↓

Slide Up

↓

Fade In

↓

Reveal Hero

Duration

500ms

---

# Hero Animation

Timeline

Background

↓

Gradient

↓

Headline

↓

Subtitle

↓

Buttons

↓

Statistics

↓

Scroll Indicator

↓

Floating Shapes

Everything should feel choreographed.

---

# Headline Animation

Reveal

Word by word

Opacity

0 → 1

TranslateY

24px → 0

Blur

12px → 0

Duration

700ms

---

# Paragraph Animation

Fade

↓

Slide Up

↓

Blur Remove

Maximum delay

250ms

---

# Image Reveal

Initial

Scale

1.08

Blur

16px

Opacity

0

Reveal

Scale

1

Blur

0

Opacity

1

Duration

800ms

---

# Card Reveal

Opacity

0 → 1

Y

40 → 0

Duration

500ms

Stagger

60ms

---

# Card Hover

Lift

8px

Shadow Increase

Image Zoom

1.05

Gradient Glow

Border Highlight

Arrow Slide

4px

---

# Button Hover

Lift

2px

Glow

Gradient Shift

Arrow Move

Ripple

Cursor Magnet

Desktop only

---

# Navigation Animation

Transparent

↓

Glass

↓

Solid

↓

Hide on Scroll Down

↓

Reveal on Scroll Up

Menu

Fade

Scale

Stagger Links

---

# Counter Animation

Animate

0 → Target

Ease Out

Duration

2s

Run only once.

---

# Progress Bars

Fill Left → Right

Animate Percentage

Trigger on Scroll

---

# Timeline Animation

Line grows

↓

Milestone appears

↓

Content fades

↓

Image reveals

---

# Gallery Animation

Images

Scale

Blur

Fade

Hover

Zoom

Overlay

Caption

Lightbox

Fade + Scale

---

# Testimonial Animation

Quote

Fade

Avatar

Scale

Text

Slide

Navigation

Smooth

Auto Pause on Hover

---

# FAQ Animation

Height

Auto

Opacity

Chevron Rotate

Smooth

300ms

---

# Accordion

Expand

Fade

Scale

Collapse

Reverse

---

# Tabs

Underline Slide

Content Fade

Shared Layout Animation

---

# Modal

Overlay Fade

Content Scale

Backdrop Blur

ESC Close

Click Outside

---

# Drawer

Slide

Fade

Background Blur

Gesture Close

---

# Toast

Slide

Fade

Progress Indicator

Auto Dismiss

---

# Loading Screen

Logo Draw

↓

Gradient

↓

Progress

↓

Fade

Never longer than

2 seconds

---

# Skeleton

Shimmer

Soft Gradient

Pulse

Never flash.

---

# Empty State

Illustration

↓

Text

↓

CTA

Fade In

---

# Error State

Illustration

↓

Headline

↓

Description

↓

Retry Button

---

# Success Animation

Checkmark Draw

Glow

Confetti (minimal)

Fade Out

---

# Scroll Storytelling

Reveal content gradually.

Never reveal entire page.

Preferred sequence

Heading

↓

Description

↓

Image

↓

Cards

↓

CTA

---

# Hero Background

Floating blobs

Mesh gradient

Particles

Noise

Parallax

Soft rotation

Opacity breathing

---

# Mouse Parallax

Background

4px

Shapes

8px

Images

12px

Never move text.

---

# Floating Elements

Leaves

Crosses

Dots

Sparkles

Gradient Orbs

Motion should be

Slow

Organic

Random

---

# Decorative SVG Animation

Wave

Gentle movement

Blob

Morph

Arrow

Draw

Leaf

Sway

Stars

Twinkle

Opacity Pulse

---

# Divider Animation

Wave

Draw

Gradient Sweep

Fade

---

# SVG Path Drawing

Founder Signature

Timeline

Map Route

Donation Journey

Always use stroke animation.

---

# Statistics

Fade

↓

Count

↓

Highlight

↓

Glow

---

# Chart Animation

Bars

Grow

Pie

Sweep

Line

Draw

Legend

Fade

---

# Video

Fade In

Play on interaction

Pause when hidden

Intersection Observer

---

# Forms

Input Focus Glow

Label Float

Validation Shake

Success

Checkmark

Submit

Loading Spinner

---

# Donation Widget

Amount Card Hover

Selection Glow

Progress Ring

Secure Badge

Success Celebration

---

# Volunteer Form

Step Transition

Progress Bar

Completion Badge

Success Illustration

---

# Reading Progress

Top Progress Bar

Gradient Fill

Scroll Linked

---

# Back To Top

Fade

Scale

Rotate Slightly

Smooth Scroll

---

# Cursor Effects

Desktop Only

Cursor Follower

Button Magnet

Image Cursor

Text Label

Spotlight

Disable on touch.

---

# Section Transition

Divider

↓

Heading

↓

Content

↓

CTA

↓

Next Divider

---

# Footer

Reveal

Wave Divider

Logo Fade

Links Stagger

Newsletter

Social Icons

---

# Performance Rules

Animate only

Opacity

Transform

Filter (minimal)

Avoid

Width

Height

Margin

Padding

Top

Left

Right

Bottom

Never animate layout.

---

# GSAP Rules

Register plugins once.

Kill timelines on unmount.

Use refs.

Use context.

Avoid global selectors.

---

# Framer Motion Rules

Use variants.

Shared transitions.

AnimatePresence.

Layout animations.

MotionConfig.

Reduced motion support.

---

# Animation Tokens

Duration

xs

100ms

sm

200ms

md

400ms

lg

600ms

xl

900ms

Spacing

Small

8px

Medium

16px

Large

32px

Huge

64px

---

# AI Animation Rules

Whenever generating animations

Always ask

Does this animation improve clarity?

Does it reinforce hierarchy?

Does it improve storytelling?

Does it improve accessibility?

Can it be simplified?

If not,

remove it.

---

# Forbidden Animations

Never use

Random bouncing

Fast spinning

Flashing

Blinking

Infinite pulsing

Heavy shaking

Continuous zoom

Distracting particles

Confetti everywhere

Neon effects

Overpowered glassmorphism

Huge rotations

Random 3D transforms

---

# Quality Checklist

Every animation should be

✓ Purposeful

✓ Smooth (60 FPS)

✓ Accessible

✓ Hardware accelerated

✓ Consistent

✓ Responsive

✓ Elegant

✓ Performance friendly

✓ Emotionally appropriate

✓ Easy to disable

---

# Final Motion Principle

Motion should feel like breathing.

It should guide, not demand attention.

Visitors should remember the story and the feeling—not the animation itself.

The finished experience should feel handcrafted, cinematic, and deeply human while maintaining exceptional performance, accessibility, and consistency across the entire website.