"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getBreadcrumbSchema } from "../lib/schema";
import SchemaMarkup from "./SchemaMarkup";

export default function Breadcrumb() {
  const pathname = usePathname();
  
  // ✅ FIXED: Generate breadcrumbs dynamically from pathname
  const generateBreadcrumbs = () => {
    const paths = pathname.split('/').filter(Boolean);
    const items = [{ name: 'Home', url: '/' }];
    
    let currentPath = '';
    paths.forEach((path) => {
      currentPath += `/${path}`;
      // Format: "crm-development" -> "CRM Development"
      const name = path.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      items.push({ name, url: currentPath });
    });
    
    return items;
  };

  const breadcrumbs = generateBreadcrumbs();
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} id="breadcrumb-schema" />
      
      {/* Optional: Visual breadcrumb UI */}
      <nav aria-label="Breadcrumb" style={{ padding: '10px 20px' }}>
        <ol style={{ display: 'flex', listStyle: 'none', gap: '8px' }}>
          {breadcrumbs.map((item, index) => (
            <li key={index}>
              {index < breadcrumbs.length - 1 ? (
                <Link href={item.url} style={{ color: '#00C9A7' }}>
                  {item.name}
                </Link>
              ) : (
                <span style={{ color: '#fff' }}>{item.name}</span>
              )}
              {index < breadcrumbs.length - 1 && <span style={{ marginLeft: '8px', color: '#666' }}>/</span>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}