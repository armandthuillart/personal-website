import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ params }) => {
  const pages = await getCollection('blog');
  const page = pages.find((p) => p.id === params.slug);
  if (!page) return new Response('Not found', { status: 404 });
  return new Response(page.body, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};

export async function getStaticPaths() {
  const pages = await getCollection('blog');
  return pages.map((page) => ({ params: { slug: page.id } }));
}
