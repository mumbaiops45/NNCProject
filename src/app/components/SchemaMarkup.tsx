// app/components/SchemaMarkup.tsx
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
          <script
            key={`${id}-${index}`}
            id={`${id}-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
          />
        ))}
      </>
    );
  }

  // Single schema
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}