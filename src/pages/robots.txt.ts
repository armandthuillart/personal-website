import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *
Allow: /
Content-Signal: ai-train=no, search=yes, ai-input=no

Sitemap: ${new URL('sitemap-index.xml', site).href}
`);
