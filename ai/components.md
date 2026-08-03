# components.md

# Component Architecture & Design System

---

# Purpose

This document defines every reusable UI component used throughout the website.

The goal is to create a scalable, consistent, and maintainable design system.

No page should build custom UI if an existing component can be reused.

Think in components—not pages.

Every component must be:

• Reusable
• Accessible
• Responsive
• Animated
• Theme-aware
• Type-safe
• Composable
• Performant

---

# Component Philosophy

Build small.

Compose large.

Avoid duplication.

Every component should have

Variants

Sizes

States

Animation

Accessibility

Loading State

Empty State

Error State

Responsive Behavior

---

# Folder Structure

components/

ui/

layout/

navigation/

hero/

sections/

cards/

gallery/

forms/

charts/

timeline/

testimonials/

cta/

donation/

blog/

animations/

icons/

common/

---

# Component Naming

Always use

PascalCase

Examples

HeroSection

ProgramCard

ImpactCounter

GalleryGrid

ResidentCard

SectionHeading

PrimaryButton

GlassCard

TimelineItem

AnimatedBackground

Never

hero

card1

test

componentNew

---

# Component Categories

Foundation

Layout

Navigation

Display

Cards

Forms

Media

Animations

Charts

Feedback

CTA

Utilities

---

# FOUNDATION COMPONENTS

---

## Container

Purpose

Limit page width.

Props

size

padding

center

fluid

Variants

sm

md

lg

xl

full

---

## Section

Purpose

Standard page section wrapper.

Props

background

spacing

divider

animation

id

---

## Grid

Responsive grid wrapper.

Supports

2

3

4

6

12 columns

---

## Stack

Vertical spacing utility.

---

## Flex

Horizontal layouts.

---

## Spacer

Consistent whitespace.

---

# TYPOGRAPHY COMPONENTS

---

SectionHeading

Eyebrow

Title

Subtitle

Description

Highlight Text

Gradient Text

Quote

Statistic Number

Caption

Badge

Label

---

Animations

Fade

Word Reveal

Letter Reveal

Gradient Sweep

Underline Draw

---

# BUTTON COMPONENTS

PrimaryButton

SecondaryButton

OutlineButton

GhostButton

GradientButton

IconButton

FloatingButton

DonateButton

VolunteerButton

WhatsAppButton

ScrollTopButton

BackButton

ShareButton

DownloadButton

---

Every Button Supports

Loading

Disabled

Hover

Focus

Keyboard

Left Icon

Right Icon

Full Width

Rounded

---

Hover Animation

Lift

Glow

Ripple

Arrow Slide

Scale

---

# NAVIGATION COMPONENTS

Navbar

MegaMenu

MobileMenu

NavLink

Dropdown

Breadcrumb

PageProgress

SearchButton

ThemeToggle

LanguageSwitcher

DonateFAB

---

Navbar Features

Transparent Hero

Sticky

Glass Blur

Hide on Scroll

Reveal on Scroll

Mega Menu

Active Indicator

Animated Underline

---

# HERO COMPONENTS

Hero

HeroContent

HeroImage

HeroVideo

HeroOverlay

HeroStatistics

HeroCTA

HeroScrollIndicator

HeroParticles

HeroShapes

HeroBackground

---

Hero Features

Parallax

Mouse Follow

Floating Shapes

Animated Background

Text Reveal

Gradient Overlay

Scroll Prompt

---

# CARD COMPONENTS

GlassCard

ProgramCard

StoryCard

ImpactCard

StatisticCard

FeatureCard

GalleryCard

TeamCard

TrusteeCard

VolunteerCard

ResidentCard

EventCard

BlogCard

ReportCard

CertificateCard

DonationCard

PartnerCard

SponsorCard

FAQCard

---

Card Features

Rounded

Hover Lift

Image Zoom

Gradient Border

Soft Shadow

Glass Effect

Animated Border

CTA

---

# CONTENT COMPONENTS

MissionBlock

VisionBlock

ValuesGrid

Timeline

TimelineItem

QuoteBlock

ImageText

Callout

InfoBox

FeatureList

IconList

Checklist

NumberList

StatisticsGrid

ImpactSummary

---

# STORY COMPONENTS

ResidentStory

VolunteerStory

DonorStory

FamilyStory

SuccessStory

VideoStory

StoryQuote

StoryGallery

StoryTimeline

---

Animation

Image Reveal

Quote Fade

Content Slide

Background Blur

---

# IMPACT COMPONENTS

Counter

ProgressCircle

ProgressBar

BarChart

PieChart

LineChart

GrowthCard

ImpactGrid

DonationBreakdown

MapSection

StatisticsRibbon

MetricCard

---

Counter Animation

Count Up

Ease Out

Trigger On Scroll

---

# GALLERY COMPONENTS

GalleryGrid

GalleryItem

MasonryGallery

Lightbox

VideoGallery

CategoryFilter

AlbumGrid

ImageCarousel

InfiniteGallery

GalleryHero

---

Gallery Features

Lazy Load

Blur Placeholder

Hover Zoom

Lightbox

Keyboard Support

