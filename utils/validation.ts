import { z } from "zod";

/** Safe parse helper returning typed success or error message. */
export function parseWithSchema<T>(
  schema: z.ZodType<T>,
  data: unknown,
): { success: true; data: T } | { success: false; error: string } {
  const result = schema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      error: result.error.issues[0]?.message ?? "Invalid input",
    };
  }

  return { success: true, data: result.data };
}
