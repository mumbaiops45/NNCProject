// app/components/SchemaMarkup.tsx
import Script from "next/script";

interface SchemaMarkupProps {
  schema: any;
  id: string;
}

export default function SchemaMarkup({ schema, id }: SchemaMarkupProps) {
  // Handle array of schemas
  if (Array.isArray(schema)) {
    return (
      <>
        {schema.map((s, index) => (
          <Script
            key={`${id}-${index}`}
            id={`${id}-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
            strategy="beforeInteractive"
          />
        ))}
      </>
    );
  }

  // Single schema
  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="beforeInteractive"
    />
  );
}