Swipe

Download

Share

---

# MEDIA COMPONENTS

ResponsiveImage

ImageReveal

LazyImage

VideoPlayer

BackgroundVideo

LottieAnimation

SVGIllustration

LogoCloud

Avatar

---

Image Features

WebP

Blur Placeholder

Aspect Ratio

Lazy

Priority

Caption

---

# FORM COMPONENTS

Input

Textarea

Select

Checkbox

Radio

Switch

DatePicker

Upload

OTP

SearchInput

NewsletterForm

VolunteerForm

ContactForm

DonationForm

---

Form Features

Validation

Errors

Success

Loading

ARIA

Keyboard

Animated Labels

---

# DONATION COMPONENTS

DonationWidget

AmountSelector

DonationImpact

RecurringToggle

PaymentMethods

BankDetails

QRCode

ReceiptPreview

TaxBenefits

TransparencyBlock

DonationSuccess

---

# CTA COMPONENTS

DonateCTA

VolunteerCTA

CSRCTA

NewsletterCTA

EmergencyCTA

FloatingCTA

SectionCTA

BannerCTA

---

CTA Features

Background Image

Overlay

Animated Shapes

Button Group

Statistics

---

# TESTIMONIAL COMPONENTS

TestimonialSlider

VideoTestimonial

QuoteCard

AvatarCard

ReviewCarousel

ReviewGrid

---

Animation

Auto Scroll

Drag

Fade

Scale

---

# BLOG COMPONENTS

ArticleCard

FeaturedArticle

CategoryTabs

AuthorCard

RelatedPosts

ReadingProgress

ShareBar

TableOfContents

---

# EVENT COMPONENTS

Calendar

Countdown

EventCard

RegistrationForm

Agenda

SpeakerCard

Schedule

LocationMap

---

# REPORT COMPONENTS

DocumentCard

PDFPreview

DownloadCard

CertificateGrid

AuditCard

FinancialSummary

PolicyCard

---

# FOOTER COMPONENTS

Footer

FooterLinks

Newsletter

ContactInfo

SocialLinks

MapEmbed

Copyright

---

# FEEDBACK COMPONENTS

Toast

Alert

EmptyState

LoadingState

Skeleton

ErrorState

SuccessMessage

ConfirmationDialog

---

# ANIMATION COMPONENTS

FadeIn

SlideUp

ScaleIn

RotateIn

BlurReveal

MaskReveal

TextReveal

CounterAnimation

FloatingShapes

ParallaxLayer

CursorFollower

Magnetic

Ripple

WaveDivider

SectionTransition

PageTransition

---

# SVG COMPONENTS

WaveDivider

Blob

OrganicShape

GradientMesh

PatternDots

PatternGrid

Sparkles

CrossPattern

LeafPattern

HeartPattern

CurvedArrow

DashedPath

Stars

NoiseOverlay

FloatingCircle

Glow

---

# DECORATION COMPONENTS

FloatingParticles

GradientOrb

BlurCircle

NoiseTexture

LightBeam

FloatingLeaf

AnimatedBlob

BackgroundGrid

BackgroundDots

SectionGlow

CornerDecoration

HeroPattern

---

# LAYOUT COMPONENTS

Sidebar

StickyPanel

ContentLayout

SplitLayout

CenteredLayout

AlternatingLayout

TimelineLayout

DashboardLayout

---

# COMMON COMPONENTS

SectionHeader

SectionDivider

SectionLabel

IconBox

Badge

Chip

Tooltip

Accordion

Tabs

Modal

Drawer

Popover

Pagination

Search

Filter

---

# Component Animation Rules

Every visible component should animate once.

Animation must

Never block interaction.

Never delay usability.

Prefer

Opacity

Transform

Blur

Scale

Avoid

Width animation

Height animation

Heavy box-shadow animation

Layout shifts

---

# Hover Rules

Cards

Lift

Buttons

Glow

Images

Zoom

Icons

Rotate

Links

Underline Draw

Statistics

Highlight

---

# Accessibility

Every component must

Support keyboard

Support screen readers

Have focus states

Have ARIA labels

Maintain contrast

Respect reduced motion

---

# Performance

Lazy load images

Memoize expensive components

Dynamic import heavy components

Avoid unnecessary re-renders

Optimize animations

Minimize DOM depth

Use semantic HTML

---

# Reusability Rules

Never duplicate components.

Extend existing ones.

Prefer composition over inheritance.

Keep business logic outside UI.

Use props for customization.

Never hardcode content.

---

# AI Component Rules

Whenever generating a page:

- Always search for an existing component before creating a new one.
- Build pages by composing reusable sections.
- Every component must be independently reusable.
- Every component must support responsive layouts.
- Every component should expose configurable props instead of hardcoded values.
- Every visual element should follow `design.md`.
- Every text element should follow `content.md`.
- Every interaction should follow `features.md`.
- Every animation should use the shared motion language.
- Keep components small, predictable, and composable.

The final codebase should feel like a professional design system similar to those used by Stripe, Vercel, Linear, and Shopify—clean, scalable, elegant, and consistent.