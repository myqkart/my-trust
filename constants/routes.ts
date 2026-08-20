/**
 * Application route constants.
 */
export const ROUTES = {
  home: "/",
  about: "/about",
  programs: "/programs",
  gallery: "/gallery",
  stories: "/stories",
  events: "/events",
  impact: "/impact",
  volunteer: "/volunteer",
  donate: "/donate",
  reports: "/reports",
  blog: "/blog",
  contact: "/contact",
  search: "/search",
  privacy: "/privacy",
  terms: "/terms",
  refund: "/refund",
  cookies: "/cookies",
  accessibility: "/accessibility",
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];
