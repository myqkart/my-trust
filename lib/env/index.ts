import { z } from "zod";

/**
 * Validated environment variables.
 * Public vars use NEXT_PUBLIC_; secrets stay server-only.
 */
const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
  NEXT_PUBLIC_GA_ID: z.string().optional(),
  NEXT_PUBLIC_GTM_ID: z.string().optional(),
  NEXT_PUBLIC_CLARITY_ID: z.string().optional(),
});

export type Env = z.infer<typeof envSchema>;

function createEnv(): Env {
  const parsed = envSchema.safeParse({
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
    NEXT_PUBLIC_CLARITY_ID: process.env.NEXT_PUBLIC_CLARITY_ID,
  });

  if (!parsed.success) {
    console.warn("[env] Invalid environment configuration", parsed.error.flatten());
    return {
      NODE_ENV: (process.env.NODE_ENV as Env["NODE_ENV"]) ?? "development",
    };
  }

  return parsed.data;
}

export const env = createEnv();
