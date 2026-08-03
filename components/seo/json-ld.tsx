import type { JsonLd } from "@/lib/seo/json-ld";

interface JsonLdProps {
  data: JsonLd | JsonLd[];
}

/** Renders one or more JSON-LD script tags for structured data. */
export function JsonLd({ data }: JsonLdProps) {
  const items = Array.isArray(data) ? data : [data];

  return (
    <>
      {items.map((item, index) => (
        <script
          // Stable enough for static page graphs; order is intentional.
          key={`${String(item["@type"] ?? "schema")}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
