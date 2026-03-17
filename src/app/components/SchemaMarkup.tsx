"use client";
import Script from "next/script";

export default function SchemaMarkup({ schema, id }: { schema: any; id: string }) {
  if (Array.isArray(schema)) {
    return (
      <>
        {schema.map((s, i) => (
          <Script key={i} id={`${id}-${i}`} type="application/ld+json">
            {JSON.stringify(s)}
          </Script>
        ))}
      </>
    );
  }
  
  return (
    <Script id={id} type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  );
